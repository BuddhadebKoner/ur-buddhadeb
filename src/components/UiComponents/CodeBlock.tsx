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
      <div className="mx-auto">
         <CodeBlock language="jsx" filename={codeFileName} code={code} />
      </div>
   );
}
