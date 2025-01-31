"use client";

import Sidebar from "@/components/shared/ComponentSidebar";

export default function ComponentLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <div className="flex w-full h-screen bg-[#1d232a] text-white">
         <Sidebar />
         <div className="flex-1 overflow-auto">{children}</div>
      </div>
   );
}
