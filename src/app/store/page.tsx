
import { Metadata } from "next";
import Store from "./Store";

export const metadata: Metadata = {
   title: "Store | Ur Buddhadeb",
   description: "Store Page",
};

export default function BlogPage() {
   return <Store />;
}
