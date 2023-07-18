import { forwardRef, ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { clsx } from 'clsx';

export interface SearchBarProps {
    value?: string;
    onChange?(e: ChangeEvent<HTMLInputElement>): void;
    defaultValue?: string;
    placeholder?: string;
    className?: string;
    inline?: boolean;
    disabled?: boolean;
    size?: 'sm' | 'md';
    variant?: 'border' | 'no-border';
}

export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(function SearchBar(
    {
        value,
        onChange,
        defaultValue,
        placeholder = 'Search',
        className,
        inline,
        disabled = false,
        size = 'md',
        variant = 'border'
    },
    ref
) {
    return (
        <label
            className={clsx(
                'items-center [&]:px-3 rounded-lg [&]:gap-3 [&]:text-sm cursor-text focus-visible:ring focus-visible:border-primary-purple-60 focus-within:hover:bg-white hover:bg-neutral-10',
                inline ? 'inline-flex' : 'flex',
                size === 'md' ? '[&]:py-3' : '[&]:py-2',
                variant === 'border' && 'border-2',
                disabled
                    ? 'bg-neutral-10 pointer-events-none border-neutral-20'
                    : '[&]:bg-white border-neutral-30',
                className
            )}>
            <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className={`fa-xl ${disabled ? 'text-neutral-25' : 'text-neutral-30'}`}
            />
            <input
                placeholder={placeholder}
                className={clsx(
                    'border-none outline-none w-full [&]:bg-transparent focus-visible:outline-none',
                    disabled ? 'placeholder-neutral-30' : 'text-neutral-70'
                )}
                value={value}
                onChange={onChange}
                defaultValue={defaultValue}
                ref={ref}
            />
        </label>
    );
});
