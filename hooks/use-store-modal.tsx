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