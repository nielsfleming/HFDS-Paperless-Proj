import {
    faAngleDoubleLeft,
    faAngleDoubleRight,
    faArrowLeft,
    faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactNode } from 'react';
import { clsx } from 'clsx';

export interface PaginationProps {
    page: number;
    onPageChange(newPage: number): void;
    min?: number;
    max?: number;
    count?: number;
    withPrev?: boolean;
    withNext?: boolean;
    withFirst?: boolean;
    withLast?: boolean;
    className?: string;
}

export function Pagination({
    page,
    onPageChange,
    min = 1,
    max,
    count,
    withPrev = true,
    withNext = true,
    withFirst,
    withLast,
    className
}: PaginationProps) {
    if (count == null) {
        if (max == null) throw TypeError('One of count and max must be provided');
        else count = max - min + 1;
    } else if (max == null) {
        max = min + count - 1;
    }
    if (min > max) throw RangeError('min cannot be larger than max');
    if (page < min || page > max) throw RangeError('page is out of range');
    const pageValues: Record<string, number> = {
        first: min,
        last: max,
        previous: Math.max(min, page - 1),
        next: Math.min(max, page + 1)
    };
    const middleCount = count - 2;
    let leftPage = Math.max(min + 1, page - (middleCount >> 1));
    let rightPage = leftPage + middleCount - 1;
    if (rightPage >= max) {
        leftPage = Math.max(min + 1, leftPage - (rightPage - max + 1));
        rightPage = max - 1;
    }
    const pages: { key: React.Key; value?: ReactNode }[] = [];
    if (withFirst)
        pages.push({ key: 'first', value: <FontAwesomeIcon icon={faAngleDoubleLeft} /> });
    if (withPrev)
        pages.push({
            key: 'previous',
            value: (
                <>
                    <FontAwesomeIcon icon={faArrowLeft} className='mr-2' /> Previous
                </>
            )
        });
    pages.push({ key: min });
    if (min < leftPage - 1) pages.push({ key: 'e1', value: <>&hellip;</> });
    for (let i = leftPage; i <= rightPage; i++) pages.push({ key: i });
    if (rightPage + 1 < max) pages.push({ key: 'e2', value: <>&hellip;</> });
    pages.push({ key: max });
    if (withNext)
        pages.push({
            key: 'next',
            value: (
                <>
                    Next <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
                </>
            )
        });
    if (withLast) pages.push({ key: 'last', value: <FontAwesomeIcon icon={faAngleDoubleRight} /> });
    return (
        <div
            className={clsx(
                'rounded-lg inline-flex text-neutral-50 font-semibold text-sm [&]:border border-neutral-30',
                className
            )}>
            {pages.map(p => (
                <div
                    className={clsx(
                        '[&]:px-4 py-2 border-r last:border-0 cursor-pointer',
                        p.key === page
                            ? 'text-primary-purple-70 [&]:border -my-px -ml-px border-current bg-primary-purple-20'
                            : 'border-inherit',
                        typeof p.key === 'string' &&
                            !(p.key in pageValues) &&
                            'pointer-events-none select-none'
                    )}
                    onClick={() =>
                        onPageChange(typeof p.key === 'number' ? p.key : pageValues[p.key])
                    }
                    key={p.key}>
                    {p.value ?? p.key}
                </div>
            ))}
        </div>
    );
}
