import React, { useState } from "react";
import SkillCard from "./SkillSection/SkillCard";
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
        <section className="font-jetBrains mt-16">
            <div className="space-y-4">
                <h1 className="text-2xl font-medium">Skills</h1>
                <div className="flex space-x-5 font-normal">
                    <h1
                        className={`p-2 rounded-lg px-4 font-medium hover:scale-110 transition-transform duration-200 bg-[#393E46] cursor-pointer ${activeTab === "techStack" ? "text-cyan-400 scale-110" : ""}`}
                        onClick={showTechStack}
                    >
                        Tech Stack
                    </h1>
                    <h1
                        className={`p-2 rounded-lg px-4 font-medium hover:scale-110 transition-transform duration-200 bg-[#393E46] cursor-pointer ${activeTab === "tools" ? "text-cyan-400 scale-110" : ""}`}
                        onClick={showTools}
                    >
                        Tools
                    </h1>
                </div>
            </div>

            {/* Conditional Rendering */}
            {activeTab === "techStack" && <TechStack />}
            {activeTab === "tools" && <Tools />}
        </section>
    );
}

export default Skills;
