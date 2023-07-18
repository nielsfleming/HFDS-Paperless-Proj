import React, {
    Children,
    useEffect,
    useState,
    MouseEvent,
    ReactNode,
    ReactElement,
    useRef
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faWarning } from '@fortawesome/free-solid-svg-icons';
import { MenuItem, MenuItemProps } from '../MenuItem';

export interface SelectProps {
    className?: string;
    children?: ReactNode;
    placeholder?: string;
    disabled?: boolean;
    error?: boolean;
    errorMessage?: string;
    selectedValue: MenuItemProps['value'];
    onSelect: (value: MenuItemProps['value']) => void;
}

export default function Select({
    children,
    placeholder = 'Select',
    className = '',
    disabled,
    error = false,
    errorMessage,
    onSelect,
    selectedValue
}: SelectProps) {
    const selectRef = useRef<HTMLButtonElement | null>(null);
    const [showMenu, setShowMenu] = useState(false);
    const [selectedValueName, setSelectedValueName] = useState<ReactNode>(selectedValue);
    const [selectedIconLeft, setSelectedIconLeft] = useState<MenuItemProps['leftIcon']>();
    const [selectedIconClass, setSelectedIconClass] = useState<MenuItemProps['iconClass']>();
    const isSelectedChild = (child: ReactNode) =>
        React.isValidElement(child) && child.props.value === selectedValue;

    useEffect(() => {
        const hideSelect = () => setShowMenu(false);
        window.addEventListener('click', hideSelect);
        if (
            !Children.map(children, child => {
                if (isSelectedChild(child))
                    handleMenuItemClick(child as ReactElement<Parameters<typeof MenuItem>[0]>);
                return child;
            })?.some(child => isSelectedChild(child))
        )
            setSelectedValueName(undefined);
        return () => window.removeEventListener('click', hideSelect);
    }, []);

    const handleDropdownClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setShowMenu(!showMenu);
    };

    const handleMenuItemClick = (child: ReactElement<MenuItemProps>) => {
        if (onSelect) onSelect(child.props.value);
        setSelectedValueName(child.props.children);
        setSelectedIconLeft(child.props.leftIcon);
        setSelectedIconClass(child.props.iconClass);
    };

    const handleFocus = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        selectRef.current?.focus();
    };

    const focusClass = `focus-visible:outline-none focus-visible:ring focus-within:bg-white focus-within:hover:bg-white  ${
        error
            ? 'focus-visible:ring-error-red-30'
            : `focus-visible:ring-primary-purple-30 focus:border-primary-purple-50`
    }`;

    return (
        <div
            className={`relative inline-flex flex-col [&]:rounded max-w-[50%] min-w-fit ${className}`}>
            <button
                ref={selectRef}
                onClick={handleDropdownClick}
                disabled={disabled}
                className={
                    `group flex justify-between items-center [&]:gap-x-2 [&]:text-sm [&]:p-2 [&]:rounded disabled:bg-neutral-10 border-2 disabled:border-neutral-20 disabled:pointer-events-none ${
                        error
                            ? 'border-error-red-50 bg-error-red-20'
                            : 'border-neutral-30 hover:bg-neutral-10'
                    } ` + focusClass
                }>
                <div
                    className={`flex items-center grow [&]:gap-x-2 ${
                        selectedValueName === undefined ? 'text-neutral-30' : 'text-neutral-50'
                    } group-disabled:text-neutral-30`}>
                    {!disabled && selectedIconLeft && (
                        <FontAwesomeIcon className={selectedIconClass} icon={selectedIconLeft} />
                    )}
                    <div className='[&]:text-sm'>
                        {!disabled && selectedValueName ? selectedValueName : placeholder}
                    </div>
                </div>
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`text-neutral-30 group-disabled:text-neutral-25 ${
                        showMenu ? 'rotate-180' : ''
                    }`}
                />
            </button>
            {!showMenu && error && errorMessage && (
                <div className='mt-2 text-xs text-error-red-50'>
                    <FontAwesomeIcon icon={faWarning} /> {errorMessage}
                </div>
            )}
            {!disabled && showMenu && (
                <div className='shadow-full-lg z-10 mt-2 top-full left-0 w-full absolute [&]:rounded overflow-hidden'>
                    {Children.map(children, child => {
                        if (React.isValidElement(child) && child.type === MenuItem)
                            return (
                                <div
                                    className=''
                                    onMouseDown={handleFocus}
                                    onClick={() =>
                                        handleMenuItemClick(
                                            child as ReactElement<Parameters<typeof MenuItem>[0]>
                                        )
                                    }>
                                    {child}
                                </div>
                            );
                    })}
                </div>
            )}
        </div>
    );
}
