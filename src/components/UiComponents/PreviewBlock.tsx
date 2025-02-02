"use client";

import parse, { domToReact, HTMLReactParserOptions, DOMNode, Element } from "html-react-parser";
import { useMemo } from "react";

interface PreviewComponentProps {
   code: string;
}

export default function PreviewComponent({ code }: PreviewComponentProps) {
   console.log("Raw Content:", code);

   const jsxContent = useMemo(() => {
      const options: HTMLReactParserOptions = {
         replace: (domNode: DOMNode) => {
            if (domNode instanceof Element && domNode.attribs) {
               if ("class" in domNode.attribs) {
                  domNode.attribs.className = domNode.attribs.class;
                  delete domNode.attribs.class;
               }
               return domToReact(domNode.children as DOMNode[], options);
            }
         },
      };
      return parse(code, options);
   }, [code]);

   return <div className="w-fit flex flex-wrap gap-2">{jsxContent}</div>;
}