"use client";

import { useState } from "react";
import PreviewComponent from "./PreviewBlock";
import CodeComponent from "./CodeBlock";

export default function ShareComponent({
   content,
   code,
   uiName,
   codeFileName,
}: {
   content: React.ReactNode;
   code: string;
   uiName: string;
   codeFileName: string;
}) {
   const [activeTab, setActiveTab] = useState("preview");

   return (
      <div className="w-fit flex flex-col p-4 rounded-2xl bg-transparent">
         <h1 className="text-2xl font-bold mb-6 text-white"># {uiName}</h1>
         <div className="w-full flex flex-col gap-4 border-2 border-dashed border-white rounded-xl p-5">
            <div className="flex gap-4 mb-6">
               <button
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${activeTab === "preview" ? " bg-gray-200 text-gray-900" : "text-white"}`}
                  onClick={() => setActiveTab("preview")}
               >
                  Preview
               </button>
               <button
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${activeTab === "code" ? " bg-gray-200 text-gray-900" : "text-white shadow-md"}`}
                  onClick={() => setActiveTab("code")}
               >
                  {codeFileName}
               </button>
            </div>

            <div className="rounded-xl w-full text-center">
               {activeTab === "preview" ? (
                  <PreviewComponent>
                     <div className="w-full h-full">
                        {content}
                     </div>
                  </PreviewComponent>
               ) : (
                  <CodeComponent codeFileName={codeFileName} code={code} />
               )}
            </div>
         </div>
      </div>
   );
}
