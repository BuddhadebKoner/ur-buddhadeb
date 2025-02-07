'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

export default function Navbar() {
   const { user, isLoaded } = useUser();
   const [isDarkMode, setIsDarkMode] = useState(false);

   // Load dark mode preference from localStorage on mount
   useEffect(() => {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme === "dark") {
         setIsDarkMode(true);
         document.documentElement.classList.add("dark");
      }
   }, []);

   // Toggle dark/light mode
   const toggleDarkMode = () => {
      const newMode = !isDarkMode;
      setIsDarkMode(newMode);
      if (newMode) {
         document.documentElement.classList.add("dark");
         localStorage.setItem("theme", "dark");
      } else {
         document.documentElement.classList.remove("dark");
         localStorage.setItem("theme", "light");
      }
   };

   return (
      <div className="w-full py-3 flex items-center justify-between border-b border-gray-300 dark:border-gray-700 bg-[#F9FAFB]/50 dark:bg-[#121212]/50 backdrop-blur-[10px] fixed z-50">
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
               <h1 className="lg:text-2xl hidden lg:block font-semibold lg:font-light text-gray-800 dark:text-gray-200">
                  Ur Buddhadeb
               </h1>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center lg:space-x-6 space-x-2">
               <Link
                  href="/pricing"
                  className="lg:text-lg text-sm font-light text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition duration-200"
               >
                  Pricing
               </Link>

               <Link
                  href="/blogs"
                  className="lg:text-lg text-sm font-light text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition duration-200"
               >
                  Blogs
               </Link>

               {isLoaded ? (
                  user ? (
                     <div className="flex items-center space-x-3">
                        <span className="lg:text-lg text-sm font-light text-gray-700 dark:text-gray-300">
                           {user.firstName || "User"}
                        </span>
                     </div>
                  ) : (
                     <Link
                        href="/sign-in"
                        className="text-xs lg:text-sm bg-black dark:bg-gray-800 text-white lg:px-4 px-2 py-1 lg:py-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-700 transition duration-200"
                     >
                        Sign In
                     </Link>
                  )
               ) : (
                  <button
                     disabled
                     className="text-sm bg-gray-400 dark:bg-gray-600 text-white lg:px-4 px-2 py-1 lg:py-2 rounded-full cursor-not-allowed"
                  >
                     Loading...
                  </button>
               )}

               {/* Dark/Light Mode Toggle */}
               <button
                  onClick={toggleDarkMode}
                  className="text-gray-700 dark:text-gray-300 focus:outline-none"
               >
                  {isDarkMode ? (
                     <span className="text-2xl">🌙</span>
                  ) : (
                     <span className="text-2xl">🌞</span>
                  )}
               </button>
            </div>
         </div>
      </div>
   );
}
