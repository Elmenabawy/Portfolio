import Image from "next/image";
import Hero from "@/components/Hero";
import FloatingNav from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import dynamic from "next/dynamic";
import RecentProjects from "@/components/RecentProjects";
import Footer from "@/components/Footer";

const Grid = dynamic(() => import('@/components/Grid'), { ssr: false });
const Approach = dynamic(() => import('@/components/Approach'), { ssr: false });

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center overflow-hidden flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* <FloatingNav navItems={[{name: 'Home', link: '/', icon: <FaHome />}]}/> */}
        <Hero />
        <Grid />
        <RecentProjects />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
