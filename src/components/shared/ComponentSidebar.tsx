"use client";

import Link from "next/link";

const Sidebar = () => {
   return (
      <div className="w-1/4 bg-gray-800 pt-20 px-5">
         <ul className="space-y-4">
            <li>
               <Link href="/component/" className="text-white hover:text-blue-500">
                  components
               </Link>
            </li>
            <li>
               <Link href="/component/buttons" className="text-white hover:text-blue-500">
                  buttons
               </Link>
            </li>
            <li>
               <Link href="/component/dropdowns" className="text-white hover:text-blue-500">
                  dropdowns
               </Link>
            </li>
            <li>
               <Link href="/component/inputs" className="text-white hover:text-blue-500">
                  inputs
               </Link>
            </li>
         </ul>
      </div>
   );
};

export default Sidebar;
