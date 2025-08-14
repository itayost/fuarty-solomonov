import { cn } from '@/lib/utils';
import { SelectHTMLAttributes, forwardRef } from 'react';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectGroup {
  label: string;
  options: SelectOption[];
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string;
  error?: string;
  success?: string;
  helper?: string;
  required?: boolean;
  containerClassName?: string;
  variant?: 'default' | 'error' | 'success' | 'dark';
  selectSize?: 'sm' | 'md' | 'lg' | 'xl';
  options?: SelectOption[];
  groups?: SelectGroup[];
  placeholder?: string;
  icon?: React.ReactNode;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ 
    className,
    containerClassName,
    variant = 'default',
    selectSize = 'md',
    label,
    error,
    success,
    helper,
    required,
    disabled,
    id,
    options = [],
    groups = [],
    placeholder,
    icon,
    ...props 
  }, ref) => {
    // Generate unique ID if not provided
    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
    
    // Determine the variant based on error/success states
    const finalVariant = error ? 'error' : success ? 'success' : variant;
    
    // Base styles
    const baseStyles = 'flex w-full rounded-lg border bg-white text-base transition-all duration-200 cursor-pointer appearance-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50';
    
    // Variant styles
    const variantStyles = {
      default: 'border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20',
      error: 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 text-red-900',
      success: 'border-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/20',
      dark: 'bg-gray-900 border-gray-700 text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20',
    };
    
    // Size styles
    const sizeStyles = {
      sm: 'h-9 px-3 py-1 text-sm pl-8',
      md: 'h-11 px-4 py-2 pl-10',
      lg: 'h-12 px-5 py-3 text-lg pl-12',
      xl: 'h-14 px-6 py-4 text-lg pl-14',
    };
    
    return (
      <div className={cn('w-full', containerClassName)}>
        {/* Label */}
        {label && (
          <label 
            htmlFor={selectId}
            className={cn(
              'mb-2 block text-sm font-medium',
              error ? 'text-red-700' : 'text-gray-700',
              disabled && 'opacity-50'
            )}
          >
            {label}
            {required && <span className="mr-1 text-red-500">*</span>}
          </label>
        )}
        
        {/* Select Container */}
        <div className="relative">
          {/* Icon */}
          {icon && (
            <div className="absolute right-0 top-0 flex h-full items-center pr-4 pointer-events-none">
              <span className={cn(
                'text-gray-500',
                error && 'text-red-500',
                success && 'text-green-500'
              )}>
                {icon}
              </span>
            </div>
          )}
          
          {/* Select Field */}
          <select
            id={selectId}
            className={cn(
              baseStyles,
              variantStyles[finalVariant],
              sizeStyles[selectSize],
              icon && 'pr-12',
              className
            )}
            ref={ref}
            disabled={disabled}
            required={required}
            aria-invalid={!!error}
            aria-describedby={
              error ? `${selectId}-error` : 
              success ? `${selectId}-success` : 
              helper ? `${selectId}-helper` : 
              undefined
            }
            {...props}
          >
            {/* Placeholder */}
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            
            {/* Simple Options */}
            {options.length > 0 && options.map((option) => (
              <option 
                key={option.value} 
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
            
            {/* Grouped Options */}
            {groups.length > 0 && groups.map((group) => (
              <optgroup key={group.label} label={group.label}>
                {group.options.map((option) => (
                  <option 
                    key={option.value} 
                    value={option.value}
                    disabled={option.disabled}
                  >
                    {option.label}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
          
          {/* Dropdown Arrow */}
          <div className="absolute left-0 top-0 flex h-full items-center pl-3 pointer-events-none">
            <svg 
              className="h-4 w-4 text-gray-500" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        
        {/* Helper/Error/Success Messages */}
        {error && (
          <p id={`${selectId}-error`} className="mt-2 text-sm text-red-600">
            {error}
          </p>
        )}
        {success && !error && (
          <p id={`${selectId}-success`} className="mt-2 text-sm text-green-600">
            {success}
          </p>
        )}
        {helper && !error && !success && (
          <p id={`${selectId}-helper`} className="mt-2 text-sm text-gray-500">
            {helper}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;

// Specialized Select Components

// Practice Area Select - לבחירת תחום התמחות
export const PracticeAreaSelect = forwardRef<HTMLSelectElement, Omit<SelectProps, 'options'>>(
  (props, ref) => {
    const practiceAreas: SelectOption[] = [
      { value: 'real-estate', label: 'דיני מקרקעין' },
      { value: 'banking', label: 'דיני בנקאות' },
      { value: 'torts', label: 'דיני נזיקין' },
      { value: 'corporate', label: 'דיני חברות' },
      { value: 'contracts', label: 'דיני חוזים' },
      { value: 'inheritance', label: 'דיני ירושה' },
      { value: 'execution', label: 'הוצאה לפועל' },
      { value: 'other', label: 'אחר' },
    ];
    
    return (
      <Select
        ref={ref}
        options={practiceAreas}
        placeholder="בחר תחום התמחות"
        icon={
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        }
        {...props}
      />
    );
  }
);

PracticeAreaSelect.displayName = 'PracticeAreaSelect';

// Urgency Select - לבחירת דחיפות
export const UrgencySelect = forwardRef<HTMLSelectElement, Omit<SelectProps, 'options'>>(
  (props, ref) => {
    const urgencyLevels: SelectOption[] = [
      { value: 'low', label: 'רגיל' },
      { value: 'medium', label: 'בינוני' },
      { value: 'high', label: 'דחוף' },
      { value: 'urgent', label: 'דחוף מאוד' },
    ];
    
    return (
      <Select
        ref={ref}
        options={urgencyLevels}
        placeholder="בחר רמת דחיפות"
        {...props}
      />
    );
  }
);

UrgencySelect.displayName = 'UrgencySelect';

// Time Select - לבחירת זמן
export const TimeSelect = forwardRef<HTMLSelectElement, Omit<SelectProps, 'groups'>>(
  (props, ref) => {
    const timeGroups: SelectGroup[] = [
      {
        label: 'בוקר',
        options: [
          { value: '09:00', label: '09:00' },
          { value: '09:30', label: '09:30' },
          { value: '10:00', label: '10:00' },
          { value: '10:30', label: '10:30' },
          { value: '11:00', label: '11:00' },
          { value: '11:30', label: '11:30' },
        ]
      },
      {
        label: 'צהריים',
        options: [
          { value: '12:00', label: '12:00' },
          { value: '12:30', label: '12:30' },
          { value: '13:00', label: '13:00' },
          { value: '13:30', label: '13:30' },
          { value: '14:00', label: '14:00' },
        ]
      },
      {
        label: 'אחר הצהריים',
        options: [
          { value: '14:30', label: '14:30' },
          { value: '15:00', label: '15:00' },
          { value: '15:30', label: '15:30' },
          { value: '16:00', label: '16:00' },
          { value: '16:30', label: '16:30' },
          { value: '17:00', label: '17:00' },
          { value: '17:30', label: '17:30' },
        ]
      }
    ];
    
    return (
      <Select
        ref={ref}
        groups={timeGroups}
        placeholder="בחר שעה"
        icon={
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        }
        {...props}
      />
    );
  }
);

TimeSelect.displayName = 'TimeSelect';

// Country Select - לבחירת מדינה
export const CountrySelect = forwardRef<HTMLSelectElement, Omit<SelectProps, 'options'>>(
  (props, ref) => {
    const countries: SelectOption[] = [
      { value: 'IL', label: 'ישראל' },
      { value: 'US', label: 'ארצות הברית' },
      { value: 'GB', label: 'בריטניה' },
      { value: 'CA', label: 'קנדה' },
      { value: 'FR', label: 'צרפת' },
      { value: 'DE', label: 'גרמניה' },
      { value: 'other', label: 'אחר' },
    ];
    
    return (
      <Select
        ref={ref}
        options={countries}
        placeholder="בחר מדינה"
        {...props}
      />
    );
  }
);

CountrySelect.displayName = 'CountrySelect';