import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../../../utils/db";
import User from "../../../../../models/user";

// get user by id
export async function GET(
   request: NextRequest,
   context: { params: Promise<{ id: string }> }
) {
   try {
      await connectToDatabase();
      const { params } = context;
      const resolvedParams = await params;

      if (!resolvedParams || !resolvedParams.id) {
         return NextResponse.json(
            { error: "Id is required" },
            { status: 400 }
         );
      }
      const { id } = resolvedParams;

      const user = await User.findOne({ username: id });

      if (!user) {
         console.log(user);
         return NextResponse.json({ error: "User not found" }, { status: 404 });
      }

      return NextResponse.json({ user }, { status: 200 });
   } catch {
      return NextResponse.json(
         { error: "Failed to get user" },
         { status: 500 }
      )
   }
}
// update user by id
export async function PUT(
   request: NextRequest,
   context: { params: Promise<{ id: string }> }
) {
   try {
      await connectToDatabase();
      const { params } = context;
      const resolvedParams = await params;

      if (!resolvedParams || !resolvedParams.id) {
         return NextResponse.json(
            { error: "Id is required" },
            { status: 400 }
         );
      }

      const { id } = resolvedParams;
      const { profileImage, fullName } = await request.json();
      const user = await User.findOneAndUpdate(
         { username: id },
         { profileImage, fullName },
         { new: true }
      );

      if (!user) {
         return NextResponse.json({ error: "User not found" }, { status: 404 });
      }

      return NextResponse.json({ user }, { status: 200 });
   } catch {
      return NextResponse.json(
         { error: "Failed to update user" },
         { status: 500 }
      )
   }
}