import { ReactNode, ButtonHTMLAttributes } from 'react';

type ButtonAttrs = ButtonHTMLAttributes<HTMLButtonElement>;

export interface ButtonProps extends Pick<ButtonAttrs, 'onClick' | 'className'> {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'tertiary';
    type?: 'accent' | 'info' | 'success' | 'danger' | 'warning' | 'neutral';
    size?: 'sm' | 'md' | 'lg';
    inactive?: boolean;
    htmlType?: ButtonAttrs['type'];
}

const typeStyles = {
    accent: {
        textColor: 'text-primary-purple-50',
        pressTextColor: 'active:text-primary-purple-60',
        // primary styles
        primaryColor: 'bg-primary-purple-50',
        primaryHoverColor: 'hover:bg-primary-purple-60',
        primaryPressColor: 'active:bg-primary-purple-70',
        // secondary styles
        secondaryColor: 'bg-primary-purple-20',
        secondaryHoverColor: 'hover:bg-primary-purple-30 hover:text-primary-purple-60',
        secondaryPressColor: 'active:bg-primary-purple-40',
        // tertiary styles
        tertiaryHoverColor: 'hover:bg-primary-purple-10',
        tertiaryPressColor: 'active:bg-primary-purple-20'
    },
    info: {
        textColor: 'text-info-blue-50',
        pressTextColor: 'active:text-info-blue-60',
        // primary styles
        primaryColor: 'bg-info-blue-50',
        primaryHoverColor: 'hover:bg-info-blue-60',
        primaryPressColor: 'active:bg-info-blue-70',
        // secondary styles
        secondaryColor: 'bg-info-blue-20',
        secondaryHoverColor: 'hover:bg-info-blue-30 hover:text-info-blue-60',
        secondaryPressColor: 'active:bg-info-blue-40',
        // tertiary styles
        tertiaryHoverColor: 'hover:bg-info-blue-10',
        tertiaryPressColor: 'active:bg-info-blue-20'
    },
    success: {
        textColor: 'text-success-green-50',
        pressTextColor: 'active:text-success-green-60',
        // primary styles
        primaryColor: 'bg-success-green-50',
        primaryHoverColor: 'hover:bg-success-green-60',
        primaryPressColor: 'active:bg-success-green-70',
        // secondary styles
        secondaryColor: 'bg-success-green-20',
        secondaryHoverColor: 'hover:bg-success-green-30 hover:text-success-green-60',
        secondaryPressColor: 'active:bg-success-green-40',
        // tertiary styles
        tertiaryHoverColor: 'hover:bg-success-green-10',
        tertiaryPressColor: 'active:bg-success-green-20'
    },
    warning: {
        textColor: 'text-warning-yellow-50',
        pressTextColor: 'active:text-warning-yellow-60',
        // primary styles
        primaryColor: 'bg-warning-yellow-50',
        primaryHoverColor: 'hover:bg-warning-yellow-60',
        primaryPressColor: 'active:bg-warning-yellow-70',
        // secondary styles
        secondaryColor: 'bg-warning-yellow-20',
        secondaryHoverColor: 'hover:bg-warning-yellow-30 hover:text-warning-yellow-60',
        secondaryPressColor: 'active:bg-warning-yellow-40',
        // tertiary styles
        tertiaryHoverColor: 'hover:bg-warning-yellow-10',
        tertiaryPressColor: 'active:bg-warning-yellow-20'
    },
    danger: {
        textColor: 'text-error-red-50',
        pressTextColor: 'active:text-error-red-60',
        // primary styles
        primaryColor: 'bg-error-red-50',
        primaryHoverColor: 'hover:bg-error-red-60',
        primaryPressColor: 'active:bg-error-red-70',
        // secondary styles
        secondaryColor: 'bg-error-red-20',
        secondaryHoverColor: 'hover:bg-error-red-30 hover:text-error-red-60',
        secondaryPressColor: 'active:bg-error-red-40 ',
        // tertiary styles
        tertiaryHoverColor: 'hover:bg-error-red-10',
        tertiaryPressColor: 'active:bg-error-red-20'
    },
    neutral: {
        textColor: 'text-neutral-40',
        pressTextColor: 'active:text-neutral-60',
        // primary styles
        primaryColor: 'bg-neutral-40',
        primaryHoverColor: 'hover:bg-neutral-50',
        primaryPressColor: 'active:bg-neutral-70',
        // secondary styles
        secondaryColor: 'bg-neutral-20',
        secondaryHoverColor: 'hover:bg-neutral-30 hover:text-neutral-60',
        secondaryPressColor: 'active:bg-neutral-40',
        // tertiary styles
        tertiaryHoverColor: 'hover:bg-neutral-10',
        tertiaryPressColor: 'active:bg-neutral-20'
    }
};

export function Button({
    children,
    variant = 'primary',
    type = 'accent',
    size = 'md',
    inactive = false,
    onClick,
    className = '',
    htmlType
}: ButtonProps) {
    const variantStyles = {
        primary: `[&]:text-white ${typeStyles[type].primaryColor} ${typeStyles[type].primaryHoverColor} ${typeStyles[type].primaryPressColor}`,
        secondary: `active:text-white ${typeStyles[type].secondaryColor} ${typeStyles[type].textColor} ${typeStyles[type].secondaryHoverColor} ${typeStyles[type].secondaryPressColor}`,
        tertiary: `[&]:bg-transparent ${typeStyles[type].textColor} ${typeStyles[type].tertiaryHoverColor} ${typeStyles[type].tertiaryPressColor} ${typeStyles[type].pressTextColor}`
    };

    const sizeStyles = {
        lg: `text-base rounded-lg px-6 [&]:py-3`,
        md: `[&]:text-sm rounded-lg px-6 [&]:py-2`,
        sm: `[&]:text-sm hover:underline [&]:bg-transparent ${typeStyles[type].textColor} ${typeStyles[type].pressTextColor}`
    };

    return (
        <button
            type={htmlType}
            onClick={onClick}
            disabled={inactive}
            className={`${className} ${
                inactive
                    ? size === 'sm'
                        ? '[&]:text-sm text-neutral-25'
                        : `bg-neutral-25 [&]:text-white ${sizeStyles[size]}`
                    : size !== 'sm'
                    ? `${sizeStyles[size]} ${variantStyles[variant]}`
                    : sizeStyles[size]
            } font-semibold transition-all focus-visible:outline-none focus-visible:ring focus-visible:ring-primary-purple-50/50`}>
            {children}
        </button>
    );
}
