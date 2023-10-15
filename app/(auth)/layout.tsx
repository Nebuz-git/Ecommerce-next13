<<<<<<< HEAD
export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="flex items-center justify-center h-full w-full">
        {children}
      </div>
    );
  };
=======
export default function AuthLayout({children}: { children: React.ReactNode;}) {
    return (
            <div className="flex items-center justify-center h-full ">
             {children}
            </div>
    )
}
>>>>>>> 884519a (Added a form For the Store Modal)
