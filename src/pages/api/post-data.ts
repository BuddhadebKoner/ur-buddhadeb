import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../utils/db";
import Component from "../../../models/component";

interface ComponentData {
   category: string;
   uiName: string;
   codeFileName: string;
   code: string;
   additionalFields?: Record<string, any>;
}

type ResponseData =
   | { message: string; components?: ComponentData[] }
   | { error: string };

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse<ResponseData>
) {
   if (req.method !== "POST") {
      res.setHeader("Allow", "POST");
      return res.status(405).json({ message: "Method Not Allowed" });
   }

   try {
      await connectToDatabase();

      const { components }: { components: ComponentData[] } = req.body;

      if (!components || !Array.isArray(components)) {
         return res.status(400).json({
            message: "Invalid data format: components array is required.",
         });
      }

      const createdComponents = await Promise.all(
         components.map(async (component: ComponentData) => {
            const { category, uiName, codeFileName, code } = component;

            if (!category || !uiName || !codeFileName || !code) {
               throw new Error("Missing required fields in one of the components.");
            }

            const newComponent = await Component.create({
               category,
               uiName,
               codeFileName,
               code,
            });

            return newComponent;
         })
      );

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
