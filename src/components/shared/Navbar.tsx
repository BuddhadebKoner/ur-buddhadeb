"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { Sun, Moon, Monitor, IndianRupee, Rss, Store, Loader, Menu } from "lucide-react";
import { useMobileMenu } from "@/contexts/MobileMenuContext";

export default function Navbar() {
   const { isOpen, openMenu, closeMenu } = useMobileMenu();
   const { user, isLoaded } = useUser();
   const [theme, setTheme] = useState<string | null>(null);
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

   // Function to get the current system theme
   const getSystemTheme = () =>
      window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

   useEffect(() => {
      // Get the theme from localStorage
      const storedTheme = localStorage.getItem("theme");

      if (storedTheme === "system" || !storedTheme) {
         const systemTheme = getSystemTheme();
         setTheme("system");
         document.documentElement.classList.remove("light", "dark");
         document.documentElement.classList.add(systemTheme);
      } else {
         setTheme(storedTheme);
         document.documentElement.classList.remove("light", "dark");
         document.documentElement.classList.add(storedTheme);
      }

      // Listen for system theme changes
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => {
         if (localStorage.getItem("theme") === "system") {
            const newSystemTheme = getSystemTheme();
            document.documentElement.classList.remove("light", "dark");
            document.documentElement.classList.add(newSystemTheme);
         }
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
   }, []);

   const toggleTheme = (selectedTheme: string) => {
      if (selectedTheme === "system") {
         localStorage.setItem("theme", "system");
         const systemTheme = getSystemTheme();
         document.documentElement.classList.remove("light", "dark");
         document.documentElement.classList.add(systemTheme);
         setTheme("system");
      } else {
         localStorage.setItem("theme", selectedTheme);
         document.documentElement.classList.remove("light", "dark");
         document.documentElement.classList.add(selectedTheme);
         setTheme(selectedTheme);
      }
   };

   return (
      <div className="w-full py-3 flex items-center justify-between border-b border-gray-300 dark:border-gray-700 bg-[#F9FAFB]/50 dark:bg-darkBgColor/50 backdrop-blur-[10px] fixed z-50">
         <div className="container mx-auto flex items-center justify-between px-4 lg:px-16">
            {/* Hamburger for Mobile */}
            <button
               className="lg:hidden p-2 rounded-md focus:outline-none"
               onClick={() => (isOpen ? closeMenu() : openMenu())}
               aria-label="Toggle Mobile Menu"
            >
               <Menu className="w-6 h-6" />
            </button>

            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-3">
               <h1 className="lg:text-2xl hidden lg:block font-semibold lg:font-light text-gray-800 dark:text-gray-200">
                  Ur Buddhadeb
               </h1>
            </Link>

            {/* Desktop Nav Links (hidden on mobile) */}
            <div className="hidden lg:flex items-center justify-center space-x-6">
               <Link
                  href="/pricing"
                  className="lg:text-lg text-sm font-thin text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition duration-200 flex items-center gap-1"
               >
                  <IndianRupee className="w-5 h-5 inline-block" />
                  Pricing
               </Link>

               <Link
                  href="/blogs"
                  className="lg:text-lg text-sm font-thin text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition duration-200 flex items-center gap-1"
               >
                  <Rss className="w-5 h-5 inline-block" />
                  Blogs
               </Link>

               <Link
                  href="/store"
                  className="lg:text-lg text-sm font-thin text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition duration-200 flex items-center gap-1"
               >
                  <Store className="w-5 h-5 inline-block" />
                  Store
               </Link>

               {isLoaded ? (
                  user ? (
                     <div className="flex items-center space-x-3">
                        <Link
                           href={`/profile/${user.username}`}
                           className="inline-block bg-black dark:bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-800 dark:hover:bg-gray-700 transition">
                           {user.username}
                        </Link>
                     </div>
                  ) : (
                     <Link
                        href="/sign-in"
                        className="text-xs lg:text-sm bg-black dark:bg-gray-800 text-white lg:px-4 px-2 py-1 lg:py-2 rounded-sm hover:bg-gray-800 dark:hover:bg-gray-700 transition duration-200"
                     >
                        Sign In
                     </Link>
                  )
               ) : (
                  <button
                     disabled
                     className="text-sm bg-gray-400 dark:bg-gray-600 text-white lg:px-4 px-2 py-1 lg:py-2 rounded-full cursor-not-allowed"
                  >
                     <Loader className="animate-spin w-4 h-4" />
                  </button>
               )}

               {/* Theme Selector Dropdown */}
               <div className="relative">
                  <button
                     onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                     className="p-2 rounded-md focus:outline-none"
                     aria-label="Toggle Theme"
                  >
                     {theme === "light" ? (
                        <Sun className="w-6 h-6" />
                     ) : theme === "dark" ? (
                        <Moon className="w-6 h-6" />
                     ) : (
                        <Monitor className="w-6 h-6" />
                     )}
                  </button>

                  {isDropdownOpen && (
                     <div className="absolute right-0 mt-2 w-fit bg-white dark:bg-gray-800 shadow-md rounded-md">
                        <button
                           className={`flex items-center gap-2 w-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-t-md ${theme === "light" ? "bg-gray-100 dark:bg-gray-600" : ""
                              }`}
                           onClick={() => {
                              toggleTheme("light");
                              setIsDropdownOpen(false);
                           }}
                        >
                           <Sun className="w-5 h-5" />
                        </button>
                        <button
                           className={`flex items-center gap-2 w-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700 ${theme === "dark" ? "bg-gray-100 dark:bg-gray-600" : ""
                              }`}
                           onClick={() => {
                              toggleTheme("dark");
                              setIsDropdownOpen(false);
                           }}
                        >
                           <Moon className="w-5 h-5" />
                        </button>
                        <button
                           className={`flex items-center gap-2 w-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-b-md ${theme === "system" ? "bg-gray-100 dark:bg-gray-600" : ""
                              }`}
                           onClick={() => {
                              toggleTheme("system");
                              setIsDropdownOpen(false);
                           }}
                        >
                           <Monitor className="w-5 h-5" />
                        </button>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
}
