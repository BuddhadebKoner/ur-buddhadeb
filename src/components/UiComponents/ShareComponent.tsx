"use client";

import { useState } from "react";
import PreviewComponent from "./PreviewBlock";
import CodeComponent from "./CodeBlock";

export default function ShareComponent({
   code,
   uiName,
   codeFileName,
}: {
   code: string;
   uiName: string;
   codeFileName: string;
}) {
   const [activeTab, setActiveTab] = useState("preview");

   return (
      <div className="w-full max-w-screen-lg mx-auto flex flex-col p-4 rounded-2xl bg-transparent">
         <h1 className="text-2xl font-bold mb-6 text-white">
            <span className="hover:text-blue-300 cursor-pointer">#</span> {uiName}
         </h1>
         <div className="w-full lg:w-[60rem] md:w-[40rem] sm:w-[30rem] max-w-full flex flex-col gap-4 border-2 border-dashed border-white rounded-xl p-5">
            <div className="flex flex-wrap gap-4 mb-2">
               <button
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${activeTab === "preview"
                        ? "bg-gray-200 text-gray-900"
                        : "text-white"
                     }`}
                  onClick={() => setActiveTab("preview")}
               >
                  Preview
               </button>
               <button
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${activeTab === "code"
                        ? "bg-gray-200 text-gray-900"
                        : "text-white shadow-md"
                     }`}
                  onClick={() => setActiveTab("code")}
               >
                  {codeFileName}
               </button>
            </div>
            <div className="rounded-xl w-full text-center">
               {activeTab === "preview" ? (
                  <PreviewComponent code={code} />
               ) : (
                  <CodeComponent code={code} codeFileName={codeFileName} />
               )}
            </div>
         </div>
      </div>
   );
}
