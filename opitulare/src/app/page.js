import Navbar from "@/components/navbar";
import Homepage from "@/pages/homepage";
import Blog from "@/pages/blog";
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-6 md:p-12 lg:p-24">
        <Navbar />
        <Blog />
        <Homepage />
    </main>
  );
}
