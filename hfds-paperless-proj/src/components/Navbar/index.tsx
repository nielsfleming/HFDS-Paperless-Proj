import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { DateTime as LuxonDateTime } from 'luxon';

export interface NavBarProps {
    pageTitle?: string;
    variant?: 'dashboard' | 'display';
    icon?: ReactNode;
    children?: ReactNode;
    rightSection?: ReactNode;
    className?: string;
}

const getDateTime = () => LuxonDateTime.now().toFormat('MMM dd yyyy - hh:mm:ss a'); // e.g. 'Oct 19 2022 - 10:31:01 AM'

const variantStyles = {
    dashboard: {
        padding: 'py-[12px] px-16',
        titleSize: 'text-2xl'
    },
    display: {
        padding: 'px-16 py-7 w-full',
        titleSize: 'text-3xl'
    }
};

export function Navbar({
    pageTitle,
    variant = 'dashboard',
    icon,
    children,
    rightSection,
    className = ''
}: NavBarProps) {
    const [dt, setDt] = useState(getDateTime);

    useEffect(() => {
        if (!rightSection) {
            const intervalId = setInterval(() => setDt(getDateTime()), 1000);
            return () => clearInterval(intervalId);
        }
    }, [rightSection]);

    return (
        <nav className={`flex w-full justify-center min-w-min bg-white`}>
            <div
                className={`flex items-center text-neutral-50 ${variantStyles[variant].padding} ${className}`}>
                <div className='flex items-center'>
                    {!!icon && <div>{icon}</div>}
                    <div className={`${variantStyles[variant].titleSize} [&]:px-5 font-bold`}>
                        {pageTitle}
                    </div>
                </div>
                <div className='flex grow justify-end'>
                    {rightSection ? (
                        rightSection
                    ) : children ? (
                        children
                    ) : (
                        <div className='font-semibold text-2xl uppercase'>{dt}</div>
                    )}
                </div>
            </div>
        </nav>
    );
}
