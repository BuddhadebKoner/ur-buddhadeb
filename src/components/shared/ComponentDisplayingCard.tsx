"use client";

import Link from "next/link";

export default function CardComponent({ text, redirect }: { text: string; redirect: string }) {
   return (
      <Link
         href={redirect}
         className="w-full sm:w-[20rem] md:w-[25rem] lg:w-[30rem] xl:w-[35rem] h-[16rem] sm:h-[18rem] md:h-[20rem] lg:h-[22rem] xl:h-[24rem] border border-gray-700 rounded-xl p-4 sm:p-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 flex flex-col justify-between shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl backdrop-blur-lg bg-opacity-60 hover:bg-opacity-80">

         {/* Text & Arrow */}
         <div className="flex items-center justify-start text-base sm:text-lg text-white font-semibold mt-4 sm:mt-6">
            <span>{text}</span>
            <span className="text-lg sm:text-xl ml-2 text-yellow-300 transition-transform duration-300 transform hover:translate-x-2">→</span>
         </div>
      </Link>
   );
}
