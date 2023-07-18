import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode } from 'react';

export interface MenuItemProps {
    className?: string;
    children?: ReactNode;
    leftIcon?: IconDefinition;
    rightIcon?: IconDefinition;
    iconClass?: string;
    disabled?: boolean;
    onClick?: () => void;
    value?: string | number;
}

export function MenuItem({
    children,
    leftIcon,
    rightIcon,
    className = '',
    iconClass = 'xs',
    disabled = false,
    onClick,
    value
}: MenuItemProps) {
    if (typeof children === 'string') value ??= children;

    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`${className} group flex items-center w-full [&]:gap-x-2 [&]:p-3 m-0 [&]:bg-white disabled:text-neutral-30 disabled:bg-neutral-10 text-neutral-50 hover:bg-neutral-10 active:bg-neutral-20 cursor-pointer focus-visible:outline-none focus-visible:bg-primary-purple-20`}>
            {leftIcon && (
                <FontAwesomeIcon
                    className={`group-disabled:text-neutral-25 ${iconClass}`}
                    icon={leftIcon}
                />
            )}
            <div className='flex w-full justify-between items-center [&]:gap-x-2'>
                <div className='[&]:text-sm'>{children}</div>
                {rightIcon && (
                    <FontAwesomeIcon
                        className={`${iconClass} group-disabled:text-neutral-25`}
                        icon={rightIcon}
                    />
                )}
            </div>
        </button>
    );
}
