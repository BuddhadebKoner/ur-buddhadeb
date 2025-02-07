export default function Footer() {
   return (
      <footer className="w-full py-4 flex items-center justify-center border-t border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-[#121212]">
         <div className="container mx-auto flex items-center justify-center px-4 lg:px-16">
            <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
               <span>© 2025 Buddhadeb Koner | All Rights Reserved | </span>
               <a
                  href="https://ui.aceternity.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-500 dark:text-blue-400 hover:underline"
                  title="Visit Aceternity UI for more information"
               >
                  aceternity/ui
               </a>
            </p>
         </div>
      </footer>
   );
}
