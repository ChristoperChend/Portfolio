import React, { useState } from "react";
import TechStack from "./SkillSection/TechStack";
import Tools from "./SkillSection/Tools";

function Skills() {
    const [activeTab, setActiveTab] = useState("techStack");

    const showTechStack = () => {
        setActiveTab("techStack");
    };

    const showTools = () => {
        setActiveTab("tools");
    };

    return (
        <section className="mt-7 font-jetBrains xl:mt-16">
            <div className="space-y-4">
                <h1 className="font-medium text-xl xl:text-2xl">Skills</h1>
                <div className="flex space-x-5 xl:font-normal">
                    <h1
                        className={`rounded-lg p-2 px-2 xl:p-2 xl:px-4 font-medium hover:scale-110 transition-transform duration-200 bg-[#393E46] cursor-pointer ${activeTab === "techStack" ? "text-cyan-400 scale-110" : ""}`}
                        onClick={showTechStack}
                    >
                        Tech Stack
                    </h1>
                    <h1
                        className={`rounded-lg p-2 px-2 xl:p-2 xl:px-4 font-medium hover:scale-110 transition-transform duration-200 bg-[#393E46] cursor-pointer ${activeTab === "tools" ? "text-cyan-400 scale-110" : ""}`}
                        onClick={showTools}
                    >
                        Tools
                    </h1>
                </div>
            </div>

            {activeTab === "techStack" && <TechStack />}
            {activeTab === "tools" && <Tools />}
        </section>
    );
}

export default Skills;
