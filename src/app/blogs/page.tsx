import { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";

export const metadata: Metadata = {
   icons: "/favicon.ico",
   title: "Blogs",
   description: "Generated by create next app",
};

export default function BlogPage() {
   return <BlogPageClient />;
}
