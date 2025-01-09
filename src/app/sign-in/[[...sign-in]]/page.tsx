"use client";

import { useState } from "react";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// clerk imports for signin 
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";


export default function signIn() {
   // hooks
   const { isLoaded, signIn } = useSignIn();
   const [emailAddress, setEmailAddress] = useState();
   const [pendingVerification, setPendingVerification] = useState(false);
   const [code, setCode] = useState("");
   const [error, setError] = useState("");

   const router = useRouter();


   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log("Sign-in form submitted");
   };

   return (
      <div className="max-w-md w-full mx-auto p-6 bg-white dark:bg-black rounded-lg lg:shadow-md">
         <h2 className="lg:text-2xl text-xl font-bold text-neutral-800 dark:text-neutral-200 text-center">
            Secure Access Made Simple
         </h2>
         <p className="text-neutral-600 dark:text-neutral-400 text-center mt-2">
            this website is not in production yet. Please wait for the official release.
         </p>

         <form className="mt-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
               <button
                  className="w-full h-10 flex items-center justify-center bg-gray-100 dark:bg-zinc-900 text-black dark:text-white rounded-md hover:bg-gray-200 dark:hover:bg-zinc-800 transition"
                  type="button"
               >
                  <IconBrandGithub className="mr-2" />
                  Continue with GitHub
               </button>
               <button
                  className="w-full h-10 flex items-center justify-center bg-gray-100 dark:bg-zinc-900 text-black dark:text-white rounded-md hover:bg-gray-200 dark:hover:bg-zinc-800 transition"
                  type="button"
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
               <Label htmlFor="email">Email Address</Label>
               <Input id="email" placeholder="Enter your email" type="email" />
            </div>
            <button
               className="w-full h-10 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
               type="submit"
            >
               Sign In
            </button>

            <p className="text-center mt-4 text-sm">
               Don&apos;t have an account?{" "}
               <Link href={'/sign-up'} className="text-blue-600 hover:underline">
                  Register
               </Link>
            </p>
         </form>
      </div>
   );
}
