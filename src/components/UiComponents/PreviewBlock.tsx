"use client";

import parse, { domToReact } from "html-react-parser";
import { HTMLReactParserOptions } from "html-react-parser";
import { useMemo } from "react";

interface PreviewComponentProps {
   code: string;
}

export default function PreviewComponent({ code }: PreviewComponentProps) {
   console.log("Raw Content:", code);

   const jsxContent = useMemo(() => {
      const options: HTMLReactParserOptions = {
         replace: (domNode: any) => {
            if (domNode.attribs) {
               if (domNode.attribs.class) {
                  domNode.attribs.className = domNode.attribs.class;
                  delete domNode.attribs.class;
               }
               return domToReact(domNode.children, options);
            }
         },
      };
      return parse(code, options);
   }, [code]);

   return <div className="w-full">{jsxContent}</div>;
}
