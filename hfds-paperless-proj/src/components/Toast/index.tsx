import { ToastContainer, toast as toastFunction } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInfoCircle,
    faCheckCircle,
    faExclamationCircle,
    faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons';
import { ReactNode } from 'react';
import './toast.css';
export interface ToastProps {
    msg: ReactNode;
    placement?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
    duration?: number;
}

export const toast = {
    default: ({ msg, placement = 'bottom-left', duration = 5000 }: ToastProps) => {
        toastFunction(
            <div className='flex relative items-center justify-between w-full'>{msg}</div>,
            {
                autoClose: duration,
                pauseOnHover: true,
                position: placement,
                progressClassName: 'custom-progress-bar'
            }
        );
    },
    info: ({ msg, placement = 'bottom-left', duration = 5000 }: ToastProps) => {
        toastFunction(
            <div className='flex relative items-center justify-between w-full'>
                <div className='flex items-center [&]:gap-4'>
                    <FontAwesomeIcon icon={faInfoCircle} className={`fa-xl text-info-blue-50`} />
                    {msg}
                </div>
            </div>,
            {
                autoClose: duration,
                pauseOnHover: true,
                position: placement,
                progressClassName: 'custom-progress-bar'
            }
        );
    },
    success: ({ msg, placement = 'bottom-left', duration = 5000 }: ToastProps) => {
        toastFunction(
            <div className='flex relative items-center justify-between w-full'>
                <div className='flex items-center [&]:gap-4'>
                    <FontAwesomeIcon
                        icon={faCheckCircle}
                        className={`fa-xl text-success-green-50`}
                    />
                    {msg}
                </div>
            </div>,
            {
                autoClose: duration,
                pauseOnHover: true,
                position: placement,
                progressClassName: 'custom-progress-bar'
            }
        );
    },
    warning: ({ msg, placement = 'bottom-left', duration = 5000 }: ToastProps) => {
        toastFunction(
            <div className='flex relative items-center justify-between w-full'>
                <div className='flex items-center [&]:gap-4'>
                    <FontAwesomeIcon
                        icon={faExclamationCircle}
                        className={`fa-xl text-warning-yellow-50`}
                    />
                    {msg}
                </div>
            </div>,
            {
                autoClose: duration,
                pauseOnHover: true,
                position: placement,
                progressClassName: 'custom-progress-bar'
            }
        );
    },
    danger: ({ msg, placement = 'bottom-left', duration = 5000 }: ToastProps) => {
        toastFunction(
            <div className='flex relative items-center justify-between w-full'>
                <div className='flex items-center [&]:gap-4'>
                    <FontAwesomeIcon
                        icon={faExclamationTriangle}
                        className={`fa-xl text-error-red-50`}
                    />
                    {msg}
                </div>
            </div>,
            {
                autoClose: duration,
                pauseOnHover: true,
                position: placement,
                progressClassName: 'custom-progress-bar'
            }
        );
    }
};

export default function Toaster() {
    return (
        <div>
            <ToastContainer className='w-full sm:w-[500px]' />
        </div>
    );
}
