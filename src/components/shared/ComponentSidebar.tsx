"use client";

import { Menu } from "lucide-react";
import SidebarItem from "./SidebarItem";
import { useState } from "react";

const sidebarItems = [
   {
      title: "Actions",
      titleIcon: "/icons/action.svg",
      links: [
         { name: "Buttons", href: "/component/buttons" },
      ],
   },
   {
      title: "Display Items",
      titleIcon: "/icons/action.svg",
      links: [
         { name: "Cards ", href: "/component/cards" },
      ],
   },
];

export default function Sidebar() {
   const [isOpen, setIsOpen] = useState(false);
   return (
      <div className="relative">
         {/* Hamburger Button */}
         <button
            className="md:hidden fixed top-20 right-5 z-50 p-2 bg-gray-700 rounded"
            onClick={() => setIsOpen(!isOpen)}
         >
            <Menu className="w-6 h-6 text-white" />
         </button>

         {/* Sidebar */}
         <div
            className={`z-30 fixed md:relative top-0 left-0 h-full w-64 bg-[#1d232a] pt-20 pb-10 px-5 pl-10 border-r border-[#2f3741] flex flex-col gap-5 overflow-y-auto transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
               }`}
         >
            {sidebarItems.map((item, index) => (
               <SidebarItem key={index} title={item.title} titleIcon={item.titleIcon} links={item.links} />
            ))}
         </div>

         {/* Overlay for Mobile */}
         {isOpen && (
            <div
               className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
               onClick={() => setIsOpen(false)}
            ></div>
         )}
      </div>
   );
}