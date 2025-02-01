"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

interface SidebarItemProps {
   title: string;
   titleIcon: string;
   links: { name: string; href: string }[];
}

const SidebarItem: React.FC<SidebarItemProps> = ({ title, links, titleIcon }) => {
   const pathname = usePathname();
   const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
      if (links.some((link) => pathname.startsWith(link.href))) {
         setIsOpen(true);
      }
   }, [pathname, links]);

   const toggleMenu = () => setIsOpen(!isOpen);
   const isActive = (path: string) => (pathname.startsWith(path) ? "text-blue-500 font-semibold" : "text-white");

   return (
      <div className="w-full">
         <button
            onClick={toggleMenu}
            className="w-full flex justify-start gap-3 items-center text-white hover:text-blue-500 text-base font-semibold py-2"
         >
            <Image alt="action" src={titleIcon} width={16} height={16} />
            {title} {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
         </button>
         {isOpen && (
            <div className="ml-10 flex flex-col">
               {links.map((link) => (
                  <Link key={link.href} href={link.href} className={`py-1 ${isActive(link.href)}`}>
                     {link.name}
                  </Link>
               ))}
            </div>
         )}
      </div>
   );
};

export default SidebarItem;
