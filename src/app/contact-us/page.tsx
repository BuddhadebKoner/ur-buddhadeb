
import { Metadata } from "next";
import ContactUs from "./ContactUs";

export const metadata: Metadata = {
   title: "Contact Us",
   description: "Contact Page",
};

export default function BlogPage() {
   return <ContactUs />;
}
