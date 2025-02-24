import { useState } from "react";
import Advcards from "../Components/Advcards.jsx"
import { useEffect } from "react";
import React from "react";

function Models() {
  const [projects, setProjects] = useState([]);
  const [val,setval] = useState(1);

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
    <div className="bg-white font-montserrat">
      <div className="text-gray-950 text-3xl font-semibold text-center">HOT Trending</div>
          <div className=" gap-8 md:gap-5 flex flex-row flex-wrap text-center p-10 md:p-15 items-center mx-auto justify-center">
          {projects.map(project => (
              <Advcards 
                key={project._id || project.ProjectName} // Add this line
                id={project.ProjectName}
                project={project}
                ProjectName={project.ProjectName}
                ProjectDescribe={project.DescribeinWords}
                ProjectLogo={project.ProjectLogo}
                Valuation={project.Valuation}
              />
            ))}
      </div>
    </div>
  );
}

export default Models
