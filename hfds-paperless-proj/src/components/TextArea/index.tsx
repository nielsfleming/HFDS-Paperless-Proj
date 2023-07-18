import { ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarning } from '@fortawesome/free-solid-svg-icons';

export interface TextAreaProps {
    label?: string;
    description?: string;
    placeholder?: string;
    error?: boolean;
    errorMessage?: string;
    disabled?: boolean;
    onChange?(e: ChangeEvent<HTMLTextAreaElement>): void;
    defaultValue?: string;
    className?: string;
    rows?: number;
}

export default function TextArea({
    label,
    description,
    placeholder,
    error,
    errorMessage,
    disabled,
    onChange,
    defaultValue,
    className = '',
    rows = 4
}: TextAreaProps) {
    const focusClass = `focus-visible:outline-none focus-visible:ring focus-within:bg-white focus-within:hover:bg-white  ${
        error
            ? 'focus-visible:ring-error-red-30'
            : `focus-visible:ring-primary-purple-30 focus:border-primary-purple-50`
    }`;

    return (
        <label className='flex flex-col gap-1.5 [&]:text-sm'>
            {!!label && <div className='text-neutral-60 font-semibold'>{label}</div>}
            {description && <div className='text-neutral-60 text-xs mb-0.5'>{description}</div>}
            <textarea
                placeholder={placeholder}
                rows={rows}
                disabled={disabled}
                className={
                    `${className} p-2.5 w-full [&]:rounded-lg [&]:border disabled:bg-neutral-10 disabled:text-neutral-40 text-neutral-60 ${
                        error
                            ? 'focus:border-error-red-50 border-error-red-50'
                            : 'border-neutral-20 hover:bg-neutral-10'
                    } ` + focusClass
                }
                onChange={onChange}>
                {defaultValue}
            </textarea>
            {error && errorMessage && (
                <div className='text-xs text-error-red-50'>
                    <FontAwesomeIcon icon={faWarning} /> {errorMessage}
                </div>
            )}
        </label>
    );
}
