"use client";
import React from "react";
import Section_heading from "./Section_heading";
import { projectsData } from "../../../lib/data";
import Project from "./project";
import { useSectionInView } from "../../../lib/hook";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);

  // const {ref , inView} = useInView({threshold: 0.5});
  // const {setActiveSection, timeOfLastClick} = useActiveSectionContext();

  // useEffect(()=>{
  //   if(inView && Date.now() - timeOfLastClick > 1000) {
  //     setActiveSection("Projects")
  //   }
  // },[inView, setActiveSection, timeOfLastClick])

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <Section_heading title={"My Projects"} />
      {projectsData.map((project, index) => (
        <React.Fragment key={index}>
          <Project {...project} />
        </React.Fragment>
      ))}
    </section>
  );
};

export default Projects;
