"use client";

import { CodeBlock } from "../ui/code-block";

export default function CodeComponent({ code, codeFileName }: { code: string; codeFileName: string }) {

   return (
      <div className="max-w-3xl mx-auto w-full">
         <CodeBlock
            language="jsx"
            filename={codeFileName}
            code={code}
         />
      </div>
   );
}
