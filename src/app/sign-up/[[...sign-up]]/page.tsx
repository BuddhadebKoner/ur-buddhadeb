"use client";

import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

// imports from clerk
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUp() {
   // hooks
   const { isLoaded, signUp } = useSignUp();
   const [emailAddress, setEmailAddress] = useState("");
   const [username, setUsername] = useState("");
   const [pendingVerification, setPendingVerification] = useState(false);
   const [code, setCode] = useState("");
   const [error, setError] = useState("");
   const [loading, setLoading] = useState(false);

   const router = useRouter();

   if (!isLoaded) {
      return null;
   }

   // handle submit
   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!isLoaded || loading) {
         return;
      }

      setLoading(true);
      try {
         await signUp.create({
            emailAddress,
            username,
         });

         await signUp.prepareEmailAddressVerification({
            strategy: "email_code",
         });

         setPendingVerification(true);
         setError("");
      } catch (error: any) {
         console.error(error);
         setError(error.errors[0]?.message || "An error occurred during sign-up.");
      } finally {
         setLoading(false);
      }
   };

   // handle verification
   const handleVerification = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!isLoaded || loading) {
         return;
      }

      setLoading(true);
      try {
         const completeSignUp = await signUp.attemptEmailAddressVerification({
            code,
         });

         if (completeSignUp.status === "complete") {
            router.push("/");
         } else {
            setError("Invalid code, please try again.");
         }
      } catch (error: any) {
         console.error(error);
         setError("Failed to verify. Please try again.");
      } finally {
         setLoading(false);
      }
   };

   return (
      <div className="max-w-md w-full mx-auto p-6 bg-white dark:bg-black rounded-lg lg:shadow-md">
         <h2 className="lg:text-2xl text-xl font-bold text-neutral-800 dark:text-neutral-200 text-center">
            Secure Access Made Simple
         </h2>
         <p className="text-neutral-600 dark:text-neutral-400 text-center mt-2">
            This website is not in production yet. Please wait for the official release.
         </p>

         {!pendingVerification ? (
            <form className="mt-6" onSubmit={handleSubmit}>
               <div className="space-y-4">
                  <button
                     className="w-full h-10 flex items-center justify-center bg-gray-100 dark:bg-zinc-900 text-black dark:text-white rounded-md hover:bg-gray-200 dark:hover:bg-zinc-800 transition"
                     type="button"
                     disabled={loading}
                  >
                     <IconBrandGithub className="mr-2" />
                     Continue with GitHub
                  </button>
                  <button
                     className="w-full h-10 flex items-center justify-center bg-gray-100 dark:bg-zinc-900 text-black dark:text-white rounded-md hover:bg-gray-200 dark:hover:bg-zinc-800 transition"
                     type="button"
                     disabled={loading}
                  >
                     <IconBrandGoogle className="mr-2" />
                     Continue with Google
                  </button>
               </div>

               <div className="flex items-center my-6">
                  <div className="flex-grow h-px bg-neutral-300 dark:bg-neutral-700"></div>
                  <span className="mx-4 text-neutral-600 dark:text-neutral-400 text-sm">
                     OR
                  </span>
                  <div className="flex-grow h-px bg-neutral-300 dark:bg-neutral-700"></div>
               </div>

               <div className="mb-4">
                  <Label htmlFor="username">Username</Label>
                  <Input
                     id="username"
                     placeholder="Enter your username"
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                     type="text"
                     disabled={loading}
                  />
               </div>
               <div className="mb-4">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                     id="email"
                     placeholder="Enter your email"
                     value={emailAddress}
                     onChange={(e) => setEmailAddress(e.target.value)}
                     type="email"
                     disabled={loading}
                  />
               </div>
               {/* Add Clerk CAPTCHA */}
               <div id="clerk-captcha" className="mb-4 w-full"></div>
               {error && <p className="text-red-500 text-sm">{error}</p>}
               <button
                  className={`w-full h-10 bg-blue-600 text-white rounded-md font-medium ${loading ? "cursor-not-allowed opacity-50" : "hover:bg-blue-700 transition"
                     }`}
                  type="submit"
                  disabled={loading}
               >
                  {loading ? "Processing..." : "Sign Up"}
               </button>

               <p className="text-center mt-4 text-sm">
                  Already have an account?{" "}
                  <Link href="/sign-in" className="text-blue-600 hover:underline">
                     Sign In
                  </Link>
               </p>
            </form>
         ) : (
            <form className="mt-6" onSubmit={handleVerification}>
               <div className="mb-4">
                  <Label htmlFor="otp">Verification Code</Label>
                  <Input
                     id="otp"
                     placeholder="Enter the verification code"
                     value={code}
                     onChange={(e) => setCode(e.target.value)}
                     type="text"
                     disabled={loading}
                  />
               </div>
               {error && <p className="text-red-500 text-sm">{error}</p>}
               <button
                  className={`w-full h-10 bg-green-600 text-white rounded-md font-medium ${loading ? "cursor-not-allowed opacity-50" : "hover:bg-green-700 transition"
                     }`}
                  type="submit"
                  disabled={loading}
               >
                  {loading ? "Verifying..." : "Verify Code"}
               </button>
            </form>
         )}
      </div>
   );
}
