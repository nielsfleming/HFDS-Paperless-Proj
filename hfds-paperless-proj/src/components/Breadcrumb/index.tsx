import { Fragment } from 'react';

export interface BreadcrumbProps {
    crumbs: { crumb: string; href: string }[];
    className?: string;
}

export function Breadcrumb({ crumbs, className = 'text-sm gap-x-3' }: BreadcrumbProps) {
    return (
        <div className={`flex text-neutral-40 ${className}`}>
            {crumbs?.map(({ crumb, href }, i) =>
                i != crumbs.length - 1 ? (
                    <Fragment key={i}>
                        <div>
                            <a
                                className='text-neutral-40 no-underline cursor-pointer focus-visible:outline-none focus-visible:ring focus-visible:ring-primary-purple-30 hover:text-primary-purple-50 active:text-primary-purple-70'
                                href={href}>
                                {crumb}
                            </a>
                        </div>
                        <span>/</span>
                    </Fragment>
                ) : (
                    <div key={i}>{crumb}</div>
                )
            )}
        </div>
    );
}
