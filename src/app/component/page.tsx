"use client";

import ComponentDisplayingCard from "@/components/shared/ComponentDisplayingCard";
import Link from "next/link";

export default function Page() {
   return (
      <div className="w-full h-fit flex flex-col text-white py-10 px-4 sm:px-8 lg:px-16 mt-10">
         {/* Title */}
         <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold text-start">
            Tailwind Components: Copy and Use
         </h1>

         {/* Breadcrumb */}
         <div className="w-full flex gap-2 font-mono text-sm sm:text-base mt-4 justify-start">
            <Link className="text-blue-300" href="/">
               Home{" /"}
            </Link>
            <p className="text-gray-300">Components...</p>
         </div>

         {/* Cards Section */}
         <div className="w-full flex gap-10 flex-wrap mt-10">
            {AllComponents.map((component, index) => (
               <ComponentDisplayingCard key={index} text={component.name} redirect={component.redirect} />
            ))}
         </div>
      </div>
   );
}

const AllComponents = [
   { name: "Stylist Buttons", redirect: "/component/buttons" },
   { name: "Hover Cards", redirect: "/component/cards" },
];
