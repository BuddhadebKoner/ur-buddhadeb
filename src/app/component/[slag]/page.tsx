"use client";

import { useEffect, useState, useMemo, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import ShareComponent from "@/components/UiComponents/ShareComponent";

interface ComponentData {
   _id: string;
   category: string;
   uiName: string;
   codeFileName: string;
   code: string;
   createdAt: string;
   updatedAt: string;
   __v: number;
}

export default function Page() {
   const params = useParams();
   const category = (params?.slag as string) || "buttons";

   const [components, setComponents] = useState<ComponentData[]>([]);
   const [loading, setLoading] = useState<boolean>(true);
   const [error, setError] = useState<string>("");

   const cacheRef = useRef<Map<string, ComponentData[]>>(new Map());

   useEffect(() => {
      const fetchComponents = async () => {
         // Check if data exists in cache
         if (cacheRef.current.has(category)) {
            setComponents(cacheRef.current.get(category) || []);
            setLoading(false);
            return;
         }

         try {
            setLoading(true);
            setError("");
            const response = await fetch(`/api/get-data?category=${category}`);

            if (!response.ok) {
               throw new Error("Failed to fetch components");
            }

            // console.log("Response:", response);

            const data: { components: ComponentData[] } = await response.json();

            cacheRef.current.set(category, data.components || []);
            setComponents(data.components || []);
         } catch (err: unknown) {
            console.error("Error fetching components:", err);

            if (err instanceof Error) {
               setError(err.message);
            } else {
               setError("An unknown error occurred");
            }
         } finally {
            setLoading(false);
         }
      };

      fetchComponents();
   }, [category]);

   const renderedComponents = useMemo(() => {
      return components.map((component) => (
         <ShareComponent
            key={component._id}
            code={component.code}
            uiName={component.uiName}
            codeFileName={component.codeFileName}
         />
      ));
   }, [components]);

   return (
      <div className="w-full h-[100vh] flex flex-col items-start pt-20 px-5 text-white overflow-auto z-10">
         <h1 className="lg:text-3xl text-xl font-bold">Components: Copy and Use</h1>
         <div className="w-full flex gap-2 mt-5 font-mono text-sm lg:text-base">
            <Link className="text-blue-300" href="/">
               Home{" /"}
            </Link>
            <Link className="text-blue-300" href="/component">
               Components{" /"}
            </Link>
            <p className="text-gray-300">{category}...</p>
         </div>

         {loading ? (
            <div className="w-full h-full flex items-center justify-center">
               <p>Loading components...</p>
            </div>
         ) : error ? (
            <p className="text-red-400">Error: {error}</p>
         ) : (
            <div className="w-full h-fit mt-10 flex flex-col gap-10">
               {components.length > 0 ? renderedComponents : <p>No components found for the selected category.</p>}
            </div>
         )}
      </div>
   );
}


