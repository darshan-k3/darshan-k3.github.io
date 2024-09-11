import Image from "next/image";
import Navbar from "@/_components/Navbar";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Skills from "@/pages/Skills";
import Contact from "@/pages/Contact";
import prisma from "./index";
import { unstable_cache } from "next/cache";

const getProjects = unstable_cache(
  async () => {
    return await prisma.project.findMany();
  },
  ["projects"],
  { revalidate: 3600, tags: ["projects"], revalidateIfStale: true }
);

export default async function Home() {
  let projects = await getProjects();
  const sortedProjects = projects
    .slice()
    .sort((a, b) => new Date(b.startdate) - new Date(a.startdate));


  return (
    <>
      <div className="h-screen">
        <Navbar></Navbar>
        <About></About>
        <Projects projects={projects} />
        <Skills></Skills>
        {/* <Experience></Experience>
        <Education></Education> */}
        <Contact></Contact>
      </div>
    </>
  );

}
