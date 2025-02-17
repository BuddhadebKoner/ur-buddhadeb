"use client";

import { useUser } from "@clerk/nextjs";
import { createContext, useState, useEffect, useCallback } from "react";
import { getUserByID } from "../../api-calls/user-api";


type AuthContext = {
   currentUser:
   {
      _id: string;
      email: string;
      username: string;
      isVarified: boolean;
      bookMarked: [];
      profileImage: string;
      createdAt: string;
      updatedAt: string;
      fullName: string;
   };
   isLoading: boolean;
}

export const AuthContext = createContext<AuthContext | undefined>(undefined);


export function AuthProvider({ children }: { children: React.ReactNode }) {
   const [currentUser, setCurrentUser] = useState<AuthContext["currentUser"]>({
      _id: "",
      email: "",
      username: "",
      isVarified: false,
      bookMarked: [],
      profileImage: "",
      createdAt: "",
      updatedAt: "",
      fullName: "",
   });
   const [isLoading, setIsLoading] = useState(true);
   const { user, isLoaded } = useUser();

   const fetchUserData = useCallback(async () => {
      try {
         setIsLoading(true);
         if (!user || !isLoaded) {
            setIsLoading(false);
            return;
         }
         const username = user.username;

         if (!username) {
            console.error("Username is null");
            setIsLoading(false);
            return;
         }

         const res = await getUserByID(username);
         if (res.error) {
            console.error("Error fetching user:", res.error);
            return;
         }
         console.log("User fetched successfully:", res.user);
         setCurrentUser(res.user);

         setIsLoading(false);

      } catch (error) {
         console.error("Error fetching user:", error);
         return { error: "Failed to get user" };

      }
   }, [user, isLoaded]);

   useEffect(() => {
      fetchUserData();
   }, [fetchUserData]);

   return (
      <AuthContext.Provider
         value={{
            currentUser,
            isLoading,
         }}
      >
         {children}
      </AuthContext.Provider>
   );
};