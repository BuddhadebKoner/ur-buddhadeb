import mongoose, { Schema, Document } from "mongoose";

export interface component extends Document {
   category: string;
   uiName: string;
   codeFileName: string;
   content: string;
   code: string;
   createdAt?: Date;
}

const componentSchema: Schema = new Schema(
   {
      category: { type: String, required: true },
      uiName: { type: String, required: true },
      codeFileName: { type: String, required: true },
      content: { type: String, required: true },
      code: { type: String, required: true },
      createdAt: { type: Date, default: Date.now },
   },
   { timestamps: true }
);

export default mongoose.models.component || mongoose.model<component>("component", componentSchema);