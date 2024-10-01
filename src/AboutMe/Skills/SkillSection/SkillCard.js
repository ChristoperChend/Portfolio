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

    return <section className="font-jetBrains sm:mt-3">
        <div className="bg-[#303030] p-5 flex border-2 rounded-lg space-x-3 hover:bg-[#252525] my-3 min-h-[80px] min-w-auto xl:my-7 xl:space-x-5 xl:min-h-[85px] xl:min-w-[250px]" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={icon} className="mt-1.5 w-5 h-5 md:w-6 md:h-6 md:mt-2 lg:w-8 lg:h-8 lg:mt-0 xl:w-10 xl:h-10"></img>
            <div className="flex flex-col items-start">
                <h1 className={`text-xs transition-all duration-300 lg:text-sm xl:text-base ${isHovered ? "transform -translate-y-1" : "translate-y-2 "
                    }`}>{name}</h1>
                {isHovered && (
                    <h1 className="text-xs text-gray-400 text-left">{level}</h1>
                )}
            </div>
        </div>
    </section>;
}

export default SkillCard;
