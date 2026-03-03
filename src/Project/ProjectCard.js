import React from "react";

function ProjectCard({ projectImage, projectName, projectExplaination, projectIcon1, projectIcon2, projectIcon3, projectSourceCode, projectLiveDemo }) {
  return (
    <div className="group flex flex-col lg:flex-row xl:flex-row bg-[#222831] rounded-3xl overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] hover:-translate-y-2 transition-all duration-300 border border-gray-700 hover:border-cyan-500/50">

      {/* Image Container */}
      <div className="w-full lg:w-2/5 xl:w-[450px] overflow-hidden relative">
        <div className="w-full pb-[60%] lg:pb-[75%] lg:h-full relative">
          <img
            src={projectImage}
            alt={projectName}
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        {/* Overlay gradient on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#222831] via-transparent to-transparent opacity-80 lg:hidden"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#222831] opacity-90 hidden lg:block"></div>
      </div>

      {/* Content Container */}
      <div className="w-full lg:w-3/5 flex flex-col justify-center p-6 lg:p-8 xl:p-10 z-10">

        <h1 className="font-bold text-2xl lg:text-3xl xl:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4 tracking-tight">
          {projectName}
        </h1>

        <div className="relative">
          <span className="text-cyan-500/70 font-mono text-sm absolute -top-5 left-0">&lt;p&gt;</span>
          <h2 className="text-gray-300 leading-relaxed text-sm md:text-base lg:text-lg text-justify my-2 z-10 relative">
            {projectExplaination}
          </h2>
          <span className="text-cyan-500/70 font-mono text-sm absolute -bottom-5 left-0">&lt;/p&gt;</span>
        </div>

        {/* Tech Stack & Buttons Section */}
        <div className="mt-8 pt-6 border-t border-gray-700/50">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            {/* Tech Stack */}
            <div className="flex flex-col gap-2">
              <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Tech Stack</span>
              <div className="flex items-center gap-3">
                <img src={projectIcon1} className="w-7 h-7 hover:scale-110 transition-transform" alt="tech-icon-1" />
                {projectIcon2 && <img src={projectIcon2} className="w-7 h-7 hover:scale-110 transition-transform" alt="tech-icon-2" />}
                {projectIcon3 && <img src={projectIcon3} className="w-7 h-7 hover:scale-110 transition-transform" alt="tech-icon-3" />}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-row gap-3">
              {projectLiveDemo && (
                <a
                  href={projectLiveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 sm:flex-none text-center bg-cyan-600 hover:bg-cyan-500 text-white py-2 px-5 rounded-lg font-medium transition-colors shadow-lg shadow-cyan-500/30 text-sm md:text-base"
                >
                  Live Demo
                </a>
              )}
              <a
                href={projectSourceCode}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-none text-center bg-[#393E46] hover:bg-gray-600 text-white border border-gray-600 hover:border-gray-400 py-2 px-5 rounded-lg font-medium transition-all text-sm md:text-base"
              >
                Source Code
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default ProjectCard;
