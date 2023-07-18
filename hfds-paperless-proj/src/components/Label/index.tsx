import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge } from '../Badge';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { ReactNode } from 'react';
import { clsx } from 'clsx';

export type LabelProps = (
    | { label: string; children?: never }
    | { children: ReactNode; label?: never }
) & {
    mode?: 'dark' | 'light';
    variant?: 'none' | 'badge' | 'close';
    size?: 'sm' | 'md' | 'lg';
    type?: 'neutral' | 'accent' | 'info' | 'success' | 'warning' | 'danger';
    badgeNumber?: number;
    onDismiss?(): void;
    className?: string;
    inline?: boolean;
};

const typeStyles = {
    neutral: {
        light: 'bg-neutral-20 text-neutral-50',
        dark: 'bg-neutral-50 [&]:text-white'
    },
    accent: {
        light: 'bg-primary-purple-20 text-primary-purple-50',
        dark: 'bg-primary-purple-50 [&]:text-white'
    },
    info: {
        light: 'bg-info-blue-20 text-info-blue-50',
        dark: 'bg-info-blue-50 [&]:text-white'
    },
    success: {
        light: 'bg-success-green-20 text-success-green-50',
        dark: 'bg-success-green-50 [&]:text-white'
    },
    warning: {
        light: 'bg-warning-yellow-20 text-warning-yellow-50',
        dark: 'bg-warning-yellow-50 [&]:text-white'
    },
    danger: {
        light: 'bg-error-red-20 text-error-red-50',
        dark: 'bg-error-red-50 [&]:text-white'
    }
};

const sizeStyles = {
    lg: `[&]:text-base`,
    md: `[&]:text-sm`,
    sm: `text-xs`
};

export function Label({
    mode = 'dark',
    variant = 'none',
    type = 'accent',
    size = 'md',
    badgeNumber = 0,
    onDismiss,
    className = '',
    inline,
    ...rest
}: LabelProps) {
    return (
        <div
            className={clsx(
                className,
                typeStyles[type][mode],
                sizeStyles[size],
                'w-fit rounded-[4px] py-0.5 [&]:px-2 items-center justify-center font-medium tracking-wider',
                inline ? 'inline-flex' : 'flex',
                !(variant === 'badge' && badgeNumber === 0) && '[&]:gap-1',
                variant === 'close' &&
                    '[&:has(:focus-visible)]:outline-none [&:has(:focus-visible)]:ring [&:has(:focus-visible)]:ring-primary-purple-30'
            )}>
            {'children' in rest
                ? rest.children
                : size === 'lg'
                ? rest.label.toUpperCase()
                : rest.label}
            {variant === 'badge' && (
                <div className={sizeStyles[size]}>
                    <Badge
                        type={type}
                        mode={mode === 'dark' ? 'light' : 'dark'}
                        number={badgeNumber}></Badge>
                </div>
            )}
            {variant === 'close' && (
                <button onClick={onDismiss} className='h-fit focus-visible:outline-none'>
                    <FontAwesomeIcon
                        className='cursor-pointer'
                        icon={faXmark}
                        onClick={onDismiss}
                    />
                </button>
            )}
        </div>
    );
}
