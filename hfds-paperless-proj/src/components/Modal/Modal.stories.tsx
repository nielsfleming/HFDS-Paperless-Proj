import { Meta, StoryObj } from '@storybook/react';
import { Modal, ModalProps } from '.';
import { Button } from '../Button';
import TextArea from '../TextArea';
import { useState } from 'react';

const meta: Meta<typeof Modal> = {
    component: Modal
};
export default meta;
type StoryType = StoryObj<ModalProps>;

function ModalWrapper() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Button onClick={() => setOpen(true)}>Open Modal</Button>
            <Modal isOpen={open} onClose={() => setOpen(false)}>
                <div className='flex flex-col gap-3'>
                    <div>
                        <div className='font-semibold'>This is a default modal</div>
                        <div className='text-sm'>
                            Modals display information to the user that require an acknowledgment
                            before proceeding.
                        </div>
                    </div>
                    <Button className='w-1/3 min-w-fit' onClick={() => null}>
                        Acknowledge
                    </Button>
                </div>
            </Modal>
        </div>
    );
}

export const Default: StoryType = {
    render: () => <ModalWrapper />
};

export const Unclosable: StoryType = {
    render(args) {
        // eslint-disable-next-line react-hooks/rules-of-hooks -- Hooks do work in Storybook render function
        const [open, setOpen] = useState(false);
        return (
            <div>
                <Button onClick={() => setOpen(true)}>Click to Open</Button>
                <Modal
                    isOpen={open}
                    className='w-1/2'
                    label='This is a danger modal'
                    description='Modals display information to the user that require an acknowledgment before proceeding.'
                    type='danger'
                    closable={false}
                    onClose={() => setOpen(false)}>
                    <Button className='w-1/3 min-w-fit mt-3' type='danger' onClick={() => null}>
                        Do something that isn't close
                    </Button>
                </Modal>
            </div>
        );
    }
};

export const TextInput: StoryType = {
    args: {
        label: 'This is a danger modal',
        description:
            'Modals display information to the user that require an acknowledgment before proceeding.',
        children: (
            <div className='mt-2 flex flex-col gap-3'>
                <TextArea className='resize-none h-[150px]' placeholder='Enter your comment...' />
                <Button className='w-1/3 min-w-fit' type='info' onClick={() => null}>
                    Acknowledge
                </Button>
            </div>
        ),
        type: 'info',
        isOpen: true,
        closable: true
    },
    render: args => (
        <div>
            <Modal className='w-1/2' {...args} />
        </div>
    )
};

export const Scrollable: StoryType = {
    args: {
        label: 'Gudetama the Lazy Egg',
        description:
            "Gudetama, the adorable lazy egg character, is truly a phenomenon that has captivated hearts around the world. With its seemingly effortless charm and relatable demeanor, Gudetama has become a beloved symbol of embracing one's inner laziness with a touch of humor and warmth. This endearing character's nonchalant attitude towards life serves as a gentle reminder to find joy in simplicity and to take things at our own pace.",
        children: (
            <img
                className='rounded-lg mt-2.5'
                src={'https://i.ytimg.com/vi/Pi-AQeOXCO8/maxresdefault.jpg'}
            />
        ),
        isOpen: true,
        closable: true,
        className: 'w-[50%] max-h-[75%]'
    }
};
