import { cn } from '@/lib/utils';
import { InputHTMLAttributes, forwardRef } from 'react';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string;
  description?: string;
  error?: string;
  containerClassName?: string;
  variant?: 'default' | 'error' | 'success' | 'primary' | 'secondary';
  checkboxSize?: 'sm' | 'md' | 'lg';
  indeterminate?: boolean;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ 
    className,
    containerClassName,
    variant = 'default',
    checkboxSize = 'md',
    label,
    description,
    error,
    disabled,
    id,
    indeterminate,
    ...props 
  }, ref) => {
    // Generate unique ID if not provided
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
    
    // Base styles for the checkbox
    const baseStyles = 'peer rounded border-2 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';
    
    // Variant styles
    const variantStyles = {
      default: 'border-gray-300 text-primary-600 focus:ring-primary-600 checked:bg-primary-600 checked:border-primary-600',
      error: 'border-red-500 text-red-600 focus:ring-red-500 checked:bg-red-600 checked:border-red-600',
      success: 'border-green-500 text-green-600 focus:ring-green-500 checked:bg-green-600 checked:border-green-600',
      primary: 'border-primary-600 text-primary-700 focus:ring-primary-600 checked:bg-primary-700 checked:border-primary-700',
      secondary: 'border-secondary-500 text-secondary-600 focus:ring-secondary-500 checked:bg-secondary-600 checked:border-secondary-600',
    };
    
    // Size styles
    const sizeStyles = {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6',
    };
    
    // Label size styles
    const labelSizeStyles = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    };
    
    return (
      <div className={cn('flex', containerClassName)}>
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id={checkboxId}
              type="checkbox"
              className={cn(
                baseStyles,
                variantStyles[error ? 'error' : variant],
                sizeStyles[checkboxSize],
                className
              )}
              ref={ref}
              disabled={disabled}
              aria-invalid={!!error}
              aria-describedby={error ? `${checkboxId}-error` : undefined}
              {...props}
            />
          </div>
          {(label || description || error) && (
            <div className="mr-3 text-right">
              {label && (
                <label 
                  htmlFor={checkboxId}
                  className={cn(
                    'font-medium cursor-pointer select-none',
                    labelSizeStyles[checkboxSize],
                    error ? 'text-red-700' : 'text-gray-900',
                    disabled && 'opacity-50 cursor-not-allowed'
                  )}
                >
                  {label}
                </label>
              )}
              {description && (
                <p className="text-sm text-gray-500 mt-1">
                  {description}
                </p>
              )}
              {error && (
                <p id={`${checkboxId}-error`} className="text-sm text-red-600 mt-1">
                  {error}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;

// Checkbox Group Component
export interface CheckboxGroupProps {
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
  orientation?: 'vertical' | 'horizontal';
}

export const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>(
  ({ label, description, error, required, children, className, orientation = 'vertical' }, ref) => {
    return (
      <div ref={ref} className={cn('space-y-2', className)}>
        {label && (
          <div className="mb-2">
            <span className="text-sm font-medium text-gray-700">
              {label}
              {required && <span className="mr-1 text-red-500">*</span>}
            </span>
            {description && (
              <p className="text-sm text-gray-500 mt-1">{description}</p>
            )}
          </div>
        )}
        <div className={cn(
          orientation === 'vertical' ? 'space-y-3' : 'flex flex-wrap gap-4'
        )}>
          {children}
        </div>
        {error && (
          <p className="text-sm text-red-600 mt-2">{error}</p>
        )}
      </div>
    );
  }
);

CheckboxGroup.displayName = 'CheckboxGroup';

// Specialized Checkbox Components

// Terms Checkbox - לאישור תנאי שימוש
export const TermsCheckbox = forwardRef<HTMLInputElement, Omit<CheckboxProps, 'label'>>(
  ({ required = true, ...props }, ref) => {
    return (
      <Checkbox
        ref={ref}
        label="אני מסכים/ה לתנאי השימוש ומדיניות הפרטיות"
        required={required}
        variant="primary"
        {...props}
      />
    );
  }
);

TermsCheckbox.displayName = 'TermsCheckbox';

// Privacy Checkbox - להסכמה לעיבוד מידע
export const PrivacyCheckbox = forwardRef<HTMLInputElement, Omit<CheckboxProps, 'label' | 'description'>>(
  (props, ref) => {
    return (
      <Checkbox
        ref={ref}
        label="הסכמה לעיבוד נתונים אישיים"
        description="אני מסכים/ה שהמידע שמסרתי ישמש לצורך מתן השירות המשפטי ויישמר בהתאם לחוק הגנת הפרטיות"
        variant="primary"
        {...props}
      />
    );
  }
);

PrivacyCheckbox.displayName = 'PrivacyCheckbox';

// Newsletter Checkbox - להרשמה לעדכונים
export const NewsletterCheckbox = forwardRef<HTMLInputElement, Omit<CheckboxProps, 'label' | 'description'>>(
  (props, ref) => {
    return (
      <Checkbox
        ref={ref}
        label="אני מעוניין/ת לקבל עדכונים ומאמרים משפטיים"
        description="תוכלו להסיר את עצמכם מרשימת התפוצה בכל עת"
        {...props}
      />
    );
  }
);

NewsletterCheckbox.displayName = 'NewsletterCheckbox';

// Confirmation Checkbox - לאישור פעולות
export const ConfirmationCheckbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label = "אני מאשר/ת שהפרטים שמסרתי נכונים ומדויקים", ...props }, ref) => {
    return (
      <Checkbox
        ref={ref}
        label={label}
        variant="success"
        required
        {...props}
      />
    );
  }
);

ConfirmationCheckbox.displayName = 'ConfirmationCheckbox';

// Legal Document Checkbox List - לבחירת מסמכים נדרשים
export interface LegalDocumentChecklistProps {
  label?: string;
  documents?: Array<{ id: string; name: string; required?: boolean }>;
  onChange?: (selectedDocuments: string[]) => void;
}

export const LegalDocumentChecklist: React.FC<LegalDocumentChecklistProps> = ({
  label = "מסמכים נדרשים",
  documents = [
    { id: 'id', name: 'תעודת זהות', required: true },
    { id: 'contract', name: 'חוזה/הסכם', required: true },
    { id: 'ownership', name: 'מסמכי בעלות' },
    { id: 'bank', name: 'אישורים בנקאיים' },
    { id: 'tax', name: 'אישורי מס' },
    { id: 'other', name: 'מסמכים נוספים' },
  ],
  onChange
}) => {
  const handleChange = (docId: string, checked: boolean) => {
    if (onChange) {
      // This is simplified - in real app you'd manage state properly
      onChange([docId]);
    }
  };

  return (
    <CheckboxGroup label={label} description="סמן את המסמכים שברשותך">
      {documents.map((doc) => (
        <Checkbox
          key={doc.id}
          label={doc.name}
          required={doc.required}
          onChange={(e) => handleChange(doc.id, e.target.checked)}
          variant={doc.required ? 'primary' : 'default'}
        />
      ))}
    </CheckboxGroup>
  );
};

// Service Selection Checkboxes - לבחירת שירותים
export interface ServiceSelectionProps {
  services?: Array<{ id: string; name: string; description?: string }>;
  onChange?: (selectedServices: string[]) => void;
}

export const ServiceSelection: React.FC<ServiceSelectionProps> = ({
  services = [
    { id: 'consultation', name: 'ייעוץ משפטי', description: 'פגישת ייעוץ ראשונית' },
    { id: 'representation', name: 'ייצוג בבית משפט', description: 'ייצוג בהליכים משפטיים' },
    { id: 'contract', name: 'עריכת חוזים', description: 'ניסוח ועריכת מסמכים משפטיים' },
    { id: 'negotiation', name: 'ניהול משא ומתן', description: 'ליווי במשא ומתן משפטי' },
  ],
  onChange
}) => {
  return (
    <CheckboxGroup 
      label="בחר שירותים" 
      description="ניתן לבחור יותר משירות אחד"
    >
      {services.map((service) => (
        <Checkbox
          key={service.id}
          label={service.name}
          description={service.description}
          variant="default"
          onChange={(e) => onChange && onChange([service.id])}
        />
      ))}
    </CheckboxGroup>
  );
};