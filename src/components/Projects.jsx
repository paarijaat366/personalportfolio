// src/components/Projects.jsx
import ProjectRow from "./ProjectsRow";

const projectsData = [
  {
    id: 1,
    title: "Titanium iPhone clone",
    description:
      "A modern front end clone of iPhone titanium containing animations using different libraries.",
    image: "Screenshot.png", // put any image or placeholder
    link: "https://iphone-clone-by-paarijaat.netlify.app/",
    isExternal: true,
  },
];

const Projects = () => {
  return (

    <section id="section" className="min-h-screen bg-neutral-950 text-white py-24 bg-[url(/bg.png)] bg-cover bg-center mt-20">
      <h1 className="text-8xl ml-10 mt-20 font-serif">My Projects</h1>
      <div className="max-w-7xl mx-auto px-6 space-y-32 mt-20">
        {projectsData.map((project, index) => (
          <ProjectRow
            key={project.id}
            project={project}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
