"use client";

// PreviewComponent
export default function PreviewComponent({ children }: { children: React.ReactNode }) {
   return (
      <div className="flex gap-4">
         {children}
      </div>
   );
}
