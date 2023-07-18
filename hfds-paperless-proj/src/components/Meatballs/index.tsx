import { IconDefinition, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode, useState, useEffect, useRef } from 'react';

interface MeatballsProps {
    className?: string;
    children?: ReactNode;
    size?: 'sm' | 'md' | 'lg';
    align?: 'left' | 'center' | 'right';
    icon?: IconDefinition;
    controlled?: boolean;
    isOpen?: boolean;
    onClick?(): void;
}

const alignStyles = {
    left: '',
    right: 'right-0',
    center: ' left-1/2 -translate-x-1/2'
};

const sizeStyles = {
    sm: 'fa-sm',
    md: 'fa-lg',
    lg: 'fa-2xl'
};

export function Meatballs({
    className = '',
    children,
    size = 'md',
    align = 'left',
    icon = faEllipsisH,
    controlled = false,
    isOpen,
    onClick
}: MeatballsProps) {
    const [showMenu, setShowMenu] = useState(false);
    const meatRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const handleMeatballsClick = () => setShowMenu(!showMenu);

    useEffect(() => {
        const hideMenu = (e: any) => {
            if (
                !meatRef.current?.contains(e.target as Node) ||
                menuRef.current?.contains(e.target as Node)
            )
                setShowMenu(false);
        };
        window.addEventListener('click', hideMenu);
        return () => window.removeEventListener('click', hideMenu);
    }, []);

    return (
        <div
            className='rounded [&:has(:focus-visible)]:outline-none [&:has(:focus-visible)]:ring [&:has(:focus-visible)]:ring-primary-purple-30 inline relative flex-col'
            ref={meatRef}>
            <button
                onClick={controlled ? onClick : handleMeatballsClick}
                className='focus-visible:outline-none'>
                <FontAwesomeIcon
                    className={`hover:cursor-pointer ${sizeStyles[size]}`}
                    icon={icon}
                />
            </button>
            {((controlled && isOpen) || showMenu) && (
                <div
                    className={`flex flex-col min-w-fit z-10 absolute shadow-full-lg [&]:rounded overflow-hidden cursor-pointer ${className} ${alignStyles[align]}`}
                    ref={menuRef}>
                    {children}
                </div>
            )}
        </div>
    );
}
