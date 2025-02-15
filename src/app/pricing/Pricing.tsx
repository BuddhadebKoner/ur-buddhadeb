"use client";

import PopupForm from "@/components/shared/PopupForm";
import PriceingCard from "@/components/shared/PriceingCard";
import { useState } from "react";

const pricingData = [
   {
      title: "Basic",
      description: "Showcase websites for portfolios",
      originalPrice: 3999,
      discount: 25,
      discountedPrice: Math.floor(3999 * (1 - 25 / 100)),
      features: [
         { text: "Free Domain for 1 Year", icon: "/icons/right.svg" },
         { text: "Hosting Included", icon: "/icons/right.svg" },
         { text: "Mobile-Friendly", icon: "/icons/right.svg" },
         { text: "Ongoing Support", icon: "/icons/right.svg" },
         { text: "Admin Panel", icon: "/icons/cross.svg" },
         { text: "Database Included", icon: "/icons/cross.svg" },
         { text: "Scalable Server", icon: "/icons/cross.svg" },
      ],
   },
   {
      title: "Standard",
      description: "E-commerce sites with essential features",
      originalPrice: 7999,
      discount: 18,
      discountedPrice: Math.floor(7999 * (1 - 18 / 100)),
      features: [
         { text: "Free Domain for 1 Year", icon: "/icons/right.svg" },
         { text: "Hosting Included", icon: "/icons/right.svg" },
         { text: "Mobile-Friendly", icon: "/icons/right.svg" },
         { text: "Ongoing Support", icon: "/icons/right.svg" },
         { text: "Admin Panel", icon: "/icons/right.svg" },
         { text: "Database Included", icon: "/icons/right.svg" },
         { text: "Scalable Server", icon: "/icons/cross.svg" },
      ],
   },
   {
      title: "Premium",
      description: "Complete business websites with custom features",
      originalPrice: 15999,
      discount: 12,
      discountedPrice: Math.floor(15999 * (1 - 12 / 100)),
      features: [
         { text: "Free Domain for 1 Year", icon: "/icons/right.svg" },
         { text: "Hosting Included", icon: "/icons/right.svg" },
         { text: "Mobile-Friendly", icon: "/icons/right.svg" },
         { text: "Ongoing Support", icon: "/icons/right.svg" },
         { text: "Admin Panel", icon: "/icons/right.svg" },
         { text: "Database Included", icon: "/icons/right.svg" },
         { text: "Scalable Server", icon: "/icons/right.svg" },
      ],
   },
];


export default function Pricing() {
   const [showForm, setShowForm] = useState(false);
   const [choosePlan, setChoosePlan] = useState("");

   const handleGetStartedClick = (title: string) => {
      setChoosePlan(title);
      setShowForm(true);
   };

   return (
      <>
         <div className="w-full min-h-screen flex flex-col py-16 dark:bg-darkBgColor">
            {/* Pricing Notice */}
            <div className="w-full bg-cover bg-center py-3 lg:py-2 dark:bg-slate-500 bg-lightBarBgcolor">
               <div className="mx-auto flex justify-center lg:justify-between items-center px-4 lg:px-16">
                  <h1 className="text-black dark:text-white font-medium text-xs lg:text-sm text-center lg:text-left">
                     All prices are base starting points and will vary based on website requirements.
                  </h1>
               </div>
            </div>

            {/* Pricing Plans */}
            <div className="w-full lg:py-10 py-5">
               <div className="container mx-auto flex justify-center lg:justify-evenly items-center px-4 lg:px-16 flex-wrap gap-6">
                  {pricingData.map((plan, index) => (
                     <PriceingCard
                        key={index}
                        plan={plan}
                        onGetStartedClick={handleGetStartedClick}
                     />
                  ))}
               </div>
            </div>



            {/* Popup Form */}
            {showForm && (
               <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-60 backdrop-blur-md z-50">
                  <PopupForm
                     title={choosePlan}
                     onClose={() => setShowForm(false)}
                  />
               </div>
            )}
         </div>
      </>
   );
}

