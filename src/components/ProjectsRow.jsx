// src/components/ProjectRow.jsx
const ProjectRow = ({ project, reverse }) => {
  const Wrapper = project.isExternal ? "a" : "div";

  return (
    <Wrapper
      href={project.isExternal ? project.link : undefined}
      target={project.isExternal ? "_blank" : undefined}
      rel={project.isExternal ? "noopener noreferrer" : undefined}
      className="block group"
    >
      <div
        className={`flex flex-col lg:flex-row items-center gap-12 ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* TEXT */}
        <div className="lg:w-1/2 space-y-4">
          <p className="text-sm uppercase tracking-wider text-neutral-400">
            Featured Project
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold">
            {project.title}
          </h2>
          <p className="text-neutral-300 max-w-xl">
            {project.description}
          </p>
        </div>

        {/* IMAGE */}
        <div className="lg:w-1/2">
          <div className="relative overflow-hidden rounded-xl border border-white/10">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProjectRow;
