import { ReactNode } from 'react';

export interface StateCardProps {
    mode?: 'light' | 'dark';
    type?: 'accent' | 'info' | 'success' | 'danger' | 'warning' | 'neutral';
    align?: 'left' | 'center' | 'right';
    children: ReactNode;
    className?: string;
}

const typeStyles = {
    neutral: {
        dark: 'bg-neutral-50 text-white',
        light: 'bg-neutral-20 text-neutral-50'
    },
    accent: {
        dark: 'bg-primary-purple-50 text-white',
        light: 'bg-primary-purple-20 text-primary-purple-50'
    },
    success: {
        dark: 'bg-success-green-50 text-white',
        light: 'bg-success-green-20 text-success-green-50'
    },
    info: {
        dark: 'bg-info-blue-50 text-white',
        light: 'bg-info-blue-20 text-info-blue-50'
    },
    warning: {
        dark: 'bg-warning-yellow-50 text-white',
        light: 'bg-warning-yellow-20 text-warning-yellow-50'
    },
    danger: {
        dark: 'bg-error-red-50 text-white',
        light: 'bg-error-red-20 text-error-red-50'
    }
};

export function StateCard({
    mode = 'dark',
    type = 'accent',
    align = 'center',
    children,
    className = ''
}: StateCardProps) {
    return (
        <div
            className={`${className} ${typeStyles[type][mode]} flex w-full ${
                align === 'center' ? 'justify-center' : align === 'right' ? 'justify-end' : ''
            } items-center rounded-lg`}>
            {children}
        </div>
    );
}
