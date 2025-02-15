"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Sun, Moon, Monitor, IndianRupee, Rss, Store, Loader, Home } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { useMobileMenu } from "@/contexts/MobileMenuContext";

export const MobileMenu = () => {
   const { isOpen, closeMenu } = useMobileMenu();
   const { user, isLoaded } = useUser();
   const [theme, setTheme] = useState<string | null>(null);

   // Function to get the current system theme
   const getSystemTheme = () =>
      window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

   // Initialize theme on mount
   useEffect(() => {
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
      // Optionally close the menu after selecting a theme
      closeMenu();
   };

   return (
      <>
         {/* Overlay */}
         <div
            className={`lg:hidden fixed inset-0 bg-black/50 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
               }`}
            onClick={closeMenu}
         />

         {/* Menu Container */}
         <aside
            className={`pt-16 lg:hidden fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-xl transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
               }`}
         >
            <div className="p-4 space-y-6 flex flex-col h-full justify-between">

               {/* Navigation Links */}
               <nav className="flex flex-col space-y-5">
                  <Link
                     href="/"
                     className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition"
                     onClick={closeMenu}
                  >
                     <Home className="w-5 h-5" /> Home
                  </Link>
                  <Link
                     href="/pricing"
                     className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition"
                     onClick={closeMenu}
                  >
                     <IndianRupee className="w-5 h-5" /> Pricing
                  </Link>
                  <Link
                     href="/blogs"
                     className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition"
                     onClick={closeMenu}
                  >
                     <Rss className="w-5 h-5" /> Blogs
                  </Link>
                  <Link
                     href="/store"
                     className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition"
                     onClick={closeMenu}
                  >
                     <Store className="w-5 h-5" /> Store
                  </Link>

                  {/* User Section */}
                  <div>
                     {isLoaded ? (
                        user ? (
                           <div className="flex items-center space-x-3">
                              <span className="text-gray-700 dark:text-gray-300">
                                 {user.firstName || "User"}
                              </span>
                           </div>
                        ) : (
                           <Link
                              href="/sign-in"
                              onClick={closeMenu}
                              className="inline-block bg-black dark:bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-800 dark:hover:bg-gray-700 transition"
                           >
                              Sign In
                           </Link>
                        )
                     ) : (
                        <button
                           disabled
                           className="bg-gray-400 dark:bg-gray-600 text-white px-4 py-2 rounded cursor-not-allowed"
                        >
                           <Loader className="animate-spin w-4 h-4" />
                        </button>
                     )}
                  </div>
               </nav>

               {/* Theme Selector */}
               <div className="space-y-2 w-full">
                  <p className="text-gray-700 dark:text-gray-300 mb-2">Theme</p>
                  <div className="flex space-y-2">
                     <button
                        onClick={() => toggleTheme("light")}
                        className={`flex items-center gap-2 px-3 py-2 rounded-md transition hover:bg-gray-200 dark:hover:bg-gray-700 ${theme === "light" ? "bg-gray-100 dark:bg-gray-600" : ""
                           }`}
                     >
                        <Sun className="w-5 h-5" />
                     </button>
                     <button
                        onClick={() => toggleTheme("dark")}
                        className={`flex items-center gap-2 px-3 py-2 rounded-md transition hover:bg-gray-200 dark:hover:bg-gray-700 ${theme === "dark" ? "bg-gray-100 dark:bg-gray-600" : ""
                           }`}
                     >
                        <Moon className="w-5 h-5" />
                     </button>
                     <button
                        onClick={() => toggleTheme("system")}
                        className={`flex items-center gap-2 px-3 py-2 rounded-md transition hover:bg-gray-200 dark:hover:bg-gray-700 ${theme === "system" ? "bg-gray-100 dark:bg-gray-600" : ""
                           }`}
                     >
                        <Monitor className="w-5 h-5" />
                     </button>
                  </div>
               </div>
            </div>
         </aside>
      </>
   );
};
