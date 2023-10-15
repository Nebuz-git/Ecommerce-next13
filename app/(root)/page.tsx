<<<<<<< HEAD
"use client";
=======
"use client"
>>>>>>> 884519a (Added a form For the Store Modal)

import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

<<<<<<< HEAD

const SetupPage = () =>{
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);
  
  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen , onOpen]);

    return (
     <div className="p-4"> 
      Main Page
    </div>
    );
  }

  export default SetupPage;
  
=======
const SetupPage = () => {

  const onOpen = useStoreModal((state)=>state.onOpen);
  const isOpen = useStoreModal((state)=>state.isOpen);

  useEffect(()=>{
    if(!isOpen){
      onOpen();
    }
  },[isOpen,onOpen]);

  return (
    <div className="p-4">
    Root Page
    </div>
  )
}

export default SetupPage;
>>>>>>> 884519a (Added a form For the Store Modal)
