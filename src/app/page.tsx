"use client";
import React from "react";
import Hero from "@/components/shared/Hero";
import TechCard from "@/components/shared/TechCard";
import { Compare } from "@/components/ui/compare";
import { LinkPreview } from "@/components/ui/link-preview";
import { FlipWords } from "@/components/ui/flip-words";
import UserBatch from "@/components/shared/UserBatch";
import { ThreeDCard } from "@/components/shared/Card";
import Image from "next/image";

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
      role: "Server Manager",
      note: "Optimizing servers to ensure seamless performance and reliability ⚙️.",
   },
   {
      image: "https://qrattender.rajislab.com/assets/team/DEVABRATA-PATRA.jpeg",
      name: "Devabrata Patra",
      role: "Designer",
      note: "Designing visually stunning interfaces with focus on user experience 🎨.",
   },
   {
      image: "https://cloud.appwrite.io/v1/storage/buckets/66f8e10b0034b56b85be/files/670e01620001752ade56/view?project=66f8cb12003c2ead11e2&project=66f8cb12003c2ead11e2&",
      name: "Rahul Tantubay",
      role: "Product Manager",
      note: "Leading product strategy to align with user needs and goals 🚀.",
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



export default function Page() {
   return (
      <div className="w-full flex flex-col">
         {/* Hero Section */}
         <div className="w-full bg-[#F9FAFB] py-20 lg:py-10">
            <div className="container mx-auto flex justify-between items-center px-4 lg:px-16">
               <Hero />
               <div className="p-4 border rounded-3xl hidden lg:block">
                  <Compare
                     firstImage="https://cloud.appwrite.io/v1/storage/buckets/66f8e10b0034b56b85be/files/6772e34600021b7c9b90/view?project=66f8cb12003c2ead11e2&project=66f8cb12003c2ead11e2&"
                     secondImage="https://cloud.appwrite.io/v1/storage/buckets/66f8e10b0034b56b85be/files/6773109d001dbbc6d223/view?project=66f8cb12003c2ead11e2&project=66f8cb12003c2ead11e2&"
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
         <div className="w-full bg-[#F9FAFB] py-20 lg:py-40">
            <div className="container mx-auto px-4 lg:px-16 flex justify-between items-center flex-wrap">
               <div className="lg:w-1/2 w-full flex flex-col items-start justify-center gap-5">
                  <div className="text-xl md:text-3xl">
                     Ready to{" "}
                     <LinkPreview url="https://buddhadebkoner.rajislab.com" className="font-bold text-[#FF6900]">
                        Launch Your Dream Website?
                     </LinkPreview>{" "}
                     Let&apos;s make it happen!
                  </div>
                  <p className="text-[#6A7282] text-base md:text-xl">
                     Get started with our cutting-edge templates and powerful tools designed to elevate your SaaS product. Skip the hassle of boilerplate code and focus on building what truly matters to your business.
                  </p>
               </div>
               <div className="lg:w-1/2 w-full lg:h-full h-36 flex items-center lg:justify-center justify-start">
                  <button className="bg-black text-white rounded-full py-2 px-6 text-sm font-semibold hover:bg-gray-800 transition-colors">
                     Contact Us
                  </button>
               </div>
            </div>
         </div>


         {/* team details */}
         <div className="w-full bg-white py-10 lg:py-20">
            <div className="container mx-auto px-4 lg:px-16">
               {/* Heading Section */}
               <div className="w-full text-center mb-10">
                  <h2 className="text-2xl lg:text-4xl font-semibold text-neutral-800">
                     We Are
                     <span className="ml-2 text-blue-600">
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
         <div className="w-full bg-[#F9FAFB] py-10 lg:py-20">
            <div className="container mx-auto px-4 flex justify-evenly items-center flex-wrap">
               {/* Heading Section */}
               <div className="w-full text-center mb-10">
                  <h2 className="text-2xl lg:text-4xl font-semibold text-neutral-800">
                     I&apos;ve Delivered Some Cool Websites
                  </h2>
               </div>

               {/* Projects Display Section */}
               <div className="w-full flex justify-evenly items-center flex-wrap">
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

         {/* Tech Showcase */}
         <div className="w-full bg-[#F9FAFB] py-10 lg:py-20">
            <div className="container mx-auto px-4">
               <div className="flex justify-evenly items-center flex-wrap gap-4">
                  {techIcons.map((icon, index) => (
                     <div className="flex items-center gap-2" key={index}>
                        <Image
                           key={index}
                           className="w-9 sm:w-10 md:w-20 lg:w-22"
                           src={icon.src}
                           alt={icon.alt}
                           width={0}
                           height={0}
                        />
                        <h1 className="text-[#A8A8A8] lg:text-2xl md:text-xl font-semibold">{icon.alt}</h1>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}

