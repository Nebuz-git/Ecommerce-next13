import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
    children,
    params

}:{

    children: React.ReactNode;
    params: {
        storeId: string;
    }
}) {
    const { userId } = auth();

    if (!userId) { 
        redirect("/sign-in");
    }

    const store = await prismadb.store.findFirst({
        where: {
            id: params.storeId,
            userID: userId
        }
    });

    if(!store) { 
     
        redirect("/sign-in");
    }

    return (
        <>
            <div> This will be a Navbar </div>
            {children}
        </>
    );
}