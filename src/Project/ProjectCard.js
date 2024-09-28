import React from "react";

function ProjectCard({ projectImage, projectName, projectExplaination, projectIcon1, projectIcon2, projectIcon3, projectSourceCode }) {
  return (
    <div className="flex space-x-20">
      <img src={projectImage} className="w-[450px] h-80 rounded-3xl"></img>

      <div>
        <h1 className="text-3xl font-bold my-3">{projectName}</h1>

        <span className="text-red-400">&lt;p&gt;</span>
        <h2 className="ml-10 my-2">{projectExplaination}</h2>
        <span className="text-red-400">&lt;p&gt;</span>

        <div style={{ backgroundColor: "#222831" }} className="my-3 p-5 rounded-2xl">
          <h1 className="flex mb-5">
            created with
            <img src={projectIcon1} className="w-6 h-6 ml-3"></img>
            {projectIcon2 && <img src={projectIcon2} className="w-6 h-6 ml-3"/>}
            {projectIcon3 && <img src={projectIcon3} className="w-6 h-6 ml-3"/>}
          </h1>

          <a style={{ backgroundColor: "#393E46" }} href={projectSourceCode} target="_blank" className="border-2 p-[7px] rounded-xl mb-10 px-4 font-medium hover:text-cyan-400">
            Source Code
          </a>
        </div>

      </div>
    </div>

  );
}

export default ProjectCard;
