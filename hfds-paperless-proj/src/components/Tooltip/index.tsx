import { ReactNode } from 'react';
import { Tooltip as Tool } from 'react-tooltip';
import './tooltip.css';

export interface TooltipProps {
    id: string;
    children?: ReactNode;
    content?: ReactNode;
    className?: string;
    position?: 'top' | 'bottom' | 'right' | 'left';
    absoluteCoordinates?: { x: number; y: number };
    variant?: 'hover' | 'click';
    controlled?: boolean;
    interactive?: boolean;
    open?: boolean;
    closeOnScroll?: boolean;
    offset?: number;
    delayShow?: number;
    delayHide?: number;
}

export function Tooltip({
    id,
    children,
    content,
    position = 'bottom',
    absoluteCoordinates,
    className = '',
    controlled = false,
    variant = 'hover',
    interactive = false,
    open = false,
    closeOnScroll = false,
    offset,
    delayShow = 0,
    delayHide = 0
}: TooltipProps) {
    return (
        <div className={`tool-parent`}>
            <a data-tooltip-id={id}>{children}</a>
            {controlled ? (
                <Tool
                    closeOnEsc
                    isOpen={open}
                    place={position}
                    position={absoluteCoordinates}
                    id={id}
                    className={`tooltip ${className}`}
                    classNameArrow='arrow'
                    clickable={interactive}
                    offset={offset}
                    delayShow={delayShow}
                    delayHide={delayHide}>
                    {content}
                </Tool>
            ) : (
                <Tool
                    closeOnEsc
                    openOnClick={variant === 'click'}
                    place={position}
                    position={absoluteCoordinates}
                    id={id}
                    className={`tooltip ${className}`}
                    classNameArrow='arrow'
                    clickable={interactive}
                    offset={offset}
                    delayShow={delayShow}
                    delayHide={delayHide}>
                    {content}
                </Tool>
            )}
        </div>
    );
}
