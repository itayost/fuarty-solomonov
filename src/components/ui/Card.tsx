import { cn } from '@/lib/utils';
import { HTMLAttributes, forwardRef } from 'react';

// Card Container
interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'bordered' | 'elevated' | 'dark' | 'gold';
  hover?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hover = true, ...props }, ref) => {
    const variants = {
      default: 'bg-white border border-gray-200',
      bordered: 'bg-white border-2 border-primary-200',
      elevated: 'bg-white shadow-xl border-0',
      dark: 'bg-primary-900 text-white border-primary-800',
      gold: 'bg-gradient-to-br from-secondary-50 to-white border border-secondary-200'
    };

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl overflow-hidden transition-all duration-300',
          variants[variant],
          hover && 'hover:shadow-xl hover:-translate-y-1',
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';

// Card Header
interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  separator?: boolean;
}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, separator = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'px-6 py-5',
        separator && 'border-b border-gray-200',
        className
      )}
      {...props}
    />
  )
);

CardHeader.displayName = 'CardHeader';

// Card Title
export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        'text-xl font-semibold text-primary-900',
        className
      )}
      {...props}
    />
  )
);

CardTitle.displayName = 'CardTitle';

// Card Description
export const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(
        'text-sm text-gray-600 mt-1',
        className
      )}
      {...props}
    />
  )
);

CardDescription.displayName = 'CardDescription';

// Card Content
export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('px-6 py-5', className)}
      {...props}
    />
  )
);

CardContent.displayName = 'CardContent';

// Card Footer
interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  separator?: boolean;
}

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, separator = true, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'px-6 py-4 bg-gray-50',
        separator && 'border-t border-gray-200',
        className
      )}
      {...props}
    />
  )
);

CardFooter.displayName = 'CardFooter';

// Service Card - קומפוננטה מיוחדת לכרטיס שירות
interface ServiceCardProps extends HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  description: string;
  features?: string[];
  action?: React.ReactNode;
}

export const ServiceCard = forwardRef<HTMLDivElement, ServiceCardProps>(
  ({ className, icon, title, description, features, action, ...props }, ref) => {
    return (
      <Card 
        ref={ref} 
        variant="bordered" 
        className={cn('group', className)}
        {...props}
      >
        <CardHeader>
          {icon && (
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary-100 text-primary-700 group-hover:bg-primary-700 group-hover:text-white transition-all duration-300">
              {icon}
            </div>
          )}
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        
        {features && features.length > 0 && (
          <CardContent>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-secondary-500 mt-0.5">⚖</span>
                  <span className="text-sm text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        )}
        
        {action && (
          <CardFooter className="bg-gray-50">
            {action}
          </CardFooter>
        )}
      </Card>
    );
  }
);

ServiceCard.displayName = 'ServiceCard';

// Team Card - כרטיס לחבר צוות
interface TeamCardProps extends HTMLAttributes<HTMLDivElement> {
  image?: string;
  name: string;
  title: string;
  description?: string;
  contact?: {
    email?: string;
    phone?: string;
  };
}

export const TeamCard = forwardRef<HTMLDivElement, TeamCardProps>(
  ({ className, image, name, title, description, contact, ...props }, ref) => {
    return (
      <Card 
        ref={ref} 
        variant="elevated" 
        className={cn('text-center', className)}
        {...props}
      >
        {image && (
          <div className="relative h-48 w-full bg-gray-200">
            <img 
              src={image} 
              alt={name}
              className="h-full w-full object-cover"
            />
          </div>
        )}
        
        <CardHeader>
          <CardTitle className="text-2xl">{name}</CardTitle>
          <p className="text-secondary-600 font-medium mt-1">{title}</p>
        </CardHeader>
        
        {description && (
          <CardContent>
            <p className="text-gray-600">{description}</p>
          </CardContent>
        )}
        
        {contact && (
          <CardFooter className="space-y-1">
            {contact.email && (
              <a 
                href={`mailto:${contact.email}`}
                className="block text-sm text-primary-700 hover:underline"
              >
                {contact.email}
              </a>
            )}
            {contact.phone && (
              <a 
                href={`tel:${contact.phone}`}
                className="block text-sm text-primary-700 hover:underline"
              >
                {contact.phone}
              </a>
            )}
          </CardFooter>
        )}
      </Card>
    );
  }
);

TeamCard.displayName = 'TeamCard';