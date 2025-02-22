import Navbar from "@/components/navbar";
import Homepage from "@/pages/homepage";
import Blog from "@/pages/blog";
import Footer from "@/pages/footer"
import Image from "next/image";
import Goals from "@/pages/goal";
import About from "@/pages/about";
import Visualizer from "@/pages/visualize";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-6 md:p-12 lg:p-24">
        <Navbar />
        <Homepage />
        <Blog />
        <About />
        <Visualizer />
        <Goals />
        <Footer />
    </main>
  );
}
