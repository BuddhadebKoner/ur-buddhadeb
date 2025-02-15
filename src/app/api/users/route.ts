import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../../utils/db";
import User from "../../../../models/user";

// resgiter a user
export async function POST(request: NextRequest) {
   try {
      const { email, username } = await request.json();
      if (!email || !username) {
         return NextResponse.json(
            { error: "Email and Username is required" },
            { status: 400 }
         );
      }

      await connectToDatabase();
      const existingUser = await User.findOne({ email });
      if (existingUser) {
         return NextResponse.json(
            { error: "User already exists" },
            { status: 400 }
         );
      }

      await User.create({ email, username });

      return NextResponse.json(
         { message: "User created successfully", },
         { status: 201 }
      );

   } catch {
      return NextResponse.json(
         { error: "Faild to Register" },
         { status: 500 }
      );
   }
};