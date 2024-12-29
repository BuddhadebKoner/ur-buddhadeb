import Link from "next/link";

export default function Navbar() {
   return (
      <div className="w-full py-3 flex items-center justify-between border-b border-gray-300 bg-[#F9FAFB]">
         <div className="container mx-auto flex items-center justify-between px-4 lg:px-16">
            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-3">
               <img
                  width={40}
                  height={40}
                  className="rounded-full"
                  src="/buddhadeb.png"
                  alt="logo"
               />
               <h1 className="text-2xl font-light text-gray-800">Ur Buddhadeb</h1>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center space-x-6">
               <Link
                  href="/pricing"
                  className="text-lg font-light text-gray-700 hover:text-gray-900 transition duration-200"
               >
                  Pricing
               </Link>
               <Link
                  href="/sign-up"
                  className="text-lg font-light bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition duration-200"
               >
                  Sign Up
               </Link>
            </div>
         </div>
      </div>
   );
}
