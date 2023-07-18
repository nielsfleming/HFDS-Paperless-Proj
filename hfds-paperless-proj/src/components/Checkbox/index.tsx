import { InputHTMLAttributes, LabelHTMLAttributes, PropsWithChildren, forwardRef } from 'react';

export interface CheckboxProps
    extends PropsWithChildren<
            Pick<
                InputHTMLAttributes<HTMLInputElement>,
                'name' | 'onChange' | 'checked' | 'disabled' | 'className' | 'defaultChecked'
            >
        >,
        Pick<LabelHTMLAttributes<HTMLLabelElement>, 'onClick'> {
    value?: string;
    size?: 'md' | 'lg';
    tabIndex?: number;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
    {
        children,
        name,
        value,
        size = 'md',
        checked,
        defaultChecked,
        disabled,
        onChange,
        className = '',
        tabIndex,
        onClick
    },
    ref
) {
    return (
        <label className='flex items-center [&]:gap-1' onClick={onClick}>
            <div
                className={`flex group items-center justify-center rounded-full [&]:bg-transparent ${
                    size === 'lg' ? '[&]:p-3' : '[&]:p-2'
                } ${disabled ? '' : 'hover:cursor-pointer hover:bg-neutral-20'}`}>
                <input
                    tabIndex={tabIndex}
                    type='checkbox'
                    name={name}
                    value={value}
                    disabled={disabled}
                    checked={checked}
                    defaultChecked={defaultChecked}
                    onChange={onChange}
                    className={`${className} ${
                        size === 'lg' ? 'scale-125' : ''
                    } rounded-[1.75px] border-neutral-30 [&]:border-2 [&]:bg-transparent disabled:bg-neutral-25 disabled:text-neutral-25 text-primary-purple-50 enabled:group-hover:cursor-pointer enabled:group-hover:border-primary-purple-50 focus-visible:ring focus-visible:ring-primary-purple-30 focus-visible:ring-offset-0 focus-visible:border-primary-purple-50 focus-visible:outline-none focus:ring-0 focus:ring-offset-0`}
                    ref={ref}
                />
            </div>
            {children}
        </label>
    );
});
