import { cn } from '@/lib/utils';
import { TextareaHTMLAttributes, forwardRef } from 'react';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  success?: string;
  helper?: string;
  required?: boolean;
  containerClassName?: string;
  variant?: 'default' | 'error' | 'success' | 'dark';
  textareaSize?: 'sm' | 'md' | 'lg';
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
  showCharCount?: boolean;
  maxLength?: number;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ 
    className,
    containerClassName,
    variant = 'default',
    textareaSize = 'md',
    resize = 'vertical',
    label,
    error,
    success,
    helper,
    required,
    disabled,
    id,
    showCharCount = false,
    maxLength,
    value,
    defaultValue,
    ...props 
  }, ref) => {
    // Generate unique ID if not provided
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
    
    // Determine the variant based on error/success states
    const finalVariant = error ? 'error' : success ? 'success' : variant;
    
    // Base styles
    const baseStyles = 'flex w-full rounded-lg border bg-white text-base transition-all duration-200 placeholder:text-gray-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50';
    
    // Variant styles
    const variantStyles = {
      default: 'border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20',
      error: 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 text-red-900 placeholder:text-red-400',
      success: 'border-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/20',
      dark: 'bg-gray-900 border-gray-700 text-white placeholder:text-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20',
    };
    
    // Size styles
    const sizeStyles = {
      sm: 'px-3 py-2 text-sm min-h-[80px]',
      md: 'px-4 py-3 min-h-[120px]',
      lg: 'px-5 py-4 text-lg min-h-[160px]',
    };
    
    // Resize styles
    const resizeStyles = {
      none: 'resize-none',
      vertical: 'resize-y',
      horizontal: 'resize-x',
      both: 'resize',
    };
    
    // Calculate character count
    const currentLength = (value || defaultValue || '').toString().length;
    
    return (
      <div className={cn('w-full', containerClassName)}>
        {/* Label */}
        {label && (
          <label 
            htmlFor={textareaId}
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
        
        {/* Textarea Field */}
        <textarea
          id={textareaId}
          className={cn(
            baseStyles,
            variantStyles[finalVariant],
            sizeStyles[textareaSize],
            resizeStyles[resize],
            className
          )}
          ref={ref}
          disabled={disabled}
          required={required}
          maxLength={maxLength}
          value={value}
          defaultValue={defaultValue}
          aria-invalid={!!error}
          aria-describedby={
            error ? `${textareaId}-error` : 
            success ? `${textareaId}-success` : 
            helper ? `${textareaId}-helper` : 
            undefined
          }
          {...props}
        />
        
        {/* Footer (Character count and messages) */}
        <div className="mt-2 flex justify-between items-start">
          <div className="flex-1">
            {/* Helper/Error/Success Messages */}
            {error && (
              <p id={`${textareaId}-error`} className="text-sm text-red-600">
                {error}
              </p>
            )}
            {success && !error && (
              <p id={`${textareaId}-success`} className="text-sm text-green-600">
                {success}
              </p>
            )}
            {helper && !error && !success && (
              <p id={`${textareaId}-helper`} className="text-sm text-gray-500">
                {helper}
              </p>
            )}
          </div>
          
          {/* Character Count */}
          {showCharCount && maxLength && (
            <span className={cn(
              'text-sm mr-2',
              currentLength > maxLength * 0.9 ? 'text-red-500' : 'text-gray-500'
            )}>
              {currentLength}/{maxLength}
            </span>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;

// Specialized Textarea Components

// Message Textarea - for contact forms
export const MessageTextarea = forwardRef<HTMLTextAreaElement, Omit<TextareaProps, 'placeholder'>>(
  (props, ref) => {
    return (
      <Textarea
        ref={ref}
        placeholder="כתוב את הודעתך כאן..."
        showCharCount
        maxLength={1000}
        {...props}
      />
    );
  }
);

MessageTextarea.displayName = 'MessageTextarea';

// Notes Textarea - for internal notes
export const NotesTextarea = forwardRef<HTMLTextAreaElement, Omit<TextareaProps, 'placeholder'>>(
  (props, ref) => {
    return (
      <Textarea
        ref={ref}
        placeholder="הערות..."
        textareaSize="sm"
        variant="dark"
        {...props}
      />
    );
  }
);

NotesTextarea.displayName = 'NotesTextarea';

// Legal Document Textarea - for legal texts
export const LegalTextarea = forwardRef<HTMLTextAreaElement, Omit<TextareaProps, 'placeholder'>>(
  (props, ref) => {
    return (
      <Textarea
        ref={ref}
        placeholder="הכנס טקסט משפטי..."
        textareaSize="lg"
        resize="vertical"
        className="font-mono text-sm leading-relaxed"
        {...props}
      />
    );
  }
);

LegalTextarea.displayName = 'LegalTextarea';