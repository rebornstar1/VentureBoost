import { useState } from "react";
import Advcards from "../Components/advcards"
import { useEffect } from "react";

function Models() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    GetAllProjects();
  }, []);

  const GetAllProjects = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/projects/getprojects', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const data = await res.json();
      console.log(data);
      setProjects(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-600 font-montserrat">
      <div className="text-white text-3xl font-semibold text-center">HOT Trending</div>
          <div className=" gap-8 md:gap-5 flex flex-row flex-wrap text-center p-10 md:p-15 items-center mx-auto justify-center">
          {projects.map(project => (
            <Advcards key={project.ProjectName} project={project} ProjectName={project.ProjectName} ProjectDescribe={
              project.DescribeinWords
              } ProjectLogo={project.ProjectLogo}/>
          ))}
      </div>
    </div>
  );
}

export default Models
