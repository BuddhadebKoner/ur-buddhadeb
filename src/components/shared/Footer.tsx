export default function Footer() {
   return (
      <footer className="w-full py-3 flex items-center justify-center border-t border-gray-300">
         <div className="container mx-auto flex items-center justify-center px-4 lg:px-16">
            <p className="text-xs">
               <span>© 2025 Buddhadeb Koner | All Rights Reserved | </span>
               <a
                  href="https://ui.aceternity.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-400"
                  title="Visit Aceternity UI for more information"
               >
                  aceternity/ui
               </a>
            </p>
         </div>
      </footer>
   );
}
