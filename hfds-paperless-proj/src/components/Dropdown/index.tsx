import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { ReactNode, useState, useRef, useEffect } from 'react';

export interface DropdownProps {
    className?: string;
    children?: ReactNode;
    label?: string;
    leftIcon?: IconDefinition;
    iconClass?: string;
    disabled?: boolean;
    disabledReason?: string;
}

export function Dropdown({
    children,
    className = '',
    label,
    leftIcon,
    disabled,
    disabledReason,
    iconClass
}: DropdownProps) {
    const [showMenu, setShowMenu] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const hideSelect = () => setShowMenu(false);
        window.addEventListener('click', hideSelect);
        return () => window.removeEventListener('click', hideSelect);
    }, []);

    const handleDropdownClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setShowMenu(!showMenu);
    };

    return (
        <div
            ref={dropdownRef}
            className={`${className} relative inline-flex [&]:rounded shadow-full-lg [&]:border-none max-w-md`}>
            <button
                onClick={handleDropdownClick}
                disabled={disabled}
                className={`group flex grow items-center [&]:gap-x-2 [&]:p-3 disabled:bg-neutral-10 hover:bg-neutral-10 active:bg-neutral-20 ${
                    showMenu ? '[&]:rounded-t bg-neutral-10' : '[&]:rounded [&]:bg-white'
                } focus-visible:bg-primary-purple-20 focus-visible:outline-none`}>
                {leftIcon && (
                    <FontAwesomeIcon
                        icon={leftIcon}
                        className={`${iconClass} group-disabled:text-neutral-25`}
                    />
                )}
                <div className='w-full flex justify-between items-center [&]:gap-x-4'>
                    <div
                        className={`inline text-left ${
                            disabled ? 'text-neutral-30' : 'text-neutral-50'
                        }`}>
                        <div className='[&]:text-sm font-semibold'>{label}</div>
                        {disabled && disabledReason && (
                            <div className='text-xs'>{disabledReason}</div>
                        )}
                    </div>
                    <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`${
                            showMenu
                                ? 'text-neutral-30 rotate-180 group-hover:text-neutral-40'
                                : 'text-neutral-40'
                        } group-disabled:text-neutral-25`}
                    />
                </div>
            </button>
            {showMenu && !disabled && (
                <div
                    style={{ clipPath: 'inset(0px -10px -10px -10px)' }}
                    className='shadow-full-lg z-50 top-full left-0 w-full absolute flex flex-col last:rounded-b overflow-hidden'>
                    {children}
                </div>
            )}
        </div>
    );
}
