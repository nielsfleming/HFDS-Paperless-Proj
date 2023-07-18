import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInfoCircle,
    faCheckCircle,
    faExclamationCircle,
    faExclamationTriangle,
    faXmark
} from '@fortawesome/free-solid-svg-icons';
import { Button } from '../Button';
import { ReactNode } from 'react';

export interface BannerProps {
    type?: 'info' | 'success' | 'danger' | 'warning';
    btn1?: { action: any; text: string };
    btn2?: { action: any; text: string };
    dismissible?: boolean;
    onDismiss?(): void;
    label?: string;
    description?: string;
    children?: ReactNode;
}

const typeStyles = {
    info: {
        bgColor: 'bg-info-blue-20',
        textColor: 'text-info-blue-50',
        icon: faInfoCircle
    },
    success: {
        bgColor: 'bg-success-green-20',
        textColor: 'text-success-green-50',
        icon: faCheckCircle
    },
    warning: {
        bgColor: 'bg-warning-yellow-20',
        textColor: 'text-warning-yellow-50',
        icon: faExclamationCircle
    },
    danger: {
        bgColor: 'bg-error-red-20',
        textColor: 'text-error-red-50',
        icon: faExclamationTriangle
    }
};

export function Banner({
    type = 'info',
    btn1,
    btn2,
    dismissible = true,
    onDismiss,
    label,
    description,
    children
}: BannerProps) {
    return (
        <div
            className={`${typeStyles[type].bgColor} flex w-full justify-between rounded-lg p-6 [&]:gap-4`}>
            <FontAwesomeIcon
                icon={typeStyles[type].icon}
                className={`fa-lg pt-1.5 ${typeStyles[type].textColor}`}
            />
            <div className='flex flex-col'>
                <div className='font-semibold'>{label}</div>
                <div className='text-sm'>{description}</div>
                <div>{children}</div>
                {btn1 && (
                    <div className='flex [&]:mt-3 [&]:gap-2'>
                        {btn1 ? (
                            <Button type={type} onClick={btn1.action}>
                                {btn1.text}
                            </Button>
                        ) : (
                            ''
                        )}
                        {btn2 ? (
                            <Button variant='secondary' type={type} onClick={btn2.action}>
                                {btn2.text}
                            </Button>
                        ) : (
                            ''
                        )}
                    </div>
                )}
            </div>
            {dismissible && (
                <button
                    onClick={onDismiss}
                    className='h-fit [&]:rounded focus-visible:outline-none focus-visible:ring focus-visible:ring-primary-purple-30'>
                    <FontAwesomeIcon
                        icon={faXmark}
                        className='fa-xl opacity-30 transition ease-in hover:opacity-70 hover:cursor-pointer'></FontAwesomeIcon>
                </button>
            )}
        </div>
    );
}
