'use client';

import Link from "next/link";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";

export default function Navbar() {
   const { user, isLoaded } = useUser();

   return (
      <div className="w-full py-3 flex items-center justify-between border-b border-gray-300 bg-[#F9FAFB]">
         <div className="container mx-auto flex items-center justify-between px-4 lg:px-16">
            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-3">
               <Image
                  width={40}
                  height={40}
                  className="rounded-full"
                  src="https://cloud.appwrite.io/v1/storage/buckets/66f8e10b0034b56b85be/files/6772e34600021b7c9b90/view?project=66f8cb12003c2ead11e2&project=66f8cb12003c2ead11e2&"
                  alt="logo"
               />
               <h1 className="lg:text-2xl font-semibold lg:font-light text-gray-800">Ur Buddhadeb</h1>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center lg:space-x-6 space-x-2">
               <Link
                  href="/pricing"
                  className="lg:text-lg text-sm font-light text-gray-700 hover:text-gray-900 transition duration-200"
               >
                  Pricing
               </Link>
               {isLoaded ? (
                  user ? (
                     <div className="flex items-center space-x-3">
                        <span className="lg:text-lg text-sm font-light text-gray-700">
                           {user.firstName || "User"}
                        </span>
                     </div>
                  ) : (
                     <Link
                        href="/sign-in"
                        className="text-sm bg-black text-white lg:px-4 px-2 py-1 lg:py-2 rounded-full hover:bg-gray-800 transition duration-200"
                     >
                        Sign In
                     </Link>
                  )
               ) : (
                  <button
                     disabled
                     className="text-sm bg-gray-400 text-white lg:px-4 px-2 py-1 lg:py-2 rounded-full cursor-not-allowed"
                  >
                     Loading...
                  </button>
               )}
            </div>
         </div>
      </div>
   );
}
