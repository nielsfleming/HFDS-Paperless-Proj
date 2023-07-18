import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from '.';
import { useState } from 'react';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Pagination> = {
    component: Pagination
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Example: Story = {
    args: {
        page: 3,
        count: 10
    },
    render(args) {
        // eslint-disable-next-line react-hooks/rules-of-hooks -- Hooks do work in Storybook render function
        const [page, setPage] = useState(args.page);
        return (
            <Pagination
                {...args}
                page={page}
                onPageChange={p => {
                    action('Page change')(p);
                    setPage(p);
                }}
            />
        );
    }
};

export const WithFirstAndLast: Story = {
    args: {
        ...Example.args,
        withFirst: true,
        withLast: true
    },
    render: Example.render
};

export const WithEllipses: Story = {
    args: {
        min: 3,
        max: 15,
        count: 7,
        page: 7
    },
    render: Example.render
};
