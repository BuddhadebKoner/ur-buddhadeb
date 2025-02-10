"use client";

import { useState } from "react";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";

export default function SignUp() {
   const { isLoaded, signUp } = useSignUp();
   const [emailAddress, setEmailAddress] = useState("");
   const [firstname, setFirstname] = useState("");
   const [lastname, setLastname] = useState("");
   const [username, setUsername] = useState("");
   const [pendingVerification, setPendingVerification] = useState(false);
   const [code, setCode] = useState(["", "", "", "", "", ""]);
   const [error, setError] = useState("");
   const [isSubmitting, setIsSubmitting] = useState(false);
   const router = useRouter();

   const handleSignUpWithEmail = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!isLoaded || isSubmitting) return;

      setIsSubmitting(true);
      try {
         if (pendingVerification) {
            const verificationCode = code.join("");
            await signUp.attemptEmailAddressVerification({ code: verificationCode });
            router.push("/sign-in");

         } else {
            await signUp.create({ emailAddress, username });
            await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
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
         setIsSubmitting(false);
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
      <div className="w-full min-h-screen flex justify-center items-center bg-white dark:bg-black">
         <div className="max-w-lg w-full mx-auto p-6 bg-white dark:bg-black rounded-lg shadow-lg">

            {(!isLoaded || isSubmitting) && (
               <div className="absolute inset-0 bg-white/10 dark:bg-black/30 backdrop-blur-md flex items-center justify-center z-10">
                  <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                     {isSubmitting ? "Processing..." : "Loading..."}
                  </span>
               </div>
            )}

            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 text-center">
               Register For An Account
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-center mt-2">
               Please read the terms and conditions before signing up.
            </p>

            <form className="mt-6 space-y-4" onSubmit={handleSignUpWithEmail}>
               {!pendingVerification ? (
                  <>
                     <div className="flex gap-4">
                        <div className="mb-4">
                           <Label htmlFor="firstName">First Name</Label>
                           <Input
                              id="firstName"
                              placeholder="Enter your first name"
                              type="text"
                              value={firstname}
                              onChange={(e) => setFirstname(e.target.value)}
                              required
                           />
                        </div>

                        <div className="mb-4">
                           <Label htmlFor="lastName">Last Name</Label>
                           <Input
                              id="lastName"
                              placeholder="Enter your last name"
                              type="text"
                              value={lastname}
                              onChange={(e) => setLastname(e.target.value)}
                              required
                           />
                        </div>
                     </div>

                     <div className="mb-4">
                        <Label htmlFor="userName">User Name</Label>
                        <Input
                           id="userName"
                           placeholder="Enter your username"
                           type="text"
                           value={username}
                           onChange={(e) => setUsername(e.target.value)}
                           required
                        />
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
                     {error && <p className="text-red-600 dark:text-red-400 text-start">{error}</p>}
                     <button
                        className="w-full h-10 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
                        type="submit"
                        disabled={isSubmitting}
                     >
                        {isSubmitting ? "Signing Up..." : "Sign Up"}
                     </button>
                  </>
               ) : (
                  <>
                     {/* otp section */}
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
                     {/* capture code clerk-captcha */}
                     <div id="clerk-captcha"></div>
                     <button
                        className="w-full h-10 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition"
                        type="submit"
                        disabled={isSubmitting}
                     >
                        {isSubmitting ? "Verifying..." : "Verify & Sign Up"}
                     </button>
                  </>
               )}
               <p className="text-center mt-4 text-sm">
                  Already have an account?{" "}
                  <Link href="/sign-in" className="text-blue-600 hover:underline">
                     Sign In
                  </Link>
               </p>
            </form>
         </div>
      </div>
   );
}
