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
   const [choosePlan, setChoosePlan] = useState("");

   const handleGetStartedClick = (title: string) => {
      setChoosePlan(title);
      setShowForm(true);
   };

   return (
      <>
         <Head>
            <title>Pricing Plans</title>
            <meta property="og:title" content="Pricing Plans" key="title" />
         </Head>
         <div className="w-full min-h-screen flex flex-col py-16 dark:bg-[#181818]">
            {/* Pricing Notice */}
            <div className="w-full bg-cover bg-center py-3 lg:py-2 dark:bg-slate-500">
               <div className="container mx-auto flex justify-center lg:justify-between items-center px-4 lg:px-16">
                  <h1 className="text-white font-medium text-xs lg:text-sm text-center lg:text-left">
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

            {/* Additional Info Section */}
            <div className="w-fit mx-10 mt-8 p-6 border-2 border-gray-300 dark:border-gray-700 rounded-xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg shadow-lg transition-all duration-300">
               <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Why Choose Us?</h2>

               <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                     <span className="text-green-600 dark:text-green-400 font-bold text-lg">✔</span>
                     <p className="text-gray-700 dark:text-gray-300">
                        <strong>Experienced Developers:</strong> Our team has built 100+ successful websites.
                     </p>
                  </div>

                  <div className="flex items-start space-x-3">
                     <span className="text-green-600 dark:text-green-400 font-bold text-lg">✔</span>
                     <p className="text-gray-700 dark:text-gray-300">
                        <strong>Custom Solutions:</strong> Tailored to fit your unique business needs.
                     </p>
                  </div>

                  <div className="flex items-start space-x-3">
                     <span className="text-green-600 dark:text-green-400 font-bold text-lg">✔</span>
                     <p className="text-gray-700 dark:text-gray-300">
                        <strong>SEO & Performance Optimization:</strong> Get a fast and search-friendly website.
                     </p>
                  </div>

                  <div className="flex items-start space-x-3">
                     <span className="text-green-600 dark:text-green-400 font-bold text-lg">✔</span>
                     <p className="text-gray-700 dark:text-gray-300">
                        <strong>Continuous Support:</strong> We offer long-term assistance and updates.
                     </p>
                  </div>
               </div>

               <div className="border-t border-gray-300 dark:border-gray-700 my-4"></div>

               <div className="flex flex-col lg:flex-row items-center justify-between">
                  <p className="text-gray-700 dark:text-gray-300 text-center lg:text-left">
                     Still have questions? Let’s discuss your project.
                  </p>
                  <button className="mt-4 lg:mt-0 bg-black dark:bg-white text-white dark:text-black py-2 px-6 rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                     Get in Touch
                  </button>
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

