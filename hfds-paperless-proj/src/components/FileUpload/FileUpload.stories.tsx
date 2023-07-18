import { Meta, StoryObj } from '@storybook/react';
import { FileUpload, FileUploadProps } from '.';
import { useState } from 'react';

const meta: Meta<typeof FileUpload> = {
    component: FileUpload
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

function FileUploadWrapper(props: Partial<FileUploadProps>) {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    return <FileUpload {...props} files={selectedFiles} onChange={setSelectedFiles} />;
}

export const Default: Story = {
    args: {
        title: 'Image upload',
        description: 'For uploading images/files',
        acceptedTypes: ['.png', '.jpeg', '.jpg']
    },
    render: args => (
        <FileUploadWrapper {...Object.fromEntries(Object.entries(args).filter(([, v]) => v))} />
    )
};

export const Max5Files: Story = {
    args: {
        title: 'Image upload',
        description: 'Maximum of 5 files',
        acceptedTypes: ['.png', '.jpeg', '.jpg', '.svg'],
        maxFiles: 5
    },
    render: Default.render
};
