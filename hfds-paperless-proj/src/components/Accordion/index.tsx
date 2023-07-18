import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, ReactNode } from 'react';
import { clsx } from 'clsx';

export interface AccordionItemProps {
    heading: string;
    content: ReactNode;
    disabled?: boolean;
    controller?: {
        isOpen: boolean;
        setIsOpen: (o?: boolean) => void;
    };
}
export interface AccordionProps {
    accordionPairs: AccordionItemProps[];
    controller?: {
        isOpen: boolean;
        setIsOpen: (o?: boolean) => void;
    };
}

const AccordionItem = ({ heading, content, disabled = false, controller }: AccordionItemProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const open = controller ? controller.isOpen : isOpen;

    return (
        <div className='group/container border-x border-b border-neutral-20 first:rounded-t-lg last:rounded-b-lg first:border-t'>
            <button
                disabled={disabled}
                className={clsx(
                    'group/button group-first/container:rounded-t-[7px] focus-visible:bg-primary-purple-20 focus-visible:outline-none disabled:pointer-events-none disabled:bg-neutral-10 group flex w-full justify-between items-center py-2.5 [&]:px-4 cursor-pointer hover:bg-neutral-10',
                    open ? 'bg-neutral-10' : 'group-last/container:rounded-b-[7px] [&]:bg-white'
                )}
                onClick={controller ? () => controller.setIsOpen() : () => setIsOpen(!isOpen)}>
                <div className='font-semibold group-disabled/button:text-neutral-30 text-neutral-50'>
                    {heading}
                </div>
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className={clsx(
                        'group-disabled:text-neutral-25',
                        open
                            ? 'text-neutral-30 rotate-180 group-hover:text-neutral-40'
                            : 'text-neutral-40'
                    )}
                />
            </button>
            {open && !disabled && <div>{content}</div>}
        </div>
    );
};

export function Accordion({ accordionPairs, controller }: AccordionProps) {
    return (
        <div className='focus-visible:outline-none'>
            {accordionPairs.map(o => (
                <AccordionItem {...o} key={o.heading} controller={controller} />
            ))}
        </div>
    );
}
