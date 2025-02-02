"use client";

import { CodeBlock } from "../ui/code-block";

interface CodeComponentProps {
   code: string;
   codeFileName: string;
}

export default function CodeComponent({
   code,
   codeFileName,
}: CodeComponentProps) {
   return (
      <div className="max-w-3xl mx-auto w-full">
         <CodeBlock language="jsx" filename={codeFileName} code={code} />
      </div>
   );
}
