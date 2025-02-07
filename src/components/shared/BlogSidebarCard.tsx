"use client";

import Image from "next/image";
import { FaFacebook, FaLinkedin, FaTwitter, FaTelegram, FaBookmark } from "react-icons/fa";


export default function BlogSidebarCard({ author }: {
   author: {
      fullName: string;
      profileImage: string;
   }
}) {
   return (
      <>
         <aside className="w-full md:w-64 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Author</h3>
            <div className="flex items-center space-x-3">
               <Image
                  src={author.profileImage}
                  alt={author.fullName}
                  width={40}
                  height={40}
                  className="rounded-full"
               />
               <span className="text-gray-700 dark:text-gray-300">{author.fullName}</span>
            </div>

            {/* Bookmark & Social */}
            <div className="mt-6">
               <button className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white space-x-2">
                  <FaBookmark />
                  <span>Bookmark</span>
               </button>
               <h4 className="mt-4 text-gray-700 dark:text-gray-300">Share With</h4>
               <div className="flex space-x-3 mt-2">
                  <FaFacebook className="text-blue-600 dark:text-blue-500 cursor-pointer" />
                  <FaLinkedin className="text-blue-500 dark:text-blue-400 cursor-pointer" />
                  <FaTwitter className="text-blue-400 dark:text-blue-300 cursor-pointer" />
                  <FaTelegram className="text-blue-600 dark:text-blue-500 cursor-pointer" />
               </div>
            </div>
         </aside>

      </>
   )
}