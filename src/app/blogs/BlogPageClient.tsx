"use client";

import React from "react";
import BlogCard from "@/components/shared/BlogCard";
import { useGetBlogs } from "../../../utils/react-query/queriesAndMutation";
import { Loader } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function BlogPage() {
   const {
      data,
      error,
      fetchNextPage,
      hasNextPage,
      isFetchingNextPage,
   } = useGetBlogs();

   const { user, isLoaded } = useUser();
   const blogs = data?.pages.flatMap((page) => page.blogs) || [];

   return (
      <div className="w-full min-h-screen bg-gray-100 dark:bg-darkBgColor transition-colors container mx-auto flex flex-col items-center px-4 lg:px-16">
         {/* post blog */}
         <div className="w-full flex items-center justify-start gap-10 pt-16 ">
            {/* Heading */}
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white text-start py-2">
               Explore Tech Articles
            </h1>
            {/* create blog */}
            <div className="flex items-center gap-4">
               {isLoaded ? (
                  user ? (
                     <>
                        <div className="flex items-center gap-2">
                           <Link href="/create-blog">
                              <button className="px-6 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300">
                                 Create Blog
                              </button>
                           </Link>
                       </div>
                     </>
                  ) : (
                     <>
                        <div className="flex gap-2 text-gray-500 dark:text-gray-400">
                           Sign In or Sign Up for blog contribute
                           <Link
                              href="/sign-in"
                              className="text-blue-600 dark:text-blue-400 hover:underline"
                           >
                              here
                           </Link>
                        </div>
                     </>
                  )
               ) : (
                  <button
                     disabled
                     className="ml-auto bg-gray-400 dark:bg-gray-600 text-white px-4 py-2 rounded-lg cursor-not-allowed"
                  >
                     <Loader className="animate-spin w-4 h-4" />
                  </button>
               )}
            </div>
         </div>

         {/* Error Message */}
         {error && <p className="text-red-500 text-center mt-4">Failed to load blogs.</p>}

         {/* Blog List */}
         <div className="w-full bg-transparent pt-10 flex flex-col flex-wrap justify-center items-center gap-10">
            {blogs.length > 0 ? (
               blogs.map((blog) => (
                  <BlogCard
                     key={blog._id}
                     title={blog.title}
                     author={{
                        profileImage: blog.author.profileImage,
                        name: blog.author.fullName,
                     }}
                     timeToRead={blog.readTime}
                     content={
                        blog.content
                           .map((item: { value: string }) => item.value)
                           .join(" ")
                           .slice(0, 100) + "..."
                     }
                     imageUrl={blog.imageUrl}
                     slugParams={blog.slugParams}
                     createdAt={blog.createdAt}
                  />
               ))
            ) : (
               !error && <p className="text-center text-gray-500 dark:text-gray-400"><Loader className="w-10 h-10 animate-spin" /></p>
            )}
         </div>

         {/* Load More Button */}
         {hasNextPage && (
            <div className="flex justify-center mt-6">
               <button
                  onClick={() => fetchNextPage()}
                  disabled={isFetchingNextPage}
                  className="px-6 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300 disabled:opacity-50"
               >
                  {isFetchingNextPage ? <Loader className="w-5 h-5" /> : "See More"}
               </button>
            </div>
         )}
      </div>
   );
}