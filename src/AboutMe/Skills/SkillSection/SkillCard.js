import React from "react";
import { useState } from "react";

function SkillCard({ icon, name, level }) {
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return <section className="font-jetBrains mt-3">
        <div className="bg-[#303030] p-4 flex border-2 rounded-lg space-x-5 hover:bg-[#252525] my-7 min-h-[85px] min-w-[250px]" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={icon} className="w-10 h-10"></img>
            <div className="flex flex-col items-start">
                <h1 className={`transition-all duration-300 ${isHovered ? "transform -translate-y-1" : "translate-y-2"
                    }`}>{name}</h1>
                {isHovered && (
                    <h1 className="text-sm text-gray-400 text-left">{level}</h1>
                )}
            </div>
        </div>
    </section>;
}

export default SkillCard;
