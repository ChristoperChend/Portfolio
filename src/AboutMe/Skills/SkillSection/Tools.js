import React from "react";
import SkillCard from "./SkillCard";
import figma from '../../../Assets/Figma.svg'
import github from '../../../Assets/Github.svg'
import git from '../../../Assets/Git.svg'
import firebase from '../../../Assets/Firebase.svg'
import mysql from '../../../Assets/MySQL.svg'

function TechStack() {
    return <div className="flex flex-wrap justify-start gap-x-14">
        <SkillCard icon={figma} name="Figma" level="Advanced"/>
        <SkillCard icon={github} name="GitHub" level="Intermediate"/>
        <SkillCard icon={git} name="Git" level="Intermediate"/>
        <SkillCard icon={firebase} name="Firebase" level="Advanced"/>
        <SkillCard icon={mysql} name="MySQL" level="Intermediate"/>
    </div>;
}

export default TechStack;
