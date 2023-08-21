import { Modal, Button } from 'fecomponents';

interface JobAcceptProps {
    open: boolean;
    setOpen: (isOpen: boolean) => void;
    scrub: { label: string; description: string };
}
export default function JobAccept({ open, setOpen, scrub }: JobAcceptProps) {
    return (
        <div>
            <Modal
                isOpen={open}
                label={scrub.label}
                description={scrub.description}
                onClose={() => setOpen(false)}>
                <div className='flex py-3 gap-1'>
                    <Button variant='secondary' type='accent'>Accept</Button>
                    <Button variant='tertiary' type='neutral'>Add to queue</Button>
                </div>
            </Modal>
        </div>
    );
}
