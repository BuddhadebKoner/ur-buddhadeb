import { PinContainer } from "../ui/3d-pin";
import Image from "next/image";

export default function TechCard({
   tech,
}: {
   tech: {
      icon: string;
      iconAlt: string;
      title: string;
      subTitle: string;
   };
}) {
   return (
      <PinContainer title={tech.title}>
         <div className="flex flex-col items-center justify-center rounded-xl p-6 w-[18rem] h-[18rem] shadow-lg transition-transform hover:scale-105 bg-white dark:bg-[#1E1E1E]">
            {/* Icon */}
            <div className="flex items-center justify-center w-16 h-16 bg-[#FF6900] dark:bg-[#FF4500] rounded-full shadow-md">
               <Image
                  src={tech.icon}
                  alt={tech.iconAlt}
                  width={40}
                  height={40}
               />
            </div>
            {/* Title */}
            <h3 className="font-medium text-xl text-center text-black dark:text-white mt-4">
               {tech.title}
            </h3>
            {/* Subtitle */}
            <p className="text-sm text-center text-[#6A7282] dark:text-gray-400 mt-2 leading-relaxed">
               {tech.subTitle}
            </p>
         </div>
      </PinContainer>
   );
}
