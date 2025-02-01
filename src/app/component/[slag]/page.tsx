"use client";

import ShareComponent from "@/components/UiComponents/ShareComponent";
import { useParams } from "next/navigation";

// Define the shape of each component object
interface Component {
   content: React.ReactNode;
   code: string;
   uiName: string;
   codeFileName: string;
}

interface AllComponents {
   [key: string]: Component[];
}

export default function Page() {
   // Define your components array with the correct type
   const allComponents: AllComponents = {
      buttons: [
         {
            content: (
               <button className="px-6 py-2 rounded-lg font-medium bg-gray-900 text-white border-2 border-transparent hover:border-blue-500 hover:text-blue-500 transition duration-300 ease-in-out">
                  Glowing Border
               </button>
            ),
            code: ` <button className="px-6 py-2 rounded-lg font-medium bg-gray-900 text-white border-2 border-transparent hover:border-blue-500 hover:text-blue-500 transition duration-300 ease-in-out">
                     Glowing Border
                  </button>`,
            uiName: "Glowing Border Button",
            codeFileName: "button.jsx"
         },
         {
            content: (
               <button className="px-6 py-2 rounded-lg font-medium bg-pink-600 text-white relative overflow-hidden">
                  <span className="absolute left-0 top-0 w-full h-full bg-pink-500 transform translate-x-full group-hover:translate-x-0 transition duration-300 ease-in-out"></span>
                  <span className="relative">Slide In</span>
               </button>
            ),
            code: `<button className="px-6 py-2 rounded-lg font-medium bg-pink-600 text-white relative overflow-hidden">
                     <span className="absolute left-0 top-0 w-full h-full bg-pink-500 transform translate-x-full group-hover:translate-x-0 transition duration-300 ease-in-out"></span>
                     <span className="relative">Slide In</span>
                  </button>
`,
            uiName: "Slide-in Button",
            codeFileName: "button.jsx"
         },
         {
            content: (
               <button className="px-6 py-2 rounded-lg font-medium bg-purple-700 text-white shadow-lg transform active:translate-y-1 active:shadow-md transition duration-150 ease-in-out">
                  3D Pressed
               </button>
            ),
            code: `<button className="px-6 py-2 rounded-lg font-medium bg-purple-700 text-white shadow-lg transform active:translate-y-1 active:shadow-md transition duration-150 ease-in-out">
            3D Pressed
               </button>`,
            uiName: "3D Pressed Button",
            codeFileName: "button.jsx"
         },
      ],
   };

   // Get the 'slag' from params
   const { slag } = useParams<{ slag: string }>();

   // Ensure `slag` is valid before accessing allComponents
   const componentsToDisplay = allComponents[slag] || [];

   return (
      <div className="w-full h-[100vh] flex flex-col items-start pt-20 px-5 text-white overflow-auto">
         <h1 className="text-4xl font-bold">Components: copy and use</h1>
         <p className="text-lg mt-5">Different components you can copy and use.</p>

         <div className="w-full h-fit mt-10 flex flex-col gap-10">
            {/* Dynamically render ShareComponents based on the slag */}
            {componentsToDisplay.length > 0 ? (
               componentsToDisplay.map((component, index) => (
                  <ShareComponent
                     key={index}
                     content={component.content}
                     code={component.code}
                     uiName={component.uiName}
                     codeFileName={component.codeFileName}
                  />
               ))
            ) : (
               <p>No components found for the selected category.</p>
            )}
         </div>
      </div>
   );
}
