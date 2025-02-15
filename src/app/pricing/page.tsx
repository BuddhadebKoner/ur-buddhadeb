
import { Metadata } from "next";
import Pricing from "./Pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Pricing Page",
};

export default function BlogPage() {
  return <Pricing />;
}
