"use client";

import Image from "next/image";
import { useState } from "react";

export default function PriceingCard({
   plan,
   onGetStartedClick,
}: {
   plan: {
      title: string;
      description: string;
      discountedPrice: number;
      originalPrice: number;
      discount: number;
      features: { text: string; icon: string }[];
   };
   onGetStartedClick: (title: string) => void;
}) {

   const [isHovered, setIsHovered] = useState(false);
   return (
      <div
         className={`relative border-2 border-gray-300 dark:border-gray-700 rounded-xl p-6 max-w-xs w-full mt-5 backdrop-blur-lg transition-all duration-300 ease-in-out
        ${isHovered
               ? "scale-105 shadow-2xl bg-white/70 dark:bg-gray-900/70"
               : "bg-white/50 dark:bg-gray-900/50"
            }
      `}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
      >
         <h2 className="text-2xl font-semibold text-start text-gray-900 dark:text-white">
            {plan.title}
         </h2>
         <p className="text-start text-gray-600 dark:text-gray-400 mb-4">
            {plan.description}
         </p>
         <h3 className="text-xl font-bold text-start text-gray-900 dark:text-white mb-6">
            <span className="line-through text-red-400 dark:text-red-500 mr-2">
               ₹{plan.originalPrice}
            </span>
            ₹{plan.discountedPrice}
            <span className="text-sm text-green-600 dark:text-green-400 ml-2">
               ({plan.discount}% OFF)
            </span>
         </h3>
         <div className="space-y-4">
            {plan.features.map((feature, index) => (
               <div key={index} className="flex items-center space-x-2">
                  <Image
                     width={20}
                     height={20}
                     src={feature.icon}
                     alt="icon"
                     className="w-5 h-5"
                  />
                  <p className="text-gray-600 dark:text-gray-400">{feature.text}</p>
               </div>
            ))}
         </div>
         <button
            onClick={() => onGetStartedClick(plan.title)}
            className="mt-6 w-full bg-black dark:bg-white text-white dark:text-black py-2 rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
         >
            Get Started
         </button>
      </div>
   );
}
