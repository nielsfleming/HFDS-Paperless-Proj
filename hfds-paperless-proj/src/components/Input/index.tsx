import { forwardRef, useRef, InputHTMLAttributes, ReactNode } from 'react';
import { faExclamationCircle, faWarning } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from '../Tooltip';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    leftSection?: ReactNode;
    rightSection?: ReactNode;
    error?: boolean;
    label?: string;
    description?: string;
    errorMessage?: string;
    inline?: boolean;
    variant?: 'default' | 'tooltip';
    tooltipContent?: ReactNode;
    tooltipId?: string;
    tooltipOffset?: number;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
    {
        leftIcon,
        rightIcon,
        leftSection,
        rightSection,
        error = false,
        label,
        description,
        errorMessage,
        inline,
        className = '',
        variant = 'default',
        tooltipContent,
        tooltipId = '',
        tooltipOffset,
        ...rest
    },
    ref
) {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const setRefs = (input: HTMLInputElement | null) => {
        inputRef.current = input;
        if (typeof ref === 'function') ref(input);
        else if (ref) ref.current = input;
    };
    const focusInput = () => inputRef.current?.focus();
    const focusClass = `[&:has(:focus-visible)]:outline-none [&:has(:focus-visible)]:ring [&:has(:focus)]:bg-white [&:has(:focus)]:hover:bg-white  ${
        error
            ? '[&:has(:focus-visible)]:ring-error-red-30'
            : `[&:has(:focus-visible)]:ring-primary-purple-30 [&:has(:focus)]:border-primary-purple-50`
    }`;

    return (
        <div
            className={`${
                inline ? 'inline-flex' : 'flex'
            } gap-1.5 flex-col [&]:text-sm ${className}`}>
            {!!label && (
                <div
                    onClick={focusInput}
                    className='text-neutral-60 font-semibold cursor-default self-start'>
                    {label}
                </div>
            )}
            {!!description && <div className='text-neutral-60 text-xs mb-0.5'>{description}</div>}
            <div className={`flex items-center rounded-lg text-neutral-40 [&]:bg-white`}>
                {leftSection && (
                    <div
                        className={`border-y border-l border-neutral-20 rounded-l-lg [&]:px-3 [&]:py-2  ${
                            rest.disabled ? 'bg-neutral-10 text-neutral-40' : 'text-neutral-50'
                        }`}>
                        {leftSection}
                    </div>
                )}
                <label
                    className={`flex items-center grow [&]:border min-w-0 hover:bg-[#FAFAFA] ${focusClass} ${
                        error ? `border-error-red-50` : 'border-neutral-20'
                    } ${leftSection ? '' : 'rounded-l-lg'} ${
                        rightSection ? '' : 'rounded-r-lg'
                    } [&]:py-2 [&]:px-3 ${rest.disabled ? 'bg-neutral-10' : ''}`}>
                    {leftIcon && <div className='[&]:mr-2'>{leftIcon}</div>}
                    {variant === 'tooltip' ? (
                        <Tooltip
                            id={tooltipId}
                            content={tooltipContent}
                            position='right'
                            offset={tooltipOffset}
                            interactive
                            variant='click'>
                            <input
                                className={`border-none outline-none grow [&]:bg-transparent [&]:p-0 min-w-0 ${
                                    rest.disabled ? '' : 'text-black'
                                }`}
                                ref={setRefs}
                                {...rest}
                                style={{ boxShadow: 'none' }}
                            />
                        </Tooltip>
                    ) : (
                        <input
                            className={`border-none outline-none grow [&]:bg-transparent [&]:p-0 min-w-0 ${
                                rest.disabled ? '' : 'text-black'
                            }`}
                            ref={setRefs}
                            {...rest}
                            style={{ boxShadow: 'none' }}
                        />
                    )}
                    {rightIcon ? (
                        <div className='ml-2'>{rightIcon}</div>
                    ) : (
                        !!error && (
                            <FontAwesomeIcon
                                icon={faExclamationCircle}
                                className='text-error-red-50 my-auto ml-2'
                            />
                        )
                    )}
                </label>
                {rightSection && <div className='[&]:px-3 [&]:py-2'>{rightSection}</div>}
            </div>
            {error && errorMessage && (
                <div className='text-xs text-error-red-50'>
                    <FontAwesomeIcon icon={faWarning} /> {errorMessage}
                </div>
            )}
        </div>
    );
});
