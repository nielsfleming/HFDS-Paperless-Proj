import { Modal, Button } from 'fecomponents';
import { useState } from 'react';

export default function JobAccept() {
    const [open, setOpen] = useState(true);
    return (
        <div>
            <Modal isOpen={open} onClose={() => setOpen(false)}>
                <Button type='success'>Accept</Button>
                <Button type='danger'>Decline</Button>
            </Modal>
        </div>
    );
}