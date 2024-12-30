import { Cover } from "../ui/cover";
import { LinkPreview } from "../ui/link-preview";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

const words = [
   { text: "Creative", className: "text-[#FF6900]" },
   { text: "Flexible", className: "text-[#FF6900]" },
   { text: "Simple", className: "text-[#FF6900]" },
];


export default function Hero() {
   return (
      <div className="w-full sm:w-3/4 lg:w-1/2 flex flex-col justify-center items-start gap-1 px-4">
         <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10182]">
            Transform Your <Cover>Ideas</Cover> into Stunning Websites
         </h1>
         <TypewriterEffectSmooth words={words} />
         <div className="text-[#6A7282] text-base sm:text-lg lg:text-xl mt-3 lg:mt-5">
            Empower your vision with expertly crafted websites. From cutting-edge design to seamless functionality, we deliver tailored web solutions for businesses of all sizes. Follow me on{" "}
            <LinkPreview url="https://github.com/BuddhadebKoner" className="font-bold ">
               Github
            </LinkPreview>
         </div>
         <button className="bg-black text-white rounded-full py-2 px-6 text-sm font-semibold hover:bg-gray-800 transition-colors mt-5">
            Get Started
         </button>
      </div>
   );
}
