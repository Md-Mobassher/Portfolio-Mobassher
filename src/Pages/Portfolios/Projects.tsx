import { useEffect, useMemo, useState } from "react";
import Project from "./Project";
import Container from "@/components/common/Container";
import Title from "@/components/common/Title";
import { TProject } from "@/type/type";

const Projects = () => {
  const [projects, setProjects] = useState<TProject[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<
    string | undefined
  >();

  useEffect(() => {
    fetch("portfolio.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const getFilteredProjects = () => {
    if (!selectedCategory) {
      return projects;
    }
    return projects.filter((item: TProject) => {
      return item?.technology
        .toLowerCase()
        .match(selectedCategory.toLowerCase());
    });
  };

  // Avoid duplicate function calls with useMemo
  const filteredProjects = useMemo(getFilteredProjects, [
    selectedCategory,
    projects,
  ]);

  const handleAllProjects = () => {
    setSelectedCategory("");
    return projects;
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div id="portfolios" className=" ">
      <Container>
        <Title title="Portfolios" />
        <div className="lg:px-20 md:px-14 lg:mt-10 mt-8">
          <div className="flex flex-wrap lg:justify-start md:justify-start justify-center lg:mb-10 mb-7 md:mb-8">
            <button
              onClick={handleAllProjects}
              className=" btn btn-primary hover:bg-green-400 transition duration-500 text-white mr-1"
            >
              All
            </button>

            <select
              onChange={handleCategoryChange}
              className="select select-primary bg-gray-800"
            >
              <option disabled selected>
                Select Technology
              </option>
              <option value="react">React.js</option>
              <option value="next">Next.js</option>
              <option value="redux">Redux</option>
              <option value="typescript">TypeScript</option>
              <option value="node">Node.js</option>
              <option value="express">Express.js</option>
              <option value="wordpress">WordPress</option>
              <option value="tailwind">Tailwind</option>
              <option value="bootstrap">Bootstrap</option>
              <option value="html">HTML, CSS</option>
            </select>
          </div>
        </div>

        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 md:gap-7 gap-6">
            {filteredProjects.slice(0, 9).map((project: TProject) => (
              <Project key={project?.name} project={project}></Project>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
