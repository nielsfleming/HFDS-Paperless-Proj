import { ReactNode } from 'react';

export interface RadioProps {
    label?: string;
    description?: string;
    children?: ReactNode;
}

export function Radio({ label, description, children }: RadioProps) {
    return (
        <div>
            <label className='inline-flex items-center [&]:gap-x-3'>
                <input
                    type='radio'
                    tabIndex={1}
                    className={`scale-95 shadow-md hover:cursor-pointer border-neutral-30 [&]:border text-primary-purple-50 focus-visible:outline-none focus-visible:border-none focus-visible:ring-primary-purple-30/60 focus-visible:ring-4 focus-visible:ring-offset-0 focus:ring-offset-0 focus:ring-0`}
                />
                <div>
                    {!!label && <div className='font-semibold text-neutral-60'>{label}</div>}
                    {!!description && <div className='text-xs text-neutral-40'>{description}</div>}
                    <div>{children}</div>
                </div>
            </label>
        </div>
    );
}
