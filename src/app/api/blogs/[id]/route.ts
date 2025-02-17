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
      const { params } = context;
      const resolvedParams = await params;

      if (!resolvedParams || !resolvedParams.id) {
         return NextResponse.json(
            { error: "Id is required" },
            { status: 400 }
         );
      }

      const { id } = resolvedParams;

      await connectToDatabase();
      const blog = await Blog.findOne({ slugParams: id })
         .populate({ path: "author", model: User, select: "fullName profileImage email" })

      if (!blog) {
         return NextResponse.json({ error: "Blog not found" }, { status: 404 });
      }

      return NextResponse.json({ blog }, { status: 200 });
   } catch {
      return NextResponse.json({ error: "Failed to get blog" }, { status: 500 });
   }
}

// delete blog by id
export async function DELETE(
   request: NextRequest,
   context: { params: Promise<{ id: string }> }
) {
   try {
      const { params } = context;
      const resolvedParams = await params;

      if (!resolvedParams || !resolvedParams.id) {
         return NextResponse.json(
            { error: "Id is required" },
            { status: 400 }
         );
      }

      const { id } = resolvedParams;

      await connectToDatabase();
      const blog = await Blog.findOneAndDelete({ slugParams: id });

      if (!blog) {
         return NextResponse.json({ error: "Blog not found" }, { status: 404 });
      }

      return NextResponse.json({ message: "Blog deleted" }, { status: 200 });
   } catch {
      return NextResponse.json({ error: "Failed to delete blog" }, { status: 500 });
   }
}