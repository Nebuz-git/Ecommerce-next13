"use client"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useStoreModal } from "@/hooks/use-store-modal";
import { Store  } from "@prisma/client";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";
import { Check, ChevronsUpDown, PlusCircle, Store as StoreIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "./ui/command";

// Define the props for a custom StoreSwitcher component
type popoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

// Create an interface for StoreSwitcherProps, extending the props for PopoverTrigger inherting all the props that popoverTriggerProps Accepts
interface StoreSwitcherProps extends popoverTriggerProps {
// Specify the items prop, expecting an array of store items
    items: Store[];
};



export default function StoreSwitcher({
className,
items = []
}: StoreSwitcherProps) {

    const storeModal = useStoreModal();
    const params = useParams();
    const router = useRouter();
    
    const formattedItems = items.map((item)=> ({
        label: item.name,
        value: item.id
    }));

    const currentStore = formattedItems.find((item)=>item.value === params.storeId)
    const [open , setOpen] = useState(false)

    const onStoreSelect = (store: {value: string , label: string}) => {
        setOpen(false);
        router.push(`/store/${store.value}`);
    }

    return(
        <Popover open={open} onOpenChange={setOpen} >
            <PopoverTrigger asChild>
                <Button variant="outline" size="sm" role="combobox" aria-expanded={open} aria-label="Select a store" className={cn("w-[200px] justify-between" , className)}>
                    <StoreIcon className="mr-2 h-4 w-4"/>
                    {currentStore?.label}
                    <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50"/>
                    <PopoverContent className="2-[200px] p-0">
                        <Command>
                          <CommandList>
                            <CommandInput placeholder="Search Store..."/>
                            <CommandEmpty>No Store found.</CommandEmpty>
                            <CommandGroup heading="Stores">
                               {formattedItems.map((store)=> (
                                <CommandItem 
                                key={store.value}
                                onSelect={()=> onStoreSelect(store)}
                                className="text-sm"
                                >
                                    <StoreIcon className="mr-2 h-4 w-4"/>
                                    {store.label}
                                    <Check className={cn(

                                        "ml-auto h-4 w-4" ,
                                        currentStore?.value === store.value
                                        ? "opacity-100"
                                        : "opacity-10"
                                    )}
                                     />
                                </CommandItem>
                               
                               ))}
                            </CommandGroup>
                          </CommandList>
                          <CommandSeparator />
                          <CommandList>
                            <CommandGroup>
                                <CommandItem onSelect={()=> {
                                    setOpen(false)
                                    storeModal.onOpen()

                                }}>
                                <PlusCircle className="mr-2 h-5 w-5" />
                                Create Store
                                </CommandItem>
                            </CommandGroup>
                          </CommandList>
                        </Command>
                    </PopoverContent>
                </Button>
            </PopoverTrigger>
        </Popover>
    )
}