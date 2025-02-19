"use client";

import React, { useState } from "react";
import Hero from "@/components/shared/Hero";
import TechCard from "@/components/shared/TechCard";
import { LinkPreview } from "@/components/ui/link-preview";
import { FlipWords } from "@/components/ui/flip-words";
import UserBatch from "@/components/shared/UserBatch";
import { ThreeDCard } from "@/components/shared/Card";
import Image from "next/image";
import Link from "next/link";
const words = ["Family", "Team"];

const techIcons = [
   { src: "/icons/tech-next.svg", alt: "Next.js" },
   { src: "/icons/tech-tailwind.svg", alt: "Tailwind CSS" },
   { src: "/icons/tech-react.svg", alt: "React" },
   { src: "/icons/tech-mongo.svg", alt: "MongoDB" },
   { src: "/icons/tech-express.svg", alt: "Express" },
   { src: "/icons/tech-appwrite.svg", alt: "Appwrite" },
];
{/* TechCard Section */ }
const techCards = [
   {
      icon: "/icons/react.svg",
      iconAlt: "React Icon",
      title: "Responsive Design",
      subTitle: "Deliver stunning, user-friendly interfaces that look flawless on any screen size or device.",
   },
   {
      icon: "/icons/db.svg",
      iconAlt: "Database Icon",
      title: "Optimized Performance",
      subTitle: "Harness cutting-edge technologies to ensure lightning-fast performance and scalability.",
   },
   {
      icon: "/icons/dollar.svg",
      iconAlt: "Dollar Icon",
      title: "Cost-Effective Solutions",
      subTitle: "Achieve premium-quality web solutions tailored to your budget without compromise.",
   },
];
{/* Team Details Section */ }
const teamMembers = [
   {
      image: "https://cloud.appwrite.io/v1/storage/buckets/66f8e10b0034b56b85be/files/6772e34600021b7c9b90/view?project=66f8cb12003c2ead11e2&project=66f8cb12003c2ead11e2&",
      name: "Buddhadeb Koner",
      role: "Web Developer",
      note: "Passionate about crafting websites with cutting-edge technologies 💻.",
   },
   {
      image: "https://cloud.appwrite.io/v1/storage/buckets/66f8e10b0034b56b85be/files/6772e3f90016ae771776/view?project=66f8cb12003c2ead11e2&project=66f8cb12003c2ead11e2&",
      name: "Gourab Ganguly",
      role: "Backend Developer",
      note: "Optimizing servers to ensure seamless performance and reliability ⚙️.",
   },
   {
      image: "https://qrattender.rajislab.com/assets/team/DEVABRATA-PATRA.jpeg",
      name: "Devabrata Patra",
      role: "Designer",
      note: "Designing visually stunning interfaces with focus on user experience 🎨.",
   },
   {
      image: "https://qrattender.rajislab.com/assets/team/MD-RAJIBUL-ISLAM.jpeg",
      name: "MD Rajibul Islam",
      role: "AI Analyst",
      note: "Driving AI solutions that enhance decision-making and efficiency 🤖.",
   },
];

{/* Projects Section */ }
const projects = [
   {
      title: "Qr Attender",
      description: "An innovative QR code-based attendance system with unique features for seamless use. Perfect for businesses and institutions.",
      imageSrc: "https://cloud.appwrite.io/v1/storage/buckets/66f8e10b0034b56b85be/files/677312d3003802acded2/view?project=66f8cb12003c2ead11e2&project=66f8cb12003c2ead11e2&",
      imageAlt: "Qr Attender App Screenshot",
      tryNowLink: "https://qrattender.rajislab.com",
      tryNowText: "Try now →",
      orderNowText: "Order Now",
   },
   {
      title: "Social Media App",
      description: "A dynamic social media app designed to connect users and share moments. With advanced features for user interaction.",
      imageSrc: "https://cloud.appwrite.io/v1/storage/buckets/66f8e10b0034b56b85be/files/6773130a001be28d5c78/view?project=66f8cb12003c2ead11e2&project=66f8cb12003c2ead11e2&",
      imageAlt: "Social Media App Screenshot",
      tryNowLink: "https://kochugram.rajislab.com",
      tryNowText: "Try now →",
      orderNowText: "Order Now",
   },
   {
      title: "Made Portfolio Like This",
      description: "Showcasing custom portfolios designed to impress. A modern, responsive design for personal branding or professional use.",
      imageSrc: "https://cloud.appwrite.io/v1/storage/buckets/66f8e10b0034b56b85be/files/677313250010d640d5f7/view?project=66f8cb12003c2ead11e2&project=66f8cb12003c2ead11e2&",
      imageAlt: "Portfolio Website Screenshot",
      tryNowLink: "https://buddhadebkoner.rajislab.com/",
      tryNowText: "Try now →",
      orderNowText: "Order Now",
   },
];



const faqData = [
   {
      question: "How does QR Attender work?",
      answer:
         "QR Attender uses advanced QR code scanning technology to simplify attendance tracking. Once you create your personalized QR code, all it takes is a quick scan to log your attendance. It’s perfect for schools, events, or any organization, as it eliminates the need for manual record-keeping and makes the entire process seamless and paperless.",
   },
   {
      question: "Is QR Attender secure?",
      answer:
         "Yes, QR Attender prioritizes your data security. All attendance records and personal data are encrypted and securely stored on our servers, ensuring that only authorized users have access. We use industry-standard security protocols, so you can focus on managing attendance without worrying about data breaches or privacy issues.",
   },
   {
      question: "How do I create a QR ID card?",
      answer:
         "You can generate QR ID card by visiting qrcards.rajislab.com just fill out the details and your QR Cards will be generated instantly.",
   },
   {
      question: "How do I download attendance reports?",
      answer:
         "Downloading attendance reports is incredibly easy and flexible. You can access your reports by heading to the 'Reports' section. From there, select the time period you're interested in—whether it's daily, weekly, or monthly—and export the data in a format of your choice. The report generation is fast and can be customized to your specific needs.",
   },
   {
      question: "How do I use QR Attender?",
      answer:
         "QR Attender is designed with simplicity in mind. Start by registering an account and creating your personal QR ID. Once that's done, all you have to do is scan your QR code at any participating location or event. The system will instantly log your attendance, saving you from dealing with cumbersome manual processes. You can also track your attendance history and download reports whenever needed.",
   },
];



export default function Home() {
   const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

   const toggleFAQ = (index: number) => {
      setOpenFAQIndex(openFAQIndex === index ? null : index);
   };

   return (
      <div className="w-full flex flex-col">
         {/* Hero Section */}
         <div className="w-full bg-lightBgColor dark:bg-darkBgColor py-20 lg:py-10">
            <div className="container mx-auto flex justify-between items-center px-4 lg:px-16">
               <Hero />
            </div>
         </div>

         {/* TechCard Section */}
         <div className="w-full h-fit bg-lightBgColor dark:bg-darkBgColor py-10 lg:py-20">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-16">
               {techCards.map((tech, index) => (
                  <TechCard
                     key={index}
                     tech={{
                        icon: tech.icon,
                        iconAlt: tech.iconAlt,
                        title: tech.title,
                        subTitle: tech.subTitle,
                     }}
                  />
               ))}
            </div>
         </div>

         {/* Main Links Section */}
         <div className="w-full bg-lightBarBgcolor dark:bg-darkBgColor py-20 lg:py-40">
            <div className="container mx-auto px-4 lg:px-16 flex justify-between items-center flex-wrap">
               <div className="lg:w-1/2 w-full flex flex-col items-start justify-center gap-5">
                  <div className="text-xl md:text-3xl text-black dark:text-white">
                     Ready to{" "}
                     <LinkPreview url="https://buddhadebkoner.vercel.app" className="font-bold text-[#FF6900] dark:text-[#FF4500]">
                        Launch Your Dream Website?
                     </LinkPreview>{" "}
                     Let&apos;s make it happen!
                  </div>
                  <p className="text-[#6A7282] dark:text-gray-400 text-base md:text-xl">
                     Get started with our cutting-edge templates and powerful tools designed to elevate your SaaS product. Skip the hassle of boilerplate code and focus on building what truly matters to your business.
                  </p>
               </div>
               <div className="lg:w-1/2 w-full lg:h-full h-36 flex items-center lg:justify-center justify-start">
                  <Link
                     href="/contact-us"
                     className="bg-black dark:bg-white text-white dark:text-black rounded-full py-2 px-6 text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-300 transition-colors">
                     Contact Us
                  </Link>
               </div>
            </div>
         </div>



         {/* team details */}
         <div className="w-full bg-lightBgColor dark:bg-darkBgColor py-10 lg:py-20">
            <div className="container mx-auto px-4 lg:px-16">
               {/* Heading Section */}
               <div className="w-full text-center mb-10">
                  <h2 className="text-2xl lg:text-4xl font-semibold text-neutral-800 dark:text-white">
                     We Are
                     <span className="ml-2 text-blue-600 dark:text-blue-400">
                        <FlipWords words={words} />
                     </span>
                  </h2>
               </div>

               {/* Team Members Section */}
               <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
                  {teamMembers.map((member, index) => (
                     <UserBatch
                        key={index}
                        user={{
                           image: member.image,
                           name: member.name,
                           role: member.role,
                           note: member.note,
                        }}
                     />
                  ))}
               </div>
            </div>
         </div>


         {/* project showcase */}
         <div className="w-full bg-lightBarBgcolor dark:bg-darkBgColor py-10 lg:py-20">
            <div className="container mx-auto px-4">
               {/* Heading Section */}
               <div className="w-full text-center mb-10">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-800 dark:text-white">
                     I&apos;ve Delivered Some Cool Websites
                  </h2>
               </div>

               {/* Projects Display Section */}
               <div className="w-full h-fit flex flex-wrap gap-6 justify-center">
                  {projects.map((project, index) => (
                     <ThreeDCard
                        key={index}
                        cardData={{
                           title: project.title,
                           description: project.description,
                           imageSrc: project.imageSrc,
                           imageAlt: project.imageAlt,
                           tryNowLink: project.tryNowLink,
                           tryNowText: project.tryNowText,
                           orderNowText: project.orderNowText,
                        }}
                     />
                  ))}
               </div>
            </div>
         </div>

         {/* faq */}
         <div className="w-full h-fit flex flex-col px-5 pb-20 md:px-[10rem] lg:py-[10rem] bg-lightBgColor dark:bg-darkBgColor transition-colors duration-300">

            <h3 className="text-2xl md:text-4xl font-extrabold text-start text-black dark:text-white mb-12">
               Frequently Asked Questions
            </h3>

            <div className="space-y-8">
               {faqData.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-6">
                     <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full text-left flex justify-between items-center py-4 text-xl font-semibold text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition-all duration-300"
                     >
                        <span>{faq.question}</span>

                        <svg
                           className={`w-6 h-6 text-black dark:text-white transition-transform duration-300 ${openFAQIndex === index ? 'rotate-180' : ''
                              }`}
                           fill="none"
                           stroke="currentColor"
                           strokeWidth="2"
                           viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path>
                        </svg>
                     </button>

                     {/* Answer Section with smooth expand transition */}
                     <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openFAQIndex === index ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                           }`}
                     >
                        <div className="mt-4 text-black dark:text-gray-300 leading-relaxed text-base">
                           {faq.answer}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* Tech Showcase */}
         <div className="w-full bg-lightBarBgcolor dark:bg-darkBgColor py-10 lg:py-20">
            <div className="container mx-auto px-4">
               <div className="flex justify-center flex-wrap gap-6">
                  {techIcons.map((icon, index) => (
                     <div className="flex items-center gap-3" key={index}>
                        <Image
                           className="w-10 sm:w-12 md:w-16 lg:w-20"
                           src={icon.src}
                           alt={icon.alt}
                           width={50}
                           height={50}
                        />
                        <h1 className="text-gray-500 dark:text-gray-300 lg:text-2xl md:text-xl font-semibold">
                           {icon.alt}
                        </h1>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}


