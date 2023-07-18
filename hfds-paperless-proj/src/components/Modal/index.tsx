import {
    faCheckCircle,
    faExclamationCircle,
    faExclamationTriangle,
    faInfoCircle,
    faXmark
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode, useRef } from 'react';
export interface ModalProps {
    label?: string;
    description?: string;
    children?: ReactNode;
    type?: 'none' | 'success' | 'danger' | 'warning' | 'info';
    isOpen: boolean;
    closable?: boolean;
    onClose?(): void;
    className?: string;
}

const typeStyles = {
    info: {
        iconColor: 'text-info-blue-50',
        icon: faInfoCircle
    },
    success: {
        iconColor: 'text-success-green-50',
        icon: faCheckCircle
    },
    warning: {
        iconColor: 'text-warning-yellow-50',
        icon: faExclamationCircle
    },
    danger: {
        iconColor: 'text-error-red-50',
        icon: faExclamationTriangle
    },
    none: ''
};

export function Modal({
    label,
    description,
    children,
    type = 'none',
    isOpen,
    closable = true,
    onClose,
    className = ''
}: ModalProps) {
    const isOnModalRef = useRef(false);

    const handleMouseDown = () => {
        isOnModalRef.current = true;
    };

    const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isOnModalRef.current && e.target === e.currentTarget) {
            onClose?.();
        } else {
            isOnModalRef.current = false;
        }
    };

    if (!isOpen) {
        return null;
    }
    return (
        <div
            onClick={e => {
                closable && handleOutsideClick(e);
            }}
            className={`fixed items-center justify-center top-0 bottom-0 left-0 right-0 flex overflow-auto backdrop-blur-[2px] bg-[#52525b80] z-100`}>
            <div
                onMouseDown={handleMouseDown}
                className={`${className} overflow-y-auto flex justify-center items-start [&]:bg-white flex-row p-6 [&]:gap-x-4 rounded-lg shadow-full-lg min-w-[20%] max-h-[90%]`}>
                {type !== 'none' && (
                    <FontAwesomeIcon
                        icon={typeStyles[type].icon}
                        className={`fa-xl ${typeStyles[type].iconColor} `}
                    />
                )}
                <div className='flex flex-col'>
                    {!!label && <div className='font-semibold'>{label}</div>}
                    {!!description && <div className='text-sm'>{description}</div>}
                    {children}
                </div>
                {closable && (
                    <button
                        onClick={onClose}
                        className='h-fit [&]:rounded focus-visible:outline-none focus-visible:ring focus-visible:ring-primary-purple-30'>
                        <FontAwesomeIcon
                            icon={faXmark}
                            className='fa-2xl opacity-30 transition ease-in hover:opacity-70 hover:cursor-pointer'
                        />
                    </button>
                )}
            </div>
        </div>
    );
}
