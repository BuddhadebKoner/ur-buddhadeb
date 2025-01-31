"use client";

import { useParams } from "next/navigation";

export default function Page() {
   const { slag } = useParams();
   return (
      <div className="w-full h-[100vh] flex justify-center items-center bg-black text-white overflow-auto">
         {slag}
      </div>
   );
}
