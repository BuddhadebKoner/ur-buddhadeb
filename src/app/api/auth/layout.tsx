export default function AuthLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <div className="w-full h-[75vh] overflow-hidden  flex justify-center items-center">
         {children}
      </div>
   );
}