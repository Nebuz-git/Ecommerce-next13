<<<<<<< HEAD
import {create} from 'zustand';

interface useStoreModalStore{
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useStoreModal = create<useStoreModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}));
=======
import { create } from "zustand";

interface useStoreModalStore {
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
}

export const useStoreModal = create<useStoreModalStore>((set) => {
    return {
        isOpen: false,
        onOpen: () => set({ isOpen: true }),
        onClose: () => set({ isOpen: false }),
    };
})
>>>>>>> 884519a (Added a form For the Store Modal)
