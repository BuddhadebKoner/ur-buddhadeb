import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../../utils/db";
import Blog from "../../../../models/blogs";
import User from "../../../../models/user";

// post route to take in a blog post
export async function POST(request: NextRequest) {
   try {
      const { author, title, imageUrl, videoLink, readTime, slugParams, content } = await request.json();
      if (!author) {
         return NextResponse.json(
            { error: "Author is required" },
            { status: 400 }
         );
      }

      if (!title || !imageUrl || !readTime || !slugParams || !content) {
         return NextResponse.json(
            { error: "Properly check all filld is filled !" },
            { status: 400 }
         );
      }

      await connectToDatabase();
      const existingBlog = await Blog.findOne({ slugParams });
      if (existingBlog) {
         return NextResponse.json(
            { error: "chnage the slag value !" },
            { status: 400 }
         );
      }

      await Blog.create({
         author,
         title,
         imageUrl,
         videoLink,
         readTime,
         slugParams,
         content
      });

      return NextResponse.json(
         { message: "Blog created successfully" },
         { status: 201 }
      );

   } catch {
      return NextResponse.json(
         { error: "Faild to create blog" },
         { status: 500 }
      );
   }
}

// get paginated blogs
export async function GET(req: NextRequest) {
   try {
      await connectToDatabase();

      const searchParams = new URL(req.url).searchParams;
      const page = parseInt(searchParams.get("page") || "1", 10);
      const limit = parseInt(searchParams.get("limit") || "5", 10);
      const skip = (page - 1) * limit;

      const blogs = await Blog.find()
         .populate({ path: "author", model: User, select: "fullName profileImage" })
         .sort({ createdAt: -1 })
         .skip(skip)
         .limit(limit)
         .lean(); 

      const totalBlogs = await Blog.countDocuments();

      return NextResponse.json(
         { blogs, totalBlogs, page, totalPages: Math.ceil(totalBlogs / limit) },
         { status: 200 }
      );
   } catch (error) {
      console.error("Error fetching blogs:", error);
      return NextResponse.json({ error: "Failed to get blogs" }, { status: 500 });
   }
}