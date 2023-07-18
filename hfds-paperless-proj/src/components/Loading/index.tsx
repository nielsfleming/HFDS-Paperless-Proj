export interface LoadingProps {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

const sizeStyles = {
    sm: 'h-[1rem] border-[0.18rem]',
    md: 'h-[2rem] border-[0.30rem]',
    lg: 'h-[3.50rem] border-[0.50rem]'
};

export function Loading({ size = 'md', className = '' }: LoadingProps) {
    return (
        <div
            className={`aspect-square rounded-full border-neutral-25 border-t-neutral-50 animate-spin ${sizeStyles[size]} ${className}`}
        />
    );
}
