import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from '.';
import { Tabs, Tab } from '../Tabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const meta: Meta<typeof Navbar> = {
    component: Navbar
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Desktop: Story = {
    args: {
        pageTitle: 'Marketplace',
        variant: 'dashboard',
        icon: (
            <img
                src={require('./images/FactoryEngine.png')}
                className='w-10 h-10'
                alt='Factory Engine'
            />
        ),
        children: (
            <div className='flex items-center gap-7 grow justify-end'>
                <Tabs defaultValue={0}>
                    <Tab title='Discover' value={0}></Tab>
                    <Tab title='Maps' value={1}></Tab>
                    <Tab title='Devices' value={2}></Tab>
                    <Tab title='My Addons' value={3}></Tab>
                </Tabs>
                <div className='flex items-center gap-3'>
                    <FontAwesomeIcon
                        icon={faShoppingCart}
                        className='fa-lg text-primary-purple-70'
                    />
                    <div className='text-sm font-semibold flex items-center justify-center rounded-full w-[36px] h-[36px] bg-gradient-to-br from-[#2466CC] to-[#2466CC00]'>
                        GE
                    </div>
                </div>
            </div>
        ),
        className: 'w-full'
    }
};

export const NoTitle: Story = {
    args: {
        variant: 'dashboard',
        icon: (
            <img
                src={require('./images/FactoryEngine.png')}
                className='w-10 h-10'
                alt='Factory Engine'
            />
        ),
        children: (
            <div className='flex items-center gap-4 grow justify-end'>
                <Tabs className='' defaultValue={0}>
                    <Tab title='Discover' value={0}></Tab>
                    <Tab title='Maps' value={1}></Tab>
                    <Tab title='Devices' value={2}></Tab>
                    <Tab title='My Addons' value={3}></Tab>
                </Tabs>
                <div className='flex items-center gap-3'>
                    <FontAwesomeIcon
                        icon={faShoppingCart}
                        className='fa-lg text-primary-purple-70'
                    />
                    <div className='text-sm font-semibold flex items-center justify-center rounded-full w-[36px] h-[36px] bg-gradient-to-br from-[#2466CC] to-[#2466CC00]'>
                        GE
                    </div>
                </div>
            </div>
        ),
        className: 'w-full'
    }
};

export const Display: Story = {
    args: {
        pageTitle: 'Project Name',
        variant: 'display',
        icon: (
            <img
                src={require('./images/martinrea_logo_hi-res_final.png')}
                className='w-12 h-12'
                alt='Martinrea'></img>
        )
    }
};
