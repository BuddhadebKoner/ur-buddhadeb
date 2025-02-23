"use client";

import React, { useContext, useState } from "react";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { createOneBlog } from "../../../api-calls/blogs-api";
import { AuthContext } from "@/contexts/AuthContext";

interface ContentBlock {
   _id: string;
   type: string;
   value: string;
}

interface CreateNewBlogProps {
   handleCreateBlogPopUpControll: () => void;
}

const CreateNewBlog: React.FC<CreateNewBlogProps> = ({
   handleCreateBlogPopUpControll,
}) => {
   // Form fields
   const [title, setTitle] = useState("");
   const [imageUrl, setImageUrl] = useState("");
   const [videoLink, setVideoLink] = useState("");
   const [readTime, setReadTime] = useState("");
   const [slugParams, setSlugParams] = useState("");
   const [contentBlocks, setContentBlocks] = useState<ContentBlock[]>([]);
   const [errors, setErrors] = useState<Record<string, string>>({});
   const [loading, setLoading] = useState(false);
   const [serverError, setServerError] = useState<string | null>(null);

   // Get user data from Clerk and MongoDB (via context)
   const { user, isLoaded } = useUser();
   const authContext = useContext(AuthContext);

   if (!isLoaded) {
      return <div>Loading...</div>;
   }

   // Add a new content block
   const addContentBlock = () => {
      setContentBlocks((prev) => [
         ...prev,
         { _id: Date.now().toString(), type: "", value: "" },
      ]);
   };

   // Update content block type
   const handleContentTypeChange = (index: number, type: string) => {
      setContentBlocks((prev) => {
         const updated = [...prev];
         updated[index].type = type;
         return updated;
      });
   };

   // Update content block value
   const handleContentValueChange = (index: number, value: string) => {
      setContentBlocks((prev) => {
         const updated = [...prev];
         updated[index].value = value;
         return updated;
      });
   };

   // Remove a content block
   const removeContentBlock = (index: number) => {
      setContentBlocks((prev) => prev.filter((_, i) => i !== index));
   };

   // Validate form inputs
   const validateForm = () => {
      const newErrors: Record<string, string> = {};

      if (!title.trim()) newErrors.title = "Title is required";
      if (!slugParams.trim()) newErrors.slugParams = "Slug is required";

      contentBlocks.forEach((block, index) => {
         if (!block.type) {
            newErrors[`contentType-${index}`] = "Content type is required";
         }
         if (!block.value.trim()) {
            newErrors[`contentValue-${index}`] = "Content value is required";
         }
      });

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
   };

   // Handle form submission
   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setServerError(null);

      if (!validateForm()) return;

      // Check if we have a valid author ID from our context (MongoDB)
      const authorId = authContext?.currentUser?._id;
      if (!authorId) {
         setServerError("You must be logged in to create a blog.");
         return;
      }

      setLoading(true);

      const blogData = {
         author: authorId,
         title,
         imageUrl,
         videoLink,
         readTime,
         slugParams,
         content: contentBlocks.map((block) => ({
            type: block.type,
            value: block.value,
         })),
      };

      try {
         const res = await createOneBlog(blogData);

         if (res.error) {
            setServerError(res.error);
         } else {
            // Optionally, reset the form or show a success message.
            setTitle("");
            setImageUrl("");
            setVideoLink("");
            setReadTime("");
            setSlugParams("");
            setContentBlocks([]);
            // Close the blog creation popup.
            handleCreateBlogPopUpControll();
         }
      } catch (error) {
         console.error("Error submitting blog:", error);
         setServerError("An unexpected error occurred. Please try again later.");
      } finally {
         setLoading(false);
      }
   };

   // Helper: Extract YouTube video ID
   const getYouTubeID = (url: string) => {
      if (!url) return null;
      const match = url.match(
         /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/
      );
      return match ? match[1] : null;
   };

   return (
      <div className="fixed inset-0 flex bg-black bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-60 backdrop-blur-md z-50">
         {/* Form Section */}
         <div className="relative bg-white dark:bg-darkBgColor rounded-lg p-8 lg:h-screen lg:w-1/2 w-full overflow-y-auto">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-6">
               Create New Blog
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
               {serverError && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                     {serverError}
                  </div>
               )}

               {/* Title */}
               <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                     Title *
                  </label>
                  <input
                     type="text"
                     value={title}
                     onChange={(e) => setTitle(e.target.value)}
                     disabled={loading}
                     className={`w-full rounded-md border ${errors.title ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                        } p-2 bg-white dark:bg-darkBgColor`}
                  />
                  {errors.title && (
                     <p className="text-red-500 text-sm mt-1">{errors.title}</p>
                  )}
               </div>

               {/* Image URL */}
               <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                     Image URL
                  </label>
                  <input
                     type="url"
                     value={imageUrl}
                     onChange={(e) => setImageUrl(e.target.value)}
                     disabled={loading}
                     className="w-full rounded-md border border-gray-300 dark:border-gray-600 p-2 bg-white dark:bg-darkBgColor"
                  />
               </div>

               {/* Video Link */}
               <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                     Video Link
                  </label>
                  <input
                     type="url"
                     value={videoLink}
                     onChange={(e) => setVideoLink(e.target.value)}
                     disabled={loading}
                     className="w-full rounded-md border border-gray-300 dark:border-gray-600 p-2 bg-white dark:bg-darkBgColor"
                  />
               </div>

               {/* Read Time */}
               <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                     Read Time
                  </label>
                  <input
                     type="text"
                     value={readTime}
                     onChange={(e) => setReadTime(e.target.value)}
                     disabled={loading}
                     placeholder="e.g., 5 min read"
                     className="w-full rounded-md border border-gray-300 dark:border-gray-600 p-2 bg-white dark:bg-darkBgColor"
                  />
               </div>

               {/* Slug Parameters */}
               <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                     Slug Parameters *
                  </label>
                  <input
                     type="text"
                     value={slugParams}
                     onChange={(e) => setSlugParams(e.target.value)}
                     disabled={loading}
                     className={`w-full rounded-md border ${errors.slugParams ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                        } p-2 bg-white dark:bg-darkBgColor`}
                  />
                  {errors.slugParams && (
                     <p className="text-red-500 text-sm mt-1">{errors.slugParams}</p>
                  )}
               </div>

               {/* Content Blocks */}
               <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                     Content Blocks *
                  </label>
                  {contentBlocks.map((block, index) => (
                     <div
                        key={block._id}
                        className="mb-4 p-4 border rounded-md dark:border-gray-600"
                     >
                        <div className="mb-2">
                           <select
                              value={block.type}
                              onChange={(e) =>
                                 handleContentTypeChange(index, e.target.value)
                              }
                              disabled={loading}
                              className={`w-full rounded-md border ${errors[`contentType-${index}`]
                                 ? "border-red-500"
                                 : "border-gray-300 dark:border-gray-600"
                                 } p-2 bg-white dark:bg-darkBgColor`}
                           >
                              <option value="">Select Content Type</option>
                              <option value="heading">Heading</option>
                              <option value="text">Text</option>
                              <option value="code">Code</option>
                              <option value="bold">Bold</option>
                              <option value="highlight">Highlight</option>
                           </select>
                           {errors[`contentType-${index}`] && (
                              <p className="text-red-500 text-sm mt-1">
                                 {errors[`contentType-${index}`]}
                              </p>
                           )}
                        </div>
                        <div className="mb-2">
                           <textarea
                              value={block.value}
                              onChange={(e) =>
                                 handleContentValueChange(index, e.target.value)
                              }
                              disabled={loading}
                              rows={4}
                              placeholder="Enter content..."
                              className={`w-full rounded-md border ${errors[`contentValue-${index}`]
                                 ? "border-red-500"
                                 : "border-gray-300 dark:border-gray-600"
                                 } p-2 bg-white dark:bg-darkBgColor`}
                           />
                           {errors[`contentValue-${index}`] && (
                              <p className="text-red-500 text-sm mt-1">
                                 {errors[`contentValue-${index}`]}
                              </p>
                           )}
                        </div>
                        <button
                           type="button"
                           onClick={() => removeContentBlock(index)}
                           disabled={loading}
                           className="text-red-500 text-sm hover:text-red-700"
                        >
                           Remove Block
                        </button>
                     </div>
                  ))}
                  <button
                     type="button"
                     onClick={addContentBlock}
                     disabled={loading}
                     className="w-full py-2 mt-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 border border-dashed border-gray-300 dark:border-gray-600 rounded-md"
                  >
                     + Add Content Block
                  </button>
               </div>

               {/* Form Actions */}
               <div className="flex justify-end space-x-4 mt-6">
                  <button
                     type="button"
                     onClick={handleCreateBlogPopUpControll}
                     disabled={loading}
                     className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 transition duration-300"
                  >
                     Close
                  </button>
                  <button
                     type="submit"
                     disabled={loading}
                     className={`px-4 py-2 bg-green-500 dark:bg-green-400 text-white rounded-lg transition duration-300 ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-green-600 dark:hover:bg-green-500"
                        }`}
                  >
                     {loading ? "Creating..." : "Create Blog"}
                  </button>
               </div>
            </form>
         </div>

         {/* Preview Section */}
         <div className="hidden lg:block fixed right-0 top-0 h-screen w-1/2 bg-white dark:bg-gray-900 p-8 overflow-y-auto shadow-xl">
            <div className="max-w-3xl mx-auto">
               {/* Blog Header */}
               <div className="mb-8">
                  <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                     {imageUrl ? (
                        <Image
                           src={imageUrl}
                           alt={title || "Blog cover"}
                           fill
                           className="object-cover"
                           priority
                        />
                     ) : (
                        <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                           <span className="text-gray-500 dark:text-gray-400">
                              Preview cover image
                           </span>
                        </div>
                     )}
                     <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
                        <h1 className="text-3xl font-bold text-white text-center">
                           {title || "Your blog title preview"}
                        </h1>
                     </div>
                  </div>
               </div>

               {/* Author Info */}
               <div className="flex items-center gap-4 mb-8">
                  <div className="relative h-12 w-12">
                     <Image
                        src={user?.imageUrl || "/default-avatar.png"}
                        alt="Author"
                        fill
                        className="rounded-full border-2 border-white dark:border-gray-800 shadow-sm"
                     />
                  </div>
                  <div>
                     <p className="font-medium text-gray-900 dark:text-gray-100">
                        {user?.fullName || "Author Name"}
                     </p>
                     <div className="flex gap-3 text-sm text-gray-600 dark:text-gray-400">
                        <span>{new Date().toLocaleDateString()}</span>
                        {readTime && <span>• {readTime}</span>}
                     </div>
                  </div>
               </div>

               {/* Content Preview */}
               <article className="prose dark:prose-invert max-w-none">
                  {contentBlocks.map((block) => {
                     switch (block.type) {
                        case "heading":
                           return (
                              <h2
                                 key={block._id}
                                 className="text-2xl font-bold text-gray-900 dark:text-white mb-5"
                              >
                                 {block.value || "Heading preview..."}
                              </h2>
                           );
                        case "text":
                           return (
                              <p
                                 key={block._id}
                                 className="text-lg text-gray-800 dark:text-gray-300 mb-5"
                              >
                                 {block.value || "Start typing your content here..."}
                              </p>
                           );
                        case "code":
                           return (
                              <pre
                                 key={block._id}
                                 className="bg-gray-200 dark:bg-gray-800 p-4 rounded-md overflow-x-auto text-gray-800 dark:text-gray-300 mb-5"
                              >
                                 <code>{block.value}</code>
                              </pre>
                           );
                        case "bold":
                           return (
                              <h2
                                 key={block._id}
                                 className="text-lg font-bold text-gray-900 dark:text-gray-200 mb-5"
                              >
                                 {block.value || "Bold text preview..."}
                              </h2>
                           );
                        case "highlight":
                           return (
                              <h2
                                 key={block._id}
                                 className="text-lg bg-yellow-300 text-black px-2 py-1 inline-block rounded mb-5"
                              >
                                 {block.value || "Highlighted text preview..."}
                              </h2>
                           );
                        default:
                           return (
                              <div
                                 key={block._id}
                                 className="text-gray-500 italic"
                              >
                                 [Unsupported content type]
                              </div>
                           );
                     }
                  })}
               </article>

               {/* Video Preview */}
               {videoLink && getYouTubeID(videoLink) && (
                  <div className="mt-12 rounded-xl overflow-hidden shadow-lg">
                     <div className="aspect-video bg-gray-200 dark:bg-gray-800">
                        <iframe
                           className="w-full h-full"
                           src={`https://www.youtube.com/embed/${getYouTubeID(videoLink)}`}
                           title="YouTube video player"
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                           allowFullScreen
                        />
                     </div>
                  </div>
               )}

               {/* Empty State */}
               {contentBlocks.length === 0 && (
                  <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                     <p className="text-lg">
                        Start adding content blocks to see preview
                     </p>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};

export default CreateNewBlog;
