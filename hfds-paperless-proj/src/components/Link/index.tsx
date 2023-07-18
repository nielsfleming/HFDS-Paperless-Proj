import { clsx } from 'clsx';

export interface LinkTypes {
    children: string;
    href: string;
    size?: 'sm' | 'md';
    inactive?: boolean;
    openNewTab?: boolean;
    tabIndex?: number;
    className?: string;
}

const sizeStyles = {
    md: 'text-sm',
    sm: 'text-[10px]'
};

export function Link({
    children,
    href,
    size = 'md',
    inactive = false,
    openNewTab = false,
    tabIndex = 0,
    className
}: LinkTypes) {
    return (
        <a
            target={openNewTab ? '_blank' : '_self'}
            rel='noreferrer'
            tabIndex={tabIndex}
            href={inactive ? undefined : href}
            className={clsx(
                className,
                sizeStyles[size],
                'font-medium underline underline-offset-4 focus-visible:outline-none',
                inactive
                    ? 'text-neutral-25 pointer-events-none'
                    : 'text-primary-purple-50 hover:text-primary-purple-50 hover:no-underline active:text-primary-purple-70 visited:text-primary-purple-70 focus-visible:ring focus-visible:ring-primary-purple-50/50'
            )}>
            {children}
        </a>
    );
}
