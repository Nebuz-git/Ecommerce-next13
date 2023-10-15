<<<<<<< HEAD
"use client";

import { useEffect , useState } from "react";
import { StoreModal } from "@/modals/store-modal";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted) {
        return null;
    }


    return (
        <>
        <StoreModal />
        </>
    )
=======
"use client"

import {useEffect, useState} from "react"

import { StoreModal } from "@/components/modals/store-modal";

export const ModalProvider = () => {

    const [isMounted , setIsMounted] = useState(false)
    // const [isOpen, setIsOpen] = useState(false)

    useEffect(()=> {
        setIsMounted(true)
    },[]);

    if (!isMounted) {
        return null
    }

    return(
        <>
        <StoreModal/>
        </>
    )


>>>>>>> 884519a (Added a form For the Store Modal)
}