"use client";

import { useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";

export default function SignIn() {
   const { isLoaded, signIn } = useSignIn();
   const [emailAddress, setEmailAddress] = useState("");
   const [pendingVerification, setPendingVerification] = useState(false);
   const [code, setCode] = useState(["", "", "", "", "", ""]);
   const [error, setError] = useState("");
   const [loading, setLoading] = useState(false); 
   const router = useRouter();

   const handleEmailSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!isLoaded) return;

      setLoading(true);
      try {
         if (pendingVerification) {
            const verificationCode = code.join("");
            await signIn.attemptFirstFactor({
               strategy: "email_code",
               code: verificationCode,
            });
            router.push("/");
         } else {
            await signIn.create({
               identifier: emailAddress,
               strategy: "email_code",
            });
            setPendingVerification(true);
         }
      } catch (err: unknown) {
         if (err instanceof Error && "errors" in err) {
            const customError = err as { errors: { message: string }[] };
            setError(customError.errors[0]?.message || "Something went wrong. Please try again.");
         } else if (err instanceof Error) {
            setError(err.message || "Something went wrong. Please try again.");
         } else {
            setError("An unexpected error occurred. Please try again.");
         }
      } finally {
         setLoading(false);
      }
   };

   const handleOAuthSignIn = async (strategy: "oauth_google" | "oauth_github") => {
      if (!isLoaded) return;

      setLoading(true); // Start loading
      try {
         await signIn.authenticateWithRedirect({
            strategy,
            redirectUrl: "/sso-callback",
            redirectUrlComplete: "/",
         });
      } catch (err: unknown) {
         if (err instanceof Error && "errors" in err) {
            const customError = err as { errors: { message: string }[] };
            setError(customError.errors[0]?.message || "OAuth sign-in failed. Please try again.");
         } else if (err instanceof Error) {
            setError(err.message || "OAuth sign-in failed. Please try again.");
         } else {
            setError("An unexpected error occurred. Please try again.");
         }
      } finally {
         setLoading(false); 
      }
   };

   const handleCodeChange = (value: string, index: number) => {
      const newCode = [...code];
      newCode[index] = value.slice(-1);
      setCode(newCode);
      if (value && index < code.length - 1) {
         document.getElementById(`code-${index + 1}`)?.focus();
      }
   };

   return (
      <div className="w-full h-[80vh] flex justify-center items-center">
         <div className="max-w-md w-full mx-auto p-6 bg-white dark:bg-black rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 text-center">
               Secure Access Made Simple
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-center mt-2">
               This website is not in production yet. Please wait for the official release.
            </p>

            <form className="mt-6 space-y-4" onSubmit={handleEmailSignIn}>
               {!pendingVerification ? (
                  <>
                     <div className="space-y-4">
                        <button
                           className="w-full h-10 flex items-center justify-center bg-gray-100 dark:bg-zinc-900 text-black dark:text-white rounded-md hover:bg-gray-200 dark:hover:bg-zinc-800 transition"
                           type="button"
                           onClick={() => handleOAuthSignIn("oauth_github")}
                           disabled={loading}
                        >
                           <IconBrandGithub className="mr-2" />
                           {loading ? "Loading..." : "Continue with GitHub"}
                        </button>
                        <button
                           className="w-full h-10 flex items-center justify-center bg-gray-100 dark:bg-zinc-900 text-black dark:text-white rounded-md hover:bg-gray-200 dark:hover:bg-zinc-800 transition"
                           type="button"
                           onClick={() => handleOAuthSignIn("oauth_google")}
                           disabled={loading}
                        >
                           <IconBrandGoogle className="mr-2" />
                           {loading ? "Loading..." : "Continue with Google"}
                        </button>
                     </div>
                     <div className="flex items-center my-6">
                        <div className="flex-grow h-px bg-neutral-300 dark:bg-neutral-700"></div>
                        <span className="mx-4 text-neutral-600 dark:text-neutral-400 text-sm">OR</span>
                        <div className="flex-grow h-px bg-neutral-300 dark:bg-neutral-700"></div>
                     </div>
                     <div className="mb-4">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                           id="email"
                           placeholder="Enter your email"
                           type="email"
                           value={emailAddress}
                           onChange={(e) => setEmailAddress(e.target.value)}
                           required
                        />
                     </div>
                     {error && (
                        <p className="text-red-600 dark:text-red-400 text-start">{error}</p>
                     )}
                     <button
                        className="w-full h-10 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
                        type="submit"
                        disabled={loading}
                     >
                        {loading ? "Sending..." : "Send Verification Code"}
                     </button>
                  </>
               ) : (
                  <>
                     <div className="mb-4">
                        <Label htmlFor="code">Verification Code</Label>
                        <div className="flex gap-2 justify-center">
                           {code.map((digit, index) => (
                              <Input
                                 key={index}
                                 id={`code-${index}`}
                                 className="w-12 h-12 text-center text-lg font-semibold border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                 maxLength={1}
                                 value={digit}
                                 onChange={(e) => handleCodeChange(e.target.value, index)}
                                 type="text"
                                 inputMode="numeric"
                                 pattern="[0-9]*"
                                 required
                              />
                           ))}
                        </div>
                     </div>
                     <button
                        className="w-full h-10 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition"
                        type="submit"
                        disabled={loading}
                     >
                        {loading ? "Verifying..." : "Verify & Sign In"}
                     </button>
                  </>
               )}
               <p className="text-center mt-4 text-sm">
                  Don&apos;t have an account?{" "}
                  <Link href={"/sign-up"} className="text-blue-600 hover:underline">
                     Register
                  </Link>
               </p>
            </form>
         </div>
      </div>
   );
}
