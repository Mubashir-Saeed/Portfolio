import About from "./components/About";
import Dividor from "./components/Dividor";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Experience from "./components/experience";
import Skills from "./components/skills";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center px-4 scroll-mt-28">
        <Intro />
        <Dividor />
        <About />
        <Projects />
        <Skills />
        <Experience />
      </main>
    </>
  );
}
