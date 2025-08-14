import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { InputHTMLAttributes, forwardRef, useState } from 'react';

const inputVariants = cva(
  'flex w-full rounded-lg border bg-white px-4 py-3 text-base transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20',
        error: 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 text-red-900 placeholder:text-red-400',
        success: 'border-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/20',
        dark: 'bg-gray-900 border-gray-700 text-white placeholder:text-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20',
      },
      inputSize: {
        sm: 'h-9 px-3 py-1 text-sm',
        md: 'h-11 px-4 py-2',
        lg: 'h-12 px-5 py-3 text-lg',
        xl: 'h-14 px-6 py-4 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      inputSize: 'md',
    },
  }
);

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  label?: string;
  error?: string;
  success?: string;
  helper?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  required?: boolean;
  containerClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className,
    containerClassName,
    type = 'text',
    variant,
    inputSize,
    label,
    error,
    success,
    helper,
    icon,
    iconPosition = 'left',
    required,
    disabled,
    id,
    ...props 
  }, ref) => {
    // Generate unique ID if not provided
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    
    // Determine the variant based on error/success states
    const finalVariant = error ? 'error' : success ? 'success' : variant;
    
    return (
      <div className={cn('w-full', containerClassName)}>
        {/* Label */}
        {label && (
          <label 
            htmlFor={inputId}
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
        
        {/* Input Container */}
        <div className="relative">
          {/* Left Icon */}
          {icon && iconPosition === 'left' && (
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
          
          {/* Input Field */}
          <input
            id={inputId}
            type={type}
            className={cn(
              inputVariants({ variant: finalVariant, inputSize }),
              icon && iconPosition === 'left' && 'pr-12',
              icon && iconPosition === 'right' && 'pl-12',
              className
            )}
            ref={ref}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={
              error ? `${inputId}-error` : 
              success ? `${inputId}-success` : 
              helper ? `${inputId}-helper` : 
              undefined
            }
            {...props}
          />
          
          {/* Right Icon */}
          {icon && iconPosition === 'right' && (
            <div className="absolute left-0 top-0 flex h-full items-center pl-4 pointer-events-none">
              <span className={cn(
                'text-gray-500',
                error && 'text-red-500',
                success && 'text-green-500'
              )}>
                {icon}
              </span>
            </div>
          )}
          
          {/* Validation Icons */}
          {(error || success) && !icon && (
            <div className="absolute left-0 top-0 flex h-full items-center pl-4 pointer-events-none">
              {error && (
                <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              )}
              {success && !error && (
                <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
            </div>
          )}
        </div>
        
        {/* Helper/Error/Success Messages */}
        {error && (
          <p id={`${inputId}-error`} className="mt-2 text-sm text-red-600">
            {error}
          </p>
        )}
        {success && !error && (
          <p id={`${inputId}-success`} className="mt-2 text-sm text-green-600">
            {success}
          </p>
        )}
        {helper && !error && !success && (
          <p id={`${inputId}-helper`} className="mt-2 text-sm text-gray-500">
            {helper}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

// Specialized Input Components

// Phone Input
export const PhoneInput = forwardRef<HTMLInputElement, Omit<InputProps, 'type'>>(
  (props, ref) => {
    return (
      <Input
        ref={ref}
        type="tel"
        inputMode="tel"
        pattern="[0-9]{2,3}-?[0-9]{7,8}"
        placeholder="050-1234567"
        icon={
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        }
        {...props}
      />
    );
  }
);

PhoneInput.displayName = 'PhoneInput';

// Email Input
export const EmailInput = forwardRef<HTMLInputElement, Omit<InputProps, 'type'>>(
  (props, ref) => {
    return (
      <Input
        ref={ref}
        type="email"
        inputMode="email"
        autoComplete="email"
        placeholder="your@email.com"
        icon={
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        }
        {...props}
      />
    );
  }
);

EmailInput.displayName = 'EmailInput';

// Search Input
export const SearchInput = forwardRef<HTMLInputElement, Omit<InputProps, 'type'>>(
  (props, ref) => {
    return (
      <Input
        ref={ref}
        type="search"
        placeholder="חיפוש..."
        icon={
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        }
        {...props}
      />
    );
  }
);

SearchInput.displayName = 'SearchInput';

// Password Input with toggle visibility
export const PasswordInput = forwardRef<HTMLInputElement, Omit<InputProps, 'type'>>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    
    return (
      <div className="relative">
        <Input
          ref={ref}
          type={showPassword ? 'text' : 'password'}
          className={cn('pl-12', className)}
          {...props}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute left-0 top-0 flex h-full items-center pl-4 text-gray-500 hover:text-gray-700"
        >
          {showPassword ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          )}
        </button>
      </div>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';

export default Input;