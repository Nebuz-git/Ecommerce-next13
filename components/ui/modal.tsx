"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// identifying the types using typescript

interface ModalProps {

    title:          string;
    description:    string;
    isOpen:         boolean;
    onClose:        () => void;
    children?:      React.ReactNode;
}

// creating the modal and passing out the props and creating onchange function
export const Modal: React.FC<ModalProps> = ({
    title,
    description,
    isOpen,
    onClose,
    children
}) => {
    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
       };

    return (
        <Dialog open={isOpen} onOpenChange={onChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                <div>
                {children}
                </div>
            </DialogContent>
        </Dialog>

    );
}
