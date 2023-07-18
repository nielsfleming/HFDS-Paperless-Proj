import { ReactNode, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand } from '@fortawesome/free-solid-svg-icons';
import { Modal } from '../Modal';
export interface CameraProps {
    label?: string;
    description?: string;
    children?: ReactNode;
    src?: string;
    fullLabel?: boolean;
    type?: 'neutral' | 'success' | 'danger' | 'warning' | 'info' | 'accent';
    variant?: 'display' | 'dashboard';
    modalClass?: string;
    loading?: boolean;
}

const typeStyles = {
    neutral: 'text-neutral-50',
    success: 'text-success-green-50',
    warning: 'text-warning-yellow-50',
    danger: 'text-error-red-50',
    info: 'text-info-blue-50',
    accent: 'text-primary-purple-50'
};

export function CameraFeed({
    label,
    description,
    children,
    src,
    fullLabel = false,
    type = 'neutral',
    variant = 'display',
    modalClass = '',
    loading = false
}: CameraProps) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div
                onClick={() => loading && setOpen(true)}
                className={`group relative w-full h-full rounded-lg ${
                    loading ? 'bg-neutral-20' : ''
                }`}
                style={
                    loading
                        ? undefined
                        : {
                              backgroundImage: `url(${src})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center'
                          }
                }>
                {!loading && (
                    <button className='focus-visible:outline-none focus-visible:ring focus-visible:ring-primary-purple-30 absolute flex top-0 right-0 rounded-lg m-2.5 [&]:py-1 px-1.5 hover:cursor-pointer bg-white/90 justify-center items-center'>
                        <FontAwesomeIcon
                            icon={faExpand}
                            className={`${
                                variant === 'display' ? 'text-5xl' : 'text-2xl'
                            } transition ease-in group-hover:text-neutral-50 text-neutral-40`}
                        />
                    </button>
                )}
                <div
                    className={`flex absolute bottom-0 left-0 items-center bg-white/90 ${
                        fullLabel ? 'w-full' : 'rounded-tr-lg'
                    }`}>
                    {(label || description) && (
                        <div className='flex flex-col [&]:py-3 [&]:px-4'>
                            <div className={`${typeStyles[type]} font-semibold text-3xl`}>
                                {label}
                            </div>
                            <div className='text-2xl'>{description}</div>
                        </div>
                    )}
                    {children}
                </div>
            </div>
            <Modal
                isOpen={open}
                onClose={() => setOpen(false)}
                closable={true}
                className={`${modalClass}`}>
                <div>
                    <img
                        className='rounded-md aspect-auto w-full'
                        src={src}
                        alt='CameraFeed Image'
                    />
                </div>
            </Modal>
        </>
    );
}
