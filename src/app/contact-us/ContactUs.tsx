export default function ContactUs() {
   return (
      <>
         <div className="w-full min-h-screen flex flex-col py-16 dark:bg-darkBgColor">
            {/* Additional Info Section */}
            <div className="w-fit mx-10 mt-8 p-6 border-2 border-gray-300 dark:border-gray-700 rounded-xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg shadow-lg transition-all duration-300">
               <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Why Choose Us?</h2>

               <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                     <span className="text-green-600 dark:text-green-400 font-bold text-lg">✔</span>
                     <p className="text-gray-700 dark:text-gray-300">
                        <strong>Experienced Developers:</strong> Our team has built 100+ successful websites.
                     </p>
                  </div>

                  <div className="flex items-start space-x-3">
                     <span className="text-green-600 dark:text-green-400 font-bold text-lg">✔</span>
                     <p className="text-gray-700 dark:text-gray-300">
                        <strong>Custom Solutions:</strong> Tailored to fit your unique business needs.
                     </p>
                  </div>

                  <div className="flex items-start space-x-3">
                     <span className="text-green-600 dark:text-green-400 font-bold text-lg">✔</span>
                     <p className="text-gray-700 dark:text-gray-300">
                        <strong>SEO & Performance Optimization:</strong> Get a fast and search-friendly website.
                     </p>
                  </div>

                  <div className="flex items-start space-x-3">
                     <span className="text-green-600 dark:text-green-400 font-bold text-lg">✔</span>
                     <p className="text-gray-700 dark:text-gray-300">
                        <strong>Continuous Support:</strong> We offer long-term assistance and updates.
                     </p>
                  </div>
               </div>

               <div className="border-t border-gray-300 dark:border-gray-700 my-4"></div>

               <div className="flex flex-col lg:flex-row items-center justify-between">
                  <p className="text-gray-700 dark:text-gray-300 text-center lg:text-left">
                     Still have questions? Let’s discuss your project.
                  </p>
                  <button className="mt-4 lg:mt-0 bg-black dark:bg-white text-white dark:text-black py-2 px-6 rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                     Get in Touch
                  </button>
               </div>
            </div>
         </div>
      </>
   );
}
