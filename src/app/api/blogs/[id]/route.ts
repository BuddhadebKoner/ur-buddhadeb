import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../../../utils/db";
import Blog from "../../../../../models/blogs";
import User from "../../../../../models/user";

// get blog by id
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

      const blog = await Blog.findOne({ slugParams: id })
         .populate({ path: "author", model: User, select: "fullName profileImage" })

      if (!blog) {
         return NextResponse.json({ error: "Blog not found" }, { status: 404 });
      }

      return NextResponse.json({ blog }, { status: 200 });
   } catch {
      return NextResponse.json({ error: "Failed to get blog" }, { status: 500 });
   }
}