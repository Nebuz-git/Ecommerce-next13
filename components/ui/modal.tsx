<<<<<<< HEAD
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
=======
"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  
interface ModalProps {
    title: string;
    desc: string;
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode
}


export const Modal: React.FC<ModalProps> = ({
    title,
    desc,
>>>>>>> 884519a (Added a form For the Store Modal)
    isOpen,
    onClose,
    children
}) => {
<<<<<<< HEAD
    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
       };

    return (
=======
const onChange = (open: boolean) => {
    if (!open) {
        onClose();
    }
}
    return(
>>>>>>> 884519a (Added a form For the Store Modal)
        <Dialog open={isOpen} onOpenChange={onChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
<<<<<<< HEAD
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                <div>
                {children}
                </div>
            </DialogContent>
        </Dialog>

    );
}
=======
                    <DialogDescription>{desc}</DialogDescription>
                </DialogHeader>
                <div>
                    {children}
                </div>
         </DialogContent>
        </Dialog>
    )
}
>>>>>>> 884519a (Added a form For the Store Modal)
