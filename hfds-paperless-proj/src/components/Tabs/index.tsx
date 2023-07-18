import { ReactElement, ReactNode, useRef, useState, KeyboardEvent } from 'react';
import { Badge } from '../Badge';
export type ValueType = string | number;

export interface TabProps<T> {
    children?: ReactNode;
    title: ReactNode;
    value: T;
    className?: string;
    badgeNumber?: number;
    badgeMode?: 'light' | 'dark';
    badgeType?: 'neutral' | 'accent' | 'info' | 'success' | 'warning' | 'danger';
    disabled?: boolean;
}

export interface TabsProps<T> {
    value?: T;
    onChange?: (newVal: T) => void;
    defaultValue?: T;
    children: ReactElement<TabProps<T>>[];
    align?: 'left' | 'right' | 'center' | 'even' | 'stretch';
    className?: string;
    size?: 'md' | 'sm';
    inline?: boolean;
    tabIndex?: number;
}

export function Tab<T>(props: TabProps<T>) {
    throw Error('Do not render this component outside of a Tabs component');
    return null;
}

export function Tabs<T extends ValueType>({
    value,
    onChange,
    defaultValue,
    children,
    align = 'stretch',
    className = '',
    size = 'md',
    inline,
    tabIndex = -1
}: TabsProps<T>) {
    const wasControlled = useRef(value != null);
    const [stateVal, setStateVal] = useState(defaultValue);
    const currentlyControlled = value != null;
    if (wasControlled.current && !currentlyControlled) setStateVal(defaultValue);
    wasControlled.current = currentlyControlled;
    const actualVal = currentlyControlled ? value : stateVal;
    const handleChange = (newTab: T) => {
        onChange?.(newTab);
        setStateVal(newTab);
    };
    const currentTab = children.find(c => c.props.value === actualVal)?.props.children;
    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>, newTab: T) => {
        if (e.key === 'Enter') {
            handleChange(newTab);
        }
    };

    return (
        <div className={`${inline ? 'inline-block' : ''} ${className}`}>
            <div
                className={`${
                    inline ? 'inline-flex' : 'flex'
                } border-b text-neutral-40 font-semibold ${
                    align === 'right' ? 'justify-end' : align === 'center' ? 'justify-center' : ''
                } ${size === 'sm' ? 'text-xs' : 'text-sm'}`}>
                {children.map(c => (
                    <div
                        key={c.props.value}
                        onKeyDown={e => handleKeyDown(e, c.props.value)}
                        tabIndex={tabIndex}
                        className={`focus-visible:ring focus-visible:ring-primary-purple-30 focus-visible:outline-none flex items-center [&]:gap-2 justify-center text-center px-2.5 transition-colors hover:text-primary-purple-70 active:border-b active:border-current ${
                            c.props.value === actualVal
                                ? 'text-primary-purple-50 border-b border-primary-purple-50 -mb-px'
                                : ''
                        } ${align === 'stretch' ? 'grow' : align === 'even' ? 'flex-1' : ''} ${
                            c.props.className ?? ''
                        } ${size === 'sm' ? '[&]:py-1' : '[&]:py-2'} ${
                            c.props.disabled
                                ? 'text-neutral-25 pointer-events-none'
                                : 'cursor-pointer'
                        }`}
                        onClick={e => handleChange(c.props.value)}>
                        {c.props.title}{' '}
                        {!!c.props.badgeNumber && (
                            <Badge
                                mode={c.props.badgeMode}
                                type={c.props.badgeType}
                                number={c.props.badgeNumber}></Badge>
                        )}
                    </div>
                ))}
            </div>
            {currentTab && <div className='[&]:mt-4'>{currentTab}</div>}
        </div>
    );
}
