"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useGetUserByID, useUpdateUserByID } from "../../../../utils/react-query/queriesAndMutation";
import { useParams } from "next/navigation";
import { isValidUrl } from "../../../../utils/utils";
import { Loader } from "lucide-react";
import Image from "next/image";

const Page = () => {
   const { id } = useParams() as { id: string };
   const {
      data,
      error: fetchError,
      isLoading: isFetchingUser,
   } = useGetUserByID(id);

   const {
      mutate,
      isPending: isUpdating,
      isError: isMutationError,
      error: mutationError,
   } = useUpdateUserByID(id);

   const [editMode, setEditMode] = useState(false);
   const [formData, setFormData] = useState({ profileImage: '', fullName: '' });
   const [clientErrors, setClientErrors] = useState({ profileImage: '', fullName: '' });
   const [showSuccess, setShowSuccess] = useState(false);

   // Memoize user data to prevent unnecessary effect triggers
   const user = useMemo(() => data?.user, [data?.user]);

   // Initialize form data
   useEffect(() => {
      if (user) {
         setFormData({
            profileImage: user.profileImage,
            fullName: user.fullName
         });
      }
   }, [user]);

   const handleEdit = () => setEditMode(true);

   const handleCancel = useCallback(() => {
      if (!user) return;

      const isDirty = formData.profileImage !== user.profileImage ||
         formData.fullName !== user.fullName;

      if (isDirty && !window.confirm('You have unsaved changes. Are you sure you want to cancel?')) {
         return;
      }

      setEditMode(false);
      setFormData({
         profileImage: user.profileImage,
         fullName: user.fullName
      });
      setClientErrors({ profileImage: '', fullName: '' });
   }, [formData, user]);

   const validateForm = useCallback(() => {
      const errors = { profileImage: '', fullName: '' };
      let isValid = true;

      if (!formData.profileImage.trim()) {
         errors.profileImage = 'Profile image URL is required';
         isValid = false;
      } else if (!isValidUrl(formData.profileImage)) {
         errors.profileImage = 'Please enter a valid URL';
         isValid = false;
      }

      if (!formData.fullName.trim()) {
         errors.fullName = 'Full name is required';
         isValid = false;
      }

      setClientErrors(errors);
      return isValid;
   }, [formData]);

   const handleSave = useCallback(() => {
      if (!validateForm()) return;

      mutate({
         profileImage: formData.profileImage,
         fullName: formData.fullName
      }, {
         onSuccess: () => {
            setEditMode(false);
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);
         }
      });
   }, [formData, mutate, validateForm]);

   const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));

      // Immediate validation
      if (name === 'profileImage') {
         setClientErrors(prev => ({
            ...prev,
            profileImage: isValidUrl(value) ? '' : 'Please enter a valid URL'
         }));
      }
   }, []);

   if (isFetchingUser) {
      return (
         <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center gap-2">
               <Loader className="w-10 h-10 animate-spin" />
               <span className="text-gray-600 dark:text-gray-400">Loading profile...</span>
            </div>
         </div>
      );
   }

   if (fetchError) {
      return (
         <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="text-red-500 dark:text-red-400 p-4 rounded-lg bg-red-50 dark:bg-red-900">
               Error loading profile: {(fetchError as Error).message}
            </div>
         </div>
      );
   }

   if (!user) {
      return (
         <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="text-red-500 dark:text-red-400">User not found</div>
         </div>
      );
   }

   return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
         <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
               Profile Page
            </h1>

            {/* Status Messages */}
            <div aria-live="polite">
               {showSuccess && (
                  <div className="mb-4 p-3 flex items-center justify-between bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-200 rounded">
                     <span>Profile updated successfully!</span>
                     <button
                        onClick={() => setShowSuccess(false)}
                        className="text-green-700 dark:text-green-200 hover:text-green-800"
                     >
                        ✕
                     </button>
                  </div>
               )}

               {isMutationError && (
                  <div className="mb-4 p-3 flex items-center justify-between bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-200 rounded">
                     <span>{(mutationError as Error).message || 'Failed to update profile'}</span>
                     <button
                        onClick={() => setClientErrors(prev => ({ ...prev, mutation: '' }))}
                        className="text-red-700 dark:text-red-200 hover:text-red-800"
                     >
                        ✕
                     </button>
                  </div>
               )}
            </div>

            <div className="flex flex-col items-center mb-8">
               <Image
                  width={128}
                  height={128}
                  src={formData.profileImage || '/default-avatar.png'}
                  alt="Profile"
                  className="w-32 h-32 rounded-full mb-4 border-4 border-gray-200 dark:border-gray-600 object-cover"
               />
               {editMode && (
                  <div className="w-full">
                     <input
                        type="text"
                        name="profileImage"
                        value={formData.profileImage}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
                        placeholder="Image URL"
                     />
                     {clientErrors.profileImage && (
                        <p className="text-red-500 text-sm mt-1">{clientErrors.profileImage}</p>
                     )}
                  </div>
               )}
            </div>

            <div className="space-y-4">
               <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                     Username
                  </label>
                  <input
                     type="text"
                     value={user.username}
                     readOnly
                     className="w-full px-3 py-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-white cursor-not-allowed"
                  />
               </div>

               <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                     Email
                  </label>
                  <input
                     type="email"
                     value={user.email}
                     readOnly
                     className="w-full px-3 py-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-white cursor-not-allowed"
                  />
               </div>

               <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                     Full Name
                  </label>
                  {editMode ? (
                     <div>
                        <input
                           type="text"
                           name="fullName"
                           value={formData.fullName}
                           onChange={handleChange}
                           className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
                        />
                        {clientErrors.fullName && (
                           <p className="text-red-500 text-sm mt-1">{clientErrors.fullName}</p>
                        )}
                     </div>
                  ) : (
                     <div className="w-full px-3 py-2 border rounded bg-white dark:bg-gray-700 dark:text-white">
                        {user.fullName}
                     </div>
                  )}
               </div>

               <div className="flex justify-end gap-4 mt-8">
                  {editMode ? (
                     <>
                        <button
                           onClick={handleCancel}
                           disabled={isUpdating}
                           className="px-4 py-2 text-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-white rounded hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50 transition-colors"
                        >
                           Cancel
                        </button>
                        <button
                           onClick={handleSave}
                           disabled={isUpdating || !!clientErrors.profileImage || !!clientErrors.fullName}
                           className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 disabled:opacity-50 disabled:hover:bg-blue-600 transition-colors"
                        >
                           {isUpdating ? (
                              <span className="flex items-center gap-2">
                                 <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                 Saving...
                              </span>
                           ) : 'Save'}
                        </button>
                     </>
                  ) : (
                     <button
                        onClick={handleEdit}
                        className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors"
                     >
                        Edit Profile
                     </button>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Page;