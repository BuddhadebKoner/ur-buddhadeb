"use client";

interface PreviewComponentProps {
   content: string;
}

export default function PreviewComponent({ content }: PreviewComponentProps) {
   console.log(typeof content);  

   return (
      <div
         className="flex gap-4"
         dangerouslySetInnerHTML={{ __html: content }}
      />
   );
}
