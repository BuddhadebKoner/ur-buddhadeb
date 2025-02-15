"use client";

import { useState } from "react";
import { SignOutButton, useSignIn } from "@clerk/nextjs";
import Link from "next/link";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";

export default function SignIn() {
   const { isLoaded, signIn } = useSignIn();

   const [error, setError] = useState("");
   const [loading, setLoading] = useState(false);


   const handleOAuthSignIn = async (strategy: "oauth_google" | "oauth_github") => {
      if (!isLoaded) return;
      setLoading(true);
      try {
         await signIn.authenticateWithRedirect({
            strategy,
            redirectUrl: "/",
            redirectUrlComplete: "/",
         });
      } catch (err: unknown) {
         if (err instanceof Error) {
            setError(err?.message || "OAuth sign-in failed. Please try again.");
         } else {
            setError("OAuth sign-in failed. Please try again.");
         }
      } finally {
         setLoading(false);
      }
   };


   return (
      <div className="w-full min-h-screen flex justify-center items-center relative bg-lightBgColor dark:bg-darkBgColor">
         <div className="max-w-lg w-full p-6 rounded-lg relative overflow-hidden border-2 border-gray-300 dark:border-gray-700">
            {loading && (
               <div className="absolute inset-0 bg-white/30 dark:bg-black/30 backdrop-blur-md flex items-center justify-center z-10">
                  <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">Loading...</span>
               </div>
            )}

            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 text-center">
               Sign in to your account
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-center mt-2">
               Welcome back! Please sign in to continue.
            </p>

            <div className="mt-6 space-y-4">
               <>
                  <div className="space-y-4">
                     <button
                        className="w-full h-10 flex items-center justify-center bg-gray-100 dark:bg-zinc-900 text-black dark:text-white rounded-md hover:bg-gray-200 dark:hover:bg-zinc-800 transition"
                        type="button"
                        onClick={() => handleOAuthSignIn("oauth_google")}
                        disabled={loading}
                     >
                        <IconBrandGoogle className="mr-2" />
                        {"Continue with Google"}
                     </button>
                     <button
                        className="w-full h-10 flex items-center justify-center bg-gray-100 dark:bg-zinc-900 text-black dark:text-white rounded-md hover:bg-gray-200 dark:hover:bg-zinc-800 transition"
                        type="button"
                        onClick={() => handleOAuthSignIn("oauth_github")}
                        disabled={loading}
                     >
                        <IconBrandGithub className="mr-2" />
                        {"Continue with GitHub"}
                     </button>

                     {/* show errors */}
                     {error && (
                        <>
                           <div className="text-red-500 text-sm text-start">{error}</div>
                           {
                              error === "You're currently in single session mode. You can only be signed into one account at a time." && (
                                 <div className="text-center mt-4">
                                    <SignOutButton>
                                       <button className="w-full h-10 flex items-center justify-center bg-gray-100 dark:bg-zinc-900 text-black dark:text-white rounded-md hover:bg-gray-200 dark:hover:bg-zinc-800 transition">
                                          Sign Out
                                       </button>
                                    </SignOutButton>
                                 </div>
                              )
                           }

                        </>
                     )}
                  </div>
               </>
               <p className="text-center mt-4 text-sm">
                  Don&apos;t have an account? <Link href="/sign-up" className="text-blue-600 hover:underline">Register</Link>
               </p>
            </div>
         </div>
      </div>
   );
}
