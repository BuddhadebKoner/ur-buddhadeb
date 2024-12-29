"use client";
import React from "react";
import Hero from "@/components/shared/Hero";
import TechCard from "@/components/shared/TechCard";
import { Compare } from "@/components/ui/compare";

export default function Page() {
   return (
      <div className="w-full flex flex-col">
         {/* Hero Section */}
         <div className="w-full bg-[#F9FAFB] py-20 lg:py-10">
            <div className="container mx-auto flex justify-between items-center px-4 lg:px-16">
               <Hero />
               <div className="p-4 border rounded-3xl hidden lg:block">
                  <Compare
                     firstImage="https://assets.aceternity.com/code-problem.png"
                     secondImage="https://assets.aceternity.com/code-solution.png"
                     firstImageClassName="object-cover object-left-top"
                     secondImageClassname="object-cover object-left-top"
                     className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
                     slideMode="hover"
                  />
               </div>
            </div>
         </div>

         {/* TechCard Section */}
         <div className="w-full h-fit bg-white py-10 lg:py-20">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-16">
               <TechCard
                  tech={{
                     icon: "/icons/react.svg",
                     iconAult: "React Icon",
                     title: "Responsive Design",
                     subTitle: "Craft user interfaces that adapt seamlessly to any device or screen size.",
                  }}
               />
               <TechCard
                  tech={{
                     icon: "/icons/db.svg",
                     iconAult: "Database Icon",
                     title: "Efficient Server Costs",
                     subTitle: "Leverage the power of modern web technologies for optimal performance and developer experience.",
                  }}
               />
               <TechCard
                  tech={{
                     icon: "/icons/dollar.svg",
                     iconAult: "Dollar Icon",
                     title: "Budget-Friendly Solutions",
                     subTitle: "Leverage the power of modern web technologies for optimal performance and developer experience.",
                  }}
               />
            </div>
         </div>
      </div>
   );
}
