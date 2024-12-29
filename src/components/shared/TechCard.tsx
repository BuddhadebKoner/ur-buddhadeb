import { PinContainer } from "../ui/3d-pin";

export default function TechCard({
   tech,
}: {
   tech: {
      icon: string;
      iconAult: string;
      title: string;
      subTitle: string;
   };
}) {
   return (
      <PinContainer title={tech.title}>
         <div className="flex flex-col items-center justify-center rounded-xl p-6 w-[18rem] h-[18rem] shadow-lg transition-transform hover:scale-105">
            {/* Icon */}
            <div className="flex items-center justify-center w-16 h-16 bg-[#FF6900] rounded-full shadow-md">
               <img
                  className="w-10 h-10"
                  src={tech.icon}
                  alt={tech.iconAult}
               />
            </div>
            {/* Title */}
            <h3 className="font-medium text-xl text-center text-black mt-4">
               {tech.title}
            </h3>
            {/* Subtitle */}
            <p className="text-sm text-center text-[#6A7282] mt-2 leading-relaxed">
               {tech.subTitle}
            </p>
         </div>
      </PinContainer>
   );
}
