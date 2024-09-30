import React from "react";
import SkillCard from "./SkillCard";
import html from '../../../Assets/Html.svg'
import css from '../../../Assets/Css.svg'
import flutter from '../../../Assets/Flutter.svg'
import react from '../../../Assets/React.svg'
import js from '../../../Assets/Js.svg'
import tailwind from '../../../Assets/Tailwind.svg'
import java from '../../../Assets/Java.svg'
import kotlin from '../../../Assets/Kotlin.svg'
import android from '../../../Assets/Android.svg'
import python from '../../../Assets/Python.svg'
import aspNet from '../../../Assets/AspNet.svg'
import c from '../../../Assets/c.svg'

function TechStack() {
    return <div className="flex flex-wrap justify-start gap-x-14">
        <SkillCard icon={flutter} name="Flutter" level="Intermediate"/>
        <SkillCard icon={react} name="React" level="Intermediate"/>
        <SkillCard icon={html} name="HTML" level="Advanced"/>
        <SkillCard icon={css} name="CSS" level="Advanced"/>
        <SkillCard icon={js} name="Javascript" level="Intermediate"/>
        <SkillCard icon={tailwind} name="Tailwind" level="Intermediate"/>
        <SkillCard icon={java} name="Java" level="Advance"/>
        <SkillCard icon={kotlin} name="Kotlin" level="Beginner"/>
        <SkillCard icon={android} name="Android" level="Beginner"/>
        <SkillCard icon={python} name="Python" level="Intermediate"/>
        <SkillCard icon={aspNet} name="ASP.NET" level="Intermediate"/>
        <SkillCard icon={c} name="C++" level="Intermediate"/>
    </div>;
}

export default TechStack;
