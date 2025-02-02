import type { NextApiRequest, NextApiResponse } from "next";
import Component from "../../../models/component";
import { connectToDatabase } from "../../../utils/db";

// Define a proper TypeScript type for components
interface ComponentData {
   _id: string;
   category: string;
   uiName: string;
   codeFileName: string;
   content: string;
   code: string;
   createdAt: string;
   updatedAt: string;
   __v: number;
}

// Define the API response type
type Data =
   | { components: ComponentData[] }
   | { message: string };

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse<Data>
) {
   // Only allow GET requests for fetching components
   if (req.method !== "GET") {
      res.setHeader("Allow", "GET");
      return res.status(405).json({ message: "Method Not Allowed" });
   }

   // Extract the category query parameter
   const { category } = req.query;

   // Check if the category parameter exists and is a string
   if (!category || typeof category !== "string") {
      return res.status(400).json({
         message:
            'Bad Request: The "category" query parameter is required and must be a string.',
      });
   }

   try {
      // Connect to the database
      await connectToDatabase();

      // Find all components where the category matches the provided value
      const components: ComponentData[] = await Component.find({ category });

      // Return the components in the response
      return res.status(200).json({ components });
   } catch (error: unknown) { // Use 'unknown' for better type safety
      console.error("Error fetching components:", error);

      let errorMessage = "Internal Server Error";
      if (error instanceof Error) {
         errorMessage = error.message;
      }

      return res.status(500).json({ message: errorMessage });
   }
}
