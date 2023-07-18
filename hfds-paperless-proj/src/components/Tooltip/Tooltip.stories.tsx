import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '.';
import { Link } from '../Link';
import { SearchBar } from '../SearchBar';
import { Label } from '../Label';
import { Checkbox } from '../Checkbox';

const meta: Meta<typeof Tooltip> = {
    component: Tooltip
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
    args: {
        id: 'tooltip',
        children: <div className='bg-primary-purple-20 w-fit rounded-lg p-2'>ಠ_ಠ</div>,
        content: (
            <div className='w-[150px] flex flex-col'>
                <div className='font-semibold'>Hello</div>I'm great, how are you?
                <Link
                    className='font-semibold'
                    href='https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F011%2F764%2FLennyFace.jpg'>
                    CLICK HERE
                </Link>
            </div>
        ),
        interactive: true
    }
};

export const Right: Story = {
    args: {
        id: 'tooltip',
        children: <div className='bg-primary-purple-20 w-fit rounded-lg p-2'>(˚▽˚)☞</div>,
        content: 'HAHAHAHA',
        position: 'right'
    }
};

export const Top: Story = {
    args: {
        id: 'tooltip',
        children: <div className='bg-primary-purple-20 w-fit rounded-lg p-2'>ƪ(°ロ°)</div>,
        content: <div>This is supposed to be on the top but storybook doesn't want it to be.</div>,
        position: 'top'
    }
};

export const Left: Story = {
    args: {
        id: 'tooltip',
        children: <div className='bg-primary-purple-20 w-fit rounded-lg p-2'>~(˘▾˘~)</div>,
        content: <img src='https://thumbs.gfycat.com/BogusCautiousBluegill-size_restricted.gif' />,
        position: 'left'
    }
};

export const OpenOnClick: Story = {
    args: {
        id: 'tooltip',
        children: (
            <div className='hover:bg-primary-purple-30 cursor-pointer bg-primary-purple-20 w-fit rounded-lg p-2'>
                ◔̯◔ Click me to dropdown the tooltip{' '}
            </div>
        ),
        content: (
            <div className='p-3 flex flex-col overflow-y-auto'>
                <SearchBar className='mb-2' placeholder='Search Groups' />
                <div className='flex py-2 gap-2'>
                    <Checkbox />
                    <Label type='info' label='Front-end' mode='light'></Label>
                </div>
                <div className='flex py-2 gap-2'>
                    <Checkbox />
                    <Label type='info' label='Back-end' mode='light'></Label>
                </div>
                <div className='flex py-2 pb-0 gap-2'>
                    <Checkbox />
                    <Label type='info' label='Other-end' mode='light'></Label>
                </div>
            </div>
        ),
        interactive: true,
        variant: 'click'
    }
};
