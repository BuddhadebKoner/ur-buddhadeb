import mongoose, { model, models, Schema } from "mongoose";

export interface IUser {
   email: string;
   username: string;
   fullName?: string;
   isVarified?: boolean;
   bookMarked?: mongoose.Types.ObjectId[];
   profileImage?: string;
   _id?: mongoose.Types.ObjectId;
}

const userSchema = new Schema<IUser>({
   email: { type: String, required: true, unique: true },
   username: { type: String, required: true, unique: true },
   fullName: { type: String, default: "" },
   isVarified: { type: Boolean, default: false },
   bookMarked: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Blog',
      }],
   profileImage: { type: String, default: "" },
}, { timestamps: true });



const User = models?.User || model<IUser>("User", userSchema);
export default User;