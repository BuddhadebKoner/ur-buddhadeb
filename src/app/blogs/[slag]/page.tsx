"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useGetOneBlog } from "../../../../utils/react-query/queriesAndMutation";
import BlogSidebarCard from "@/components/shared/BlogSidebarCard";

interface Blog {
   _id: string;
   title: string;
   author: {
      fullName: string;
      profileImage: string;
   };
   readTime: string;
   content: {
      type: string;
      value: string;
      _id: string;
   }[];
   imageUrl: string;
   slugParams: string;
   videoLink?: string;
   updatedAt: string;
}

export default function BlogDetailPage() {
   const { slag } = useParams() as { slag: string };
   const { data, error, isLoading } = useGetOneBlog(slag as string);

   if (isLoading) {
      return (
         <div className="min-h-screen flex items-center justify-center text-gray-400 text-xl">
            Loading blog...
         </div>
      );
   }

   if (error || !data?.blog) {
      return (
         <div className="min-h-screen flex items-center justify-center text-red-500 text-xl">
            {error?.message || "Blog not found!"}
         </div>
      );
   }

   const blog: Blog = data.blog;

   // Extract YouTube video ID
   const getYouTubeID = (url: string | undefined) => {
      if (!url) return null;
      const match = url.match(/(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/);
      return match ? match[1] : null;
   };

   return (
      <>
         <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 lg:py-20 py-20 px-6 md:px-20 transition-colors duration-300">
            {/* Breadcrumb */}
            <section className="max-w-4xl mx-auto">
               <p className="text-gray-600 dark:text-gray-400 text-base py-5">
                  <Link href="/blogs" className="text-blue-600 dark:text-blue-400 underline">BLOGS</Link> / {blog.title.length > 25 ? `${blog.title.slice(0, 20)}...` : blog.title}
               </p>
               <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image src={blog.imageUrl} alt={blog.title} layout="fill" objectFit="cover" className="brightness-90 dark:brightness-75" />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                     <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">{blog.title}</h1>
                  </div>
               </div>
            </section>

            {/* Blog Content */}
            <div className="max-w-4xl mx-auto mt-10 flex flex-col md:flex-row gap-10">
               <div className="w-full md:w-3/4">
                  {/* Author Info */}
                  <div className="flex items-center gap-4 mb-6">
                     <Image src={blog.author.profileImage} alt={blog.author.fullName} width={50} height={50} className="rounded-full border border-gray-300 dark:border-gray-700" />
                     <div>
                        <p className="text-lg font-semibold">{blog.author.fullName}</p>
                        <div className="flex items-center gap-4">
                           <p className="text-gray-600 dark:text-gray-400 text-sm">
                              {new Date(blog.updatedAt).toLocaleDateString("en-IN", { month: "long", day: "numeric", year: "numeric" })}
                           </p>
                           <p className="text-gray-600 dark:text-gray-400 text-sm">{blog.readTime}</p>
                        </div>
                     </div>
                  </div>

                  {/* Blog Content */}
                  {blog.content.map((item) => (
                     <div key={item._id} className="mb-4">
                        {item.type === "text" && <p className="text-lg text-gray-800 dark:text-gray-300">{item.value}</p>}
                        {item.type === "heading" && <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{item.value}</h2>}
                        {item.type === "bold" && <p className="text-lg font-semibold text-gray-900 dark:text-gray-200">{item.value}</p>}
                        {item.type === "highlight" && (
                           <p className="text-lg bg-yellow-300 text-black px-2 py-1 inline-block rounded">{item.value}</p>
                        )}
                        {item.type === "code" && (
                           <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded-md overflow-x-auto text-gray-800 dark:text-gray-300">
                              <code>{item.value}</code>
                           </pre>
                        )}
                     </div>
                  ))}

                  {/* Video Section */}
                  {blog.videoLink && getYouTubeID(blog.videoLink) && (
                     <div className="mt-10">
                        <div className="relative h-0 pb-[56.25%]">
                           <iframe
                              className="absolute top-0 left-0 w-full h-full rounded-lg"
                              src={`https://www.youtube.com/embed/${getYouTubeID(blog.videoLink)}`}
                              title="YouTube video player"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                           ></iframe>
                        </div>
                     </div>
                  )}
               </div>

               {/* Sidebar */}
               <div className="w-full md:w-1/4">
                  <BlogSidebarCard author={blog.author} />
               </div>
            </div>
         </div>
      </>
   );
}