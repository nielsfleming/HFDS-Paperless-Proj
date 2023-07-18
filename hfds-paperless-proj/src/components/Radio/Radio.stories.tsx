import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from '.';

const meta: Meta<typeof Radio> = {
    title: 'Radio',
    component: Radio
};
export default meta;
type Story = StoryObj<typeof Radio>;

export const Label: Story = {
    args: {
        label: 'Label'
    },
    render: args => <Radio {...args} />
};

export const Description: Story = {
    args: {
        label: 'Label',
        description: 'Description'
    },
    render: args => <Radio {...args} />
};

export const Children: Story = {
    args: {
        children: (
            <div>
                <span className='font-semibold'>Why hello there...</span>
                <img
                    className='aspect-auto w-1/4 rounded-lg'
                    src='https://cdn.vox-cdn.com/thumbor/Ob0nwn8QEa6Ky5GB4JVYwBLkU9k=/0x0:1920x1080/2000x1333/filters:focal(960x540:961x541)/cdn.vox-cdn.com/uploads/chorus_asset/file/24289644/EP01_10_copy.jpg'
                />
            </div>
        )
    },
    render: args => <Radio {...args} />
};
