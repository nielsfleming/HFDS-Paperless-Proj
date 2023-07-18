import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, Tab, TabProps, ValueType } from '.';
import { useState } from 'react';

const meta: Meta<typeof Tabs> = {
    component: Tabs
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
    args: {
        tabIndex: 0
    },
    render: args => (
        <Tabs {...args} defaultValue={0}>
            <Tab title='Tab 1' value={0}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed placerat velit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis vitae
                sapien laoreet elementum. Maecenas vel purus porttitor, laoreet eros vel, bibendum
                eros. Mauris aliquam rutrum eros, vitae feugiat eros interdum a. Donec dictum eget
                mi sed tempus. Pellentesque at nunc aliquet, fringilla tortor sit amet, ullamcorper
                ligula.
            </Tab>
            <Tab title='Tab 2' value={1}>
                Vivamus a libero ut est vehicula placerat. Vestibulum ante ipsum primis in faucibus
                orci luctus et ultrices posuere cubilia curae; Donec at euismod urna. Praesent vitae
                eleifend nulla. Curabitur ipsum lorem, sagittis vel velit nec, tempus accumsan odio.
                Cras tristique facilisis turpis, eu luctus leo placerat eget. Aenean finibus
                ultricies tempus. Ut aliquet placerat odio, vel porta arcu ultricies mattis. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla massa ullamcorper
                mi blandit sollicitudin.
            </Tab>
        </Tabs>
    )
};

export const Small: Story = {
    args: {
        size: 'sm',
        tabIndex: 0
    },
    render: Default.render
};

export const DisabledTab: Story = {
    render: args => (
        <Tabs {...args} defaultValue={1}>
            <Tab title='First Tab' value={0} disabled>
                First tab content...
            </Tab>
            <Tab title='Second Tab' value={1}>
                Second tab content...
            </Tab>
            <Tab title='Third Tab' value={2}>
                Third tab content...
            </Tab>
        </Tabs>
    )
};

export const Inline: Story = {
    args: {
        inline: true,
        tabIndex: 0
    },
    render: Default.render
};

export const LeftAlign: Story = {
    args: {
        className: 'w-1/2',
        align: 'left',
        tabIndex: 0
    },
    render: Default.render
};

export const Even: Story = {
    args: {
        align: 'even',
        tabIndex: 0
    },
    render: args => (
        <Tabs {...args} defaultValue={0} className='w-1/3'>
            <Tab title='Something' value={0}>
                Eget egestas purus viverra accumsan in nisl nisi scelerisque. Habitant morbi
                tristique senectus et netus. Viverra orci sagittis eu volutpat odio. Massa tempor
                nec feugiat nisl. Id consectetur purus ut faucibus pulvinar elementum integer enim.
                Semper eget duis at tellus at. Donec ultrices tincidunt arcu non sodales neque
                sodales ut. Habitasse platea dictumst quisque sagittis purus sit amet volutpat.
                Pellentesque elit ullamcorper dignissim cras. Iaculis at erat pellentesque
                adipiscing.
            </Tab>
            <Tab title='Else' value={1}>
                Est ante in nibh mauris cursus mattis molestie. Ante metus dictum at tempor commodo
                ullamcorper a. Iaculis at erat pellentesque adipiscing commodo elit at. Quis viverra
                nibh cras pulvinar mattis nunc sed blandit libero. Tincidunt nunc pulvinar sapien et
                ligula ullamcorper malesuada. Dignissim enim sit amet venenatis urna cursus eget
                nunc. Velit sed ullamcorper morbi tincidunt ornare massa. Tellus pellentesque eu
                tincidunt tortor aliquam nulla facilisi cras. Vivamus arcu felis bibendum ut.
                Ullamcorper eget nulla facilisi etiam dignissim diam.
            </Tab>
            <Tab title='Unknown Territory' value={2}>
                Ornare aenean euismod elementum nisi quis eleifend. Cras pulvinar mattis nunc sed
                blandit libero volutpat. Et ligula ullamcorper malesuada proin libero nunc consequat
                interdum varius. Tellus rutrum tellus pellentesque eu tincidunt. A arcu cursus vitae
                congue mauris rhoncus. Diam quam nulla porttitor massa id neque aliquam vestibulum.
                Leo vel orci porta non. Leo vel fringilla est ullamcorper eget nulla facilisi.
                Pretium nibh ipsum consequat nisl vel pretium lectus. Erat imperdiet sed euismod
                nisi porta lorem mollis aliquam.
            </Tab>
        </Tabs>
    )
};

export const Stretch: Story = {
    args: {
        align: 'stretch',
        tabIndex: 0
    },
    render: args => (
        <Tabs {...args} defaultValue={0} className='w-1/3'>
            <Tab title='Something' value={0}>
                Eget egestas purus viverra accumsan in nisl nisi scelerisque. Habitant morbi
                tristique senectus et netus. Viverra orci sagittis eu volutpat odio. Massa tempor
                nec feugiat nisl. Id consectetur purus ut faucibus pulvinar elementum integer enim.
                Semper eget duis at tellus at. Donec ultrices tincidunt arcu non sodales neque
                sodales ut. Habitasse platea dictumst quisque sagittis purus sit amet volutpat.
                Pellentesque elit ullamcorper dignissim cras. Iaculis at erat pellentesque
                adipiscing.
            </Tab>
            <Tab title='Else' value={1}>
                Est ante in nibh mauris cursus mattis molestie. Ante metus dictum at tempor commodo
                ullamcorper a. Iaculis at erat pellentesque adipiscing commodo elit at. Quis viverra
                nibh cras pulvinar mattis nunc sed blandit libero. Tincidunt nunc pulvinar sapien et
                ligula ullamcorper malesuada. Dignissim enim sit amet venenatis urna cursus eget
                nunc. Velit sed ullamcorper morbi tincidunt ornare massa. Tellus pellentesque eu
                tincidunt tortor aliquam nulla facilisi cras. Vivamus arcu felis bibendum ut.
                Ullamcorper eget nulla facilisi etiam dignissim diam.
            </Tab>
            <Tab title='Unknown Territory' value={2}>
                Ornare aenean euismod elementum nisi quis eleifend. Cras pulvinar mattis nunc sed
                blandit libero volutpat. Et ligula ullamcorper malesuada proin libero nunc consequat
                interdum varius. Tellus rutrum tellus pellentesque eu tincidunt. A arcu cursus vitae
                congue mauris rhoncus. Diam quam nulla porttitor massa id neque aliquam vestibulum.
                Leo vel orci porta non. Leo vel fringilla est ullamcorper eget nulla facilisi.
                Pretium nibh ipsum consequat nisl vel pretium lectus. Erat imperdiet sed euismod
                nisi porta lorem mollis aliquam.
            </Tab>
        </Tabs>
    )
};

export const WithBadge: Story = {
    args: {
        align: 'stretch',
        tabIndex: 0
    },
    render: args => (
        <Tabs {...args} defaultValue={1}>
            {[
                {
                    title: 'Solids',
                    children:
                        'The molecules in a solid are closely packed together and contain the least amount of kinetic energy. A solid is characterized by structural rigidity (as in rigid bodies) and resistance to a force applied to the surface. Unlike a liquid, a solid object does not flow to take on the shape of its container, nor does it expand to fill the entire available volume like a gas. The atoms in a solid are bound to each other, either in a regular geometric lattice (crystalline solids, which include metals and ordinary ice), or irregularly (an amorphous solid such as common window glass). Solids cannot be compressed with little pressure whereas gases can be compressed with little pressure because the molecules in a gas are loosely packed.'
                },
                {
                    title: 'Liquids',
                    children:
                        'A liquid is a nearly incompressible fluid that conforms to the shape of its container but retains a nearly constant volume independent of pressure. The density of a liquid is usually close to that of a solid, and much higher than that of a gas. Therefore, liquid and solid are both termed condensed matter. On the other hand, as liquids and gases share the ability to flow, they are both called fluids.'
                },
                {
                    title: 'Gases',
                    children:
                        'A pure gas may be made up of individual atoms (e.g. a noble gas like neon), elemental molecules made from one type of atom (e.g. oxygen), or compound molecules made from a variety of atoms (e.g. carbon dioxide). A gas mixture, such as air, contains a variety of pure gases. What distinguishes a gas from liquids and solids is the vast separation of the individual gas particles. This separation usually makes a colourless gas invisible to the human observer.'
                }
            ].map((tabProps, i) => (
                <Tab {...tabProps} badgeNumber={i + 1} value={i} key={i} />
            ))}
        </Tabs>
    )
};

function TabsWrapper(props: Partial<TabProps<ValueType>>) {
    const [val, setVal] = useState('home');
    return (
        <Tabs {...props} value={val} onChange={setVal}>
            <Tab title='Home' value='home'>
                It was the best of times, it was the worst of times, it was the age of wisdom, it
                was the age of foolishness, it was the epoch of belief, it was the epoch of
                incredulity, it was the season of Light, it was the season of Darkness, it was the
                spring of hope, it was the winter of despair, we had everything before us, we had
                nothing before us, we were all going direct to Heaven, we were all going direct the
                other way—in short, the period was so far like the present period, that some of its
                noisiest authorities insisted on its being received, for good or for evil, in the
                superlative degree of comparison only.
            </Tab>
            <Tab title='Content' value='content'>
                There were a king with a large jaw and a queen with a plain face, on the throne of
                England; there were a king with a large jaw and a queen with a fair face, on the
                throne of France. In both countries it was clearer than crystal to the lords of the
                State preserves of loaves and fishes, that things in general were settled for ever.
            </Tab>
            <Tab title='Extra' value='extra'>
                It was the year of Our Lord one thousand seven hundred and seventy-five. Spiritual
                revelations were conceded to England at that favoured period, as at this. Mrs.
                Southcott had recently attained her five-and-twentieth blessed birthday, of whom a
                prophetic private in the Life Guards had heralded the sublime appearance by
                announcing that arrangements were made for the swallowing up of London and
                Westminster. Even the Cock-lane ghost had been laid only a round dozen of years,
                after rapping out its messages, as the spirits of this very year last past
                (supernaturally deficient in originality) rapped out theirs. Mere messages in the
                earthly order of events had lately come to the English Crown and People, from a
                congress of British subjects in America: which, strange to relate, have proved more
                important to the human race than any communications yet received through any of the
                chickens of the Cock-lane brood.
            </Tab>
        </Tabs>
    );
}

export const Controlled: Story = {
    args: {
        tabIndex: 0
    },
    render: args => <TabsWrapper {...args} />
};
