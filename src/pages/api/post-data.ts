import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../utils/db";
import Component from "../../../models/component"; 

// Define a type for button objects
interface ButtonData {
   uiName: string;
   codeFileName: string;
   code: string;
}

// Define the API response type
type ResponseData =
   | { message: string; components?: ButtonData[] }
   | { error: string };

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse<ResponseData>
) {
   // Allow only POST requests
   if (req.method !== "POST") {
      res.setHeader("Allow", "POST");
      return res.status(405).json({ message: "Method Not Allowed" });
   }

   try {
      // Connect to MongoDB using your shared utility
      await connectToDatabase();

      // Extract the "buttons" array from the request body
      const { buttons }: { buttons: ButtonData[] } = req.body;

      // Validate that buttons exist and is an array
      if (!buttons || !Array.isArray(buttons)) {
         return res.status(400).json({
            message: "Invalid data format: buttons array is required.",
         });
      }

      const createdComponents = await Promise.all(
         buttons.map(async (button: ButtonData) => {
            const { uiName, codeFileName, code } = button;

            // Validate required fields
            if (!uiName || !codeFileName || !code) {
               throw new Error("Missing required fields in one of the buttons.");
            }

            // Create a new Component document
            const newComponent = await Component.create({
               category: "buttons",
               uiName,
               codeFileName,
               code,
               content: code, // Storing the code as content; adjust as needed.
            });

            return newComponent;
         })
      );

      // Return a successful response with the created documents.
      return res.status(201).json({
         message: "Components created successfully",
         components: createdComponents,
      });
   } catch (error: unknown) {
      console.error("Error while creating components:", error);

      let errorMessage = "Internal Server Error";
      if (error instanceof Error) {
         errorMessage = error.message;
      }

      return res.status(500).json({ error: errorMessage });
   }
}
