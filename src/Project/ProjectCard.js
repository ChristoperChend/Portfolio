import React from "react";

function ProjectCard({ projectImage, projectName, projectExplaination, projectIcon1, projectIcon2, projectIcon3, projectSourceCode, projectLiveDemo }) {
  return (
    <div className="lg:flex xl:flex">
      <img src={projectImage} className="rounded-3xl w-max h-max lg:w-[450px] xl:w-[450px] xl:h-80  xl:mx-10"></img>

      <div className="">
        <h1 className="font-bold my-3 md:text-2xl lg:text-xl xl:text-3xl">{projectName}</h1>

        <span className="text-red-400">&lt;p&gt;</span>
        <h2 className="ml-10 my-2">{projectExplaination}</h2>
        <span className="text-red-400">&lt;p&gt;</span>

        <div style={{ backgroundColor: "#252525" }} className="my-3 p-5 rounded-2xl">
          <h1 className="flex mb-5">
            created with
            <img src={projectIcon1} className="w-6 h-6 ml-3"></img>
            {projectIcon2 && <img src={projectIcon2} className="w-6 h-6 ml-3" />}
            {projectIcon3 && <img src={projectIcon3} className="w-6 h-6 ml-3" />}
          </h1>

          <div className="w-fit space-y-3 flex flex-col md:flex-row md:space-y-0 md:space-x-4 lg:flex-row lg:space-y-0 lg:space-x-4 xl:flex-row xl:space-y-0 xl:space-x-4">
            <a style={{ backgroundColor: "#393E46" }} href={projectSourceCode} target="_blank" className="text-center border-2 py-1 xl:py-[7px] rounded-xl px-4 font-medium hover:text-cyan-400">
              Source Code
            </a>
            {projectLiveDemo && (
              <a style={{ backgroundColor: "#393E46" }} href={projectLiveDemo} target="_blank" className="text-center border-2 py-1 xl:py-[7px] rounded-xl px-4 font-medium hover:text-cyan-400">
                Live Demo
              </a>
            )}
          </div>

        </div>

      </div>
    </div>

  );
}

export default ProjectCard;
