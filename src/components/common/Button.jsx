import React from 'react';

/**
 * Reusable Button Component
 * Follows the Pink x Orange visual identity with accessibility and hover states.
 * 
 * @param {string} variant - 'primary' (Sunset Orange) | 'secondary' (Rose Pink) | 'outline' | 'ghost'
 * @param {string} size - 'sm' | 'md' | 'lg'
 * @param {string} href - Optional link URL (renders <a> if provided, otherwise <button>)
 * @param {ReactNode} icon - Optional icon component
 * @param {string} iconPosition - 'left' | 'right'
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  icon: Icon,
  iconPosition = 'right',
  className = '',
  disabled = false,
  type = 'button',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-palette-sunset disabled:opacity-50 disabled:cursor-not-allowed select-none';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-2.5 gap-2',
    lg: 'text-base px-8 py-3.5 gap-2.5 font-semibold',
  };

  const variantStyles = {
    primary: 'bg-palette-sunset text-palette-white hover:bg-[#F2782B] shadow-sunset-glow hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0',
    secondary: 'bg-palette-charcoal text-white hover:bg-palette-charcoal/90 hover:-translate-y-0.5 active:translate-y-0',
    outline: 'border-2 border-palette-sunset/40 text-palette-charcoal dark:text-white dark:border-white/20 hover:border-palette-sunset hover:bg-palette-sunset/10 dark:hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0',
    ghost: 'text-palette-charcoal dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 active:bg-slate-200',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-x-0.5" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
}
