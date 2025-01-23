"use client";

import PopupForm from "@/components/shared/PopupForm";
import PriceingCard from "@/components/shared/PriceingCard";
import Head from "next/head";
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

   const handleGetStartedClick = () => {
      setShowForm(true);
   };

   return (
      <>
         <Head>
            <title>Pricing Plans</title>
            <meta property="og:title" content="Pricing Plans" key="title" />
         </Head>
         <div className="w-full min-h-[80vh] flex flex-col">
            <div className="w-full bg-[url('/levelBg.jpg')] py-3 lg:py-2">
               <div className="container mx-auto flex justify-between items-center px-4 lg:px-16">
                  <h1 className="text-white font-semibold text-xs lg:text-sm">
                     All prices are base starting points and will vary based on website requirements.
                  </h1>
               </div>
            </div>
            <div className="w-full lg:py-10 py-5">
               <div className="container mx-auto flex justify-evenly items-center px-4 lg:px-16 flex-wrap">
                  {pricingData.map((plan, index) => (
                     <PriceingCard
                        key={index}
                        plan={plan}
                        onGetStartedClick={handleGetStartedClick}
                     />
                  ))}
               </div>
            </div>
         </div>

         {/* Popup form */}
         {showForm && (
            <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
               <PopupForm 
               onClose={() => setShowForm(false)} />
            </div>
         )}
      </>
   );
}
