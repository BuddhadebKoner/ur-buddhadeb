"use client";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
   title: string;
   author: {
      profileImage: string;
      name: string;
   };
   timeToRead: number | string;
   content: string;
   imageUrl: string;
   slugParams: string;
   createdAt?: string;
}

export default function BlogCard({
   title,
   author,
   timeToRead,
   content,
   imageUrl,
   slugParams,
   createdAt,
}: BlogCardProps) {
   return (
      <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white/80 shadow-md backdrop-blur-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] p-5 flex items-start space-x-5">
         {/* Blog Thumbnail */}
         <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden shadow-sm">
            <Image src={imageUrl} alt={title} width={80} height={80} className="object-cover transition-all duration-300 group-hover:scale-105" />
         </div>

         {/* Blog Content */}
         <div className="flex-1">
            {/* Date */}
            {createdAt && (
               <p className="text-xs text-gray-500 font-medium">
                  {new Date(createdAt).toLocaleDateString("en-IN", {
                     month: "long",
                     day: "numeric",
                     year: "numeric",
                  })}
               </p>
            )}

            {/* Title */}
            <Link href={`/blogs/${slugParams}`} className="block">
               <h2 className="text-xl font-semibold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors">
                  {title}
               </h2>
            </Link>

            {/* Blog Excerpt */}
            <p className="text-sm text-gray-700 mt-2 leading-relaxed">
               {content.length > 120 ? content.slice(0, 120) + "..." : content}
            </p>

            {/* Author & Reading Time */}
            <div className="mt-4 flex items-center space-x-3">
               <Image src={author.profileImage} alt={author.name} width={32} height={32} className="rounded-full border border-gray-300 shadow-sm" />
               <p className="text-sm font-medium text-gray-700">{author.name} • {timeToRead} min read</p>
            </div>

            {/* Continue Reading */}
            <Link href={`/blogs/${slugParams}`} className="mt-4 inline-block text-blue-500 text-sm font-semibold transition hover:text-blue-700">
               Continue Reading →
            </Link>
         </div>
      </div>
   );
}
