import { Cover } from "../ui/cover";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
const words = [
   {
      text: "Faster",
      className: "text-[#FF6900]",
   },
   {
      text: "Than",
      className: "text-[#FF6900]",
   },
   {
      text: "Ever",
      className: "text-[#FF6900]",
   }
];
export default function Hero() {
   return (
      <div className="w-full sm:w-3/4 lg:w-1/2 flex flex-col justify-center items-start gap-1 px-4">
         <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10182]">
            Build Your <Cover>Website</Cover>
         </h1>
         <TypewriterEffectSmooth words={words} />
         <p className="text-[#6A7282] text-base sm:text-lg lg:text-xl mt-3 lg:mt-5">
            Launch your SaaS product in record time with our powerful, ready-to-use template. Packed with modern technologies and essential integrations.
         </p>
         <button className="bg-black text-white rounded-full py-2 px-6 text-sm font-semibold hover:bg-gray-800 transition-colors mt-5">
            Build Now
         </button>
      </div>
   );
}
