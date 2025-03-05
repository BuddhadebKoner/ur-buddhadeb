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
      portfolio: "https://buddhadebkoner.vercel.app",
   },
];

{/* Projects Section */ }
const projects = [
   {
      title: "Blog Website",
      description: "A modern blog website with a clean, minimalist design. Features include user authentication, comments, and likes.",
      imageSrc: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1741078414/mern-blog/blogs/bkdijkurwg0tawqboovl.png",
      imageAlt: "Blog Website Screenshot",
      tryNowLink: "https://blog-app-sandy-sigma.vercel.app/",
      tryNowText: "Try now →",
      orderNowText: "Order Now",
   },
   {
      title: "Social Media App",
      description: "A dynamic social media app designed to connect users and share moments. With advanced features for user interaction.",
      imageSrc: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1740969977/mern-blog/tdtyjvq7yq475tpwuy1a.png",
      imageAlt: "Social Media App Screenshot",
      tryNowLink: "https://kochugram-com.vercel.app/",
      tryNowText: "Try now →",
      orderNowText: "Order Now",
   },
   {
      title: "Made Portfolio Like This",
      description: "Showcasing custom portfolios designed to impress. A modern, responsive design for personal branding or professional use.",
      imageSrc: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1740965664/mern-blog/gxk6t1nzkljiswnsccwl.png",
      imageAlt: "Portfolio Website Screenshot",
      tryNowLink: "https://buddhadebkoner.vercel.app/",
      tryNowText: "Try now →",
      orderNowText: "Order Now",
   },
   {
      title: "Made Portfolio Like This",
      description: "Showcasing custom portfolios designed to impress. A modern, responsive design for personal branding or professional use.",
      imageSrc: "https://res.cloudinary.com/dsfztnp9x/image/upload/v1740965664/mern-blog/gxk6t1nzkljiswnsccwl.png",
      imageAlt: "Portfolio Website Screenshot",
      tryNowLink: "https://buddhadebkoner.vercel.app/",
      tryNowText: "Try now →",
      orderNowText: "Order Now",
   },
];



const faqData = [
   {
      question: "What makes your website development service unique?",
      answer:
         "I focus on high-performance, SEO-friendly, and fully responsive designs with modern technologies like React, Next.js, and MERN stack. Every project is built with clean and scalable code.",
   },
   {
      question: "How transparent is your payment process?",
      answer:
         "I ensure complete transparency in payments. You will receive a detailed breakdown of costs upfront, and payments are processed securely with milestone-based payments for larger projects.",
   },
   {
      question: "Can I see examples of websites you have built?",
      answer:
         "Yes, I have a showcase of completed projects where you can explore various designs, animations, and functionalities. These examples demonstrate my expertise in web development.",
   },
   {
      question: "Do you provide custom website solutions?",
      answer:
         "Absolutely! Every website is tailored to meet the client's specific needs, whether it's an e-commerce platform, a portfolio, or a business website.",
   },
   {
      question: "How long does it take to build a website?",
      answer:
         "The timeline depends on the complexity of the website. A basic website takes around 5-7 days, while complex projects may take 2-4 weeks. A precise timeline is provided after discussion.",
   },
   {
      question: "Do you offer post-launch support and maintenance?",
      answer:
         "Yes! I provide ongoing support, including updates, bug fixes, and performance optimization to ensure your website runs smoothly.",
   },
   {
      question: "Will my website be mobile-friendly and SEO optimized?",
      answer:
         "Yes, every website is designed to be fully responsive and SEO-friendly, ensuring fast loading times, proper indexing, and great user experience across all devices.",
   },
   {
      question: "What technologies do you use for web development?",
      answer:
         "I primarily use React, Next.js, Express.js, MongoDB, and Node.js. For animations, I implement GSAP, Framer Motion, and Lottie to enhance user experience.",
   },
   {
      question: "Can I update the content on my website myself?",
      answer:
         "Yes, if you opt for a CMS-based website, I provide easy-to-use admin panels where you can manage content without any coding knowledge.",
   },
   {
      question: "How do I get started with ordering a website?",
      answer:
         "Simply contact me through my website, discuss your requirements, and I'll provide a tailored proposal. Once approved, we proceed with development step by step.",
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
         <div className="w-full bg-lightBgColor dark:bg-darkBgColor py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
               <Hero />
            </div>
         </div>

         {/* TechCard Section */}
         <div className="w-full bg-lightBgColor dark:bg-darkBgColor py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
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
         </div>

         {/* Main Links Section */}
         <div className="w-full bg-lightBarBgcolor dark:bg-darkBgColor py-12 sm:py-16 md:py-20 lg:py-32 xl:py-40">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
               <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                  <div className="lg:w-1/2 w-full flex flex-col items-start justify-center space-y-4 sm:space-y-5">
                     <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-black dark:text-white">
                        Ready to{" "}
                        <LinkPreview
                           url="https://buddhadebkoner.vercel.app"
                           className="font-bold text-[#FF6900] dark:text-[#FF4500] text-base sm:text-lg md:text-xl lg:text-2xl"
                        >
                           Launch Your Dream Website?
                        </LinkPreview>{" "}
                        Let&apos;s make it happen!
                     </div>
                     <p className="text-sm sm:text-base md:text-lg text-[#6A7282] dark:text-gray-400">
                        Get started with our cutting-edge templates and powerful tools designed to elevate your SaaS product. Skip the hassle of boilerplate code and focus on building what truly matters to your business.
                     </p>
                  </div>
                  <div className="lg:w-1/2 w-full flex items-center justify-start lg:justify-center">
                     <Link
                        href="/contact-us"
                        className="bg-black dark:bg-white text-white dark:text-black rounded-full py-2 px-4 sm:px-6 text-xs sm:text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-300 transition-colors"
                     >
                        Contact Us
                     </Link>
                  </div>
               </div>
            </div>
         </div>

         {/* Team Details */}
         <div className="w-full bg-lightBgColor dark:bg-darkBgColor py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
               {/* Heading Section */}
               <div className="w-full text-center mb-8 sm:mb-10 md:mb-12">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-800 dark:text-white">
                     We Are{" "}
                     <span className="ml-1 sm:ml-2 text-blue-600 dark:text-blue-400">
                        <FlipWords words={words} />
                     </span>
                  </h2>
               </div>

               {/* Team Members Section */}
               <div className="w-full flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                  {teamMembers.map((member, index) => (
                     <UserBatch
                        key={index}
                        user={{
                           portfolio: member.portfolio,
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

         {/* Project Showcase */}
         <div className="w-full bg-lightBarBgcolor dark:bg-darkBgColor py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
               {/* Heading Section */}
               <div className="w-full text-center mb-8 sm:mb-10 md:mb-12">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-neutral-800 dark:text-white">
                     I&apos;ve Delivered Some Cool Websites
                  </h2>
               </div>

               {/* Projects Display Section */}
               <div className="w-full h-fit flex flex-col">
                  <div className="w-full h-fit flex flex-row flex-wrap gap-4 sm:gap-5 md:gap-6 lg:gap-8 justify-center">
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
                  {/* Show More */}
                  <Link
                     href="/store"
                     className="text-sm sm:text-base md:text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors"
                  >
                     Show More
                  </Link>
               </div>
            </div>
         </div>

         {/* FAQ Section */}
         <div className="w-full px-4 sm:px-6 md:px-10 lg:px-[6rem] xl:px-[10rem] py-12 sm:py-16 md:py-20 lg:py-24 bg-lightBgColor dark:bg-darkBgColor">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-start text-black dark:text-white mb-8 sm:mb-10 md:mb-12">
               Frequently Asked Questions
            </h3>

            <div className="space-y-4 sm:space-y-6 md:space-y-8">
               {faqData.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4 sm:pb-5 md:pb-6">
                     <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full text-left flex justify-between items-center py-3 text-base sm:text-lg md:text-xl font-semibold text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition-all duration-300"
                     >
                        <span>{faq.question}</span>

                        <svg
                           className={`w-4 sm:w-5 md:w-6 text-black dark:text-white transition-transform duration-300 ${openFAQIndex === index ? 'rotate-180' : ''}`}
                           fill="none"
                           stroke="currentColor"
                           strokeWidth="2"
                           viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path>
                        </svg>
                     </button>

                     <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openFAQIndex === index ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}
                     >
                        <div className="mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm md:text-base text-black dark:text-gray-300 leading-relaxed">
                           {faq.answer}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* Tech Showcase */}
         <div className="w-full bg-lightBarBgcolor dark:bg-darkBgColor py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
               <div className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 items-center">
                  {techIcons.map((icon, index) => (
                     <div className="flex items-center gap-2 sm:gap-3" key={index}>
                        <Image
                           className="w-8 sm:w-10 md:w-12 lg:w-16 xl:w-20"
                           src={icon.src}
                           alt={icon.alt}
                           width={50}
                           height={50}
                        />
                        <h1 className="text-xs sm:text-sm md:text-base lg:text-xl text-gray-500 dark:text-gray-300 font-semibold">
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


