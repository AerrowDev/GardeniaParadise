import Hero from "@/components/Hero";
import { config } from "@/lib/config";
import { Metadata } from "next";
const { baseUrl, siteOgImage, siteOgAlt } = config;
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl as string ) ,
  title: "Home ",
  description: "bicol regions number 1 resort"
}
export default function Home() {
  return (
   <main className="min-h-[100dvh] z-10">
    <Hero/>
   </main>
  );
}
 