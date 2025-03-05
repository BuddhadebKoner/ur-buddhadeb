"use client";

import { useState } from "react";

export default function PopupForm({ onClose, title }: { onClose: () => void; title: string }) {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      preferredPlan: title,
      message: "",
   });

   const [errors, setErrors] = useState({
      name: "",
      email: "",
      phone: "",
      preferredPlan: "",
      message: "",
   });


   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value,
      });
   };

   const validateForm = () => {
      const newErrors = {
         name: "",
         email: "",
         phone: "",
         preferredPlan: "",
         message: "",
      };

      let isValid = true;

      if (!formData.name.trim()) {
         newErrors.name = "Name is required.";
         isValid = false;
      }

      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!formData.email.trim()) {
         newErrors.email = "Email is required.";
         isValid = false;
      } else if (!emailRegex.test(formData.email)) {
         newErrors.email = "Please enter a valid email.";
         isValid = false;
      }

      const phoneRegex = /^[0-9]{10}$/;
      if (formData.phone && !phoneRegex.test(formData.phone)) {
         newErrors.phone = "Please enter a valid 10-digit phone number.";
         isValid = false;
      }

      if (!formData.preferredPlan) {
         newErrors.preferredPlan = "Please select a preferred plan.";
         isValid = false;
      }

      if (formData.message.length > 500) {
         newErrors.message = "Message is too long (maximum 500 characters).";
         isValid = false;
      }

      setErrors(newErrors);
      return isValid;
   };

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!validateForm()) {
         return;
      }

      console.log(formData);
      onClose();
   };

   return (
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg max-w-lg w-full text-gray-800 dark:text-gray-100">
         <h3 className="text-xl font-semibold mb-4">Enter your details</h3>
         <form onSubmit={handleSubmit}>
            <label className="block mb-2">Name</label>
            <input
               type="text"
               name="name"
               value={formData.name}
               onChange={handleInputChange}
               className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded mb-4 bg-white dark:bg-gray-800
                          text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
               placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

            <label className="block mb-2">Email</label>
            <input
               type="email"
               name="email"
               value={formData.email}
               onChange={handleInputChange}
               className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded mb-4 bg-white dark:bg-gray-800
                          text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
               placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <label className="block mb-2">Phone</label>
            <input
               type="tel"
               name="phone"
               value={formData.phone}
               onChange={handleInputChange}
               className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded mb-4 bg-white dark:bg-gray-800
                          text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
               placeholder="Enter your phone number"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

            <label className="block mb-2">Preferred Plan</label>
            <select
               name="preferredPlan"
               value={formData.preferredPlan}
               onChange={handleInputChange}
               className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded mb-4 bg-white dark:bg-gray-800
                          text-gray-900 dark:text-gray-100"
            >
               <option value="Basic">Basic</option>
               <option value="Standard">Standard</option>
               <option value="Premium">Premium</option>
            </select>
            {errors.preferredPlan && <p className="text-red-500 text-sm">{errors.preferredPlan}</p>}

            <label className="block mb-2">Message</label>
            <textarea
               name="message"
               value={formData.message}
               onChange={handleInputChange}
               className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded mb-4 bg-white dark:bg-gray-800
                          text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
               placeholder="Enter any additional details"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

            <button
               type="submit"
               className="w-full bg-blue-600 dark:bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800"
            >
               Request
            </button>
         </form>
         <button
            className="w-full mt-4 text-red-500 border border-red-500 py-2 rounded-lg hover:bg-red-500 hover:text-white"
            onClick={onClose}
         >
            Close
         </button>
      </div>
   );
}
