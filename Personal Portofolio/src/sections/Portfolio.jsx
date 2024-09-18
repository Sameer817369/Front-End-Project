import { projects } from "../constants";
import PortfolioCard from "../components/PortfolioCard";
const Portfolio = () => {
  return (
    <section id="projects" className="max-container max-sm:-mt-2 ">
      <div className=" lg:ml-36 text-left max-sm:text-left max-md:text-left ">
        <p className="mt-2 text-lg font-montserrat text-slate-gray max-sm:text-sm">
          Projects
        </p>
        <h1 className="text-4xl font-palanquin font-bold  max-sm:text-[45px]">
          Explore my personal projects and skills
        </h1>
        <p className="lg:max  mt-2 text-lg font-montserrat text-slate-gray max-sm:text-sm">
          Showcasing My Skills
        </p>
      </div>
      <div className=" mt-16 grid  grid-cols-1 sm:gap-6 gap-16 w-[80%] max-md:w-full  max-sm:w-full mx-auto">
        {projects.map((project) => (
          <PortfolioCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
