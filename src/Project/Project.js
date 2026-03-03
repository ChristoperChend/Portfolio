import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import resQ from '../Assets/ResQ.png'
import allergyDiary from '../Assets/AllergyDiary.png'
import yourList from '../Assets/YourList.png'
import codeReengineering from '../Assets/CodeReengineering.png'
import eRamen from '../Assets/ERamen.png'
import calm from '../Assets/Calm.png'
import portfolio from '../Assets/Portfolio.png'
import flutter from '../Assets/Flutter.svg'
import firebase from '../Assets/Firebase.svg'
import html from '../Assets/Html.svg'
import css from '../Assets/Css.svg'
import js from '../Assets/Js.svg'
import figma from '../Assets/Figma.svg'
import react from '../Assets/React.svg'
import tailwind from '../Assets/Tailwind.svg'
import laravel from '../Assets/laravel-2.svg'
import mysql from '../Assets/mysql-3.svg'
import pawslife from '../Assets/PawsLife.png'


function Project() {
    const [showMoreProjects, setShowMoreProjects] = useState(false);

    const toggleShowMoreProjects = () => {
        setShowMoreProjects(!showMoreProjects);
    };

    return <section id="project" className="mx-6 sm:mx-16 font-jetBrains flex flex-col justify-center items-center pt-28 md:mx-24 lg:mx-32 xl:mx-40">
        <div className="w-full max-w-7xl">
            <div className="flex flex-col items-center mb-12 sm:mb-16 text-center">
                <h1 className="text-3xl font-extrabold sm:text-4xl md:text-5xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 tracking-tight">
                    Explore My Projects
                </h1>
                <div className="h-1 w-20 bg-cyan-500 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 gap-10 md:gap-14 lg:gap-16 pb-12">
                <ProjectCard
                    projectImage={pawslife}
                    projectName="PawsLife - Pet Adoption Application"
                    projectExplaination="PawsLife is a web-based pet adoption platform using Laravel to connect shelters with adopters, featuring pet listings, adoption requests, and verification workflows to streamline and digitize the adoption process."
                    projectIcon1={laravel}
                    projectIcon2={mysql}
                    projectIcon3={js}
                    projectSourceCode="https://github.com/ChristoperChend/Pawslife"
                    projectLiveDemo="https://pawslife.my.id/adopter/beranda"
                />

                <ProjectCard
                    projectImage={allergyDiary}
                    projectName="Allergy Diary - Health Application"
                    projectExplaination="Allergy Diary is a mobile application created to address problems frequently faced by people with allergies."
                    projectIcon1={flutter}
                    projectIcon2={firebase}
                    projectSourceCode="https://github.com/ChristoperChend/allergy-diary"
                    projectLiveDemo="https://binusianorg-my.sharepoint.com/personal/dwi_khaerakinanti_binus_ac_id/_layouts/15/guestaccess.aspx?share=EVqe6BrPY2dOkRwcm3kB_4wBydJZsmTLkMwvRQte1VTYBQ&e=fLxEvx"
                />

                <ProjectCard
                    projectImage={resQ}
                    projectName="ResQ - Emergency Application"
                    projectExplaination="ResQ is a mobile emergency response application that can provide guidance to users in the event of an emergency."
                    projectIcon1={flutter}
                    projectIcon2={firebase}
                    projectSourceCode="https://github.com/ChristoperChend/ResQ"
                    projectLiveDemo="https://www.youtube.com/watch?v=9iF7tE6tk98"
                />

                <ProjectCard
                    projectImage={portfolio}
                    projectName="Portfolio - Personal Website"
                    projectExplaination="This is my personal portfolio where I showcase my projects and skills in front-end development using React."
                    projectIcon1={react}
                    projectIcon2={tailwind}
                    projectSourceCode="https://github.com/ChristoperChend/Portfolio"
                    projectLiveDemo="http://chend-portfolio.vercel.app/"
                />

                {showMoreProjects && (
                    <div className="grid grid-cols-1 gap-10 md:gap-14 lg:gap-16 animate-fade-in-up">
                        <ProjectCard
                            projectImage={yourList}
                            projectName="YourList - ToDo List Website"
                            projectExplaination="To-Do List website is to allow users to manage tasks easily. It helps in organizing daily activities."
                            projectIcon1={html}
                            projectIcon2={css}
                            projectIcon3={js}
                            projectSourceCode="https://github.com/ChristoperChend/ChristoperChend-GDSCUI-WebDev-ChristoperChendra.github.io"
                            projectLiveDemo="https://christoperchend.github.io/ChristoperChend-GDSCUI-WebDev-ChristoperChendra.github.io/"
                        />

                        <ProjectCard
                            projectImage={codeReengineering}
                            projectName="Bad Code - Explanation Website"
                            projectExplaination="This website explains about Bad Code Smell taken from Refactoring guru and Source Making."
                            projectIcon1={html}
                            projectIcon2={css}
                            projectSourceCode="https://github.com/ChristoperChend/Code-Reengineering"
                            projectLiveDemo="https://christoperchend.github.io/Code-Reengineering/"
                        />

                        <ProjectCard
                            projectImage={eRamen}
                            projectName="ERamen - Food Website"
                            projectExplaination="ERamen is a website offering a diverse range of ramen dishes from our shop with premium ingredients."
                            projectIcon1={html}
                            projectIcon2={css}
                            projectSourceCode="https://github.com/ChristoperChend/ERamen"
                            projectLiveDemo="https://christoperchend.github.io/ERamen/"
                        />

                        <ProjectCard
                            projectImage={calm}
                            projectName="Calm - Health Website Design"
                            projectExplaination="Calm is an online counseling website with licensed psychologists and psychiatrists to support mental health."
                            projectIcon1={figma}
                            projectSourceCode="https://www.figma.com/design/EX3m7ih43oBl91TmQkTXlp/2602067054---Christoper-Chendra-(-UTS-HCI-)?m=auto&t=tqjtl3YaERqu3Cqp-6"
                        />
                    </div>
                )}

                <div className="flex justify-center mt-8">
                    <button
                        onClick={toggleShowMoreProjects}
                        className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-800 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-600 hover:bg-gray-700 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] border border-gray-600 hover:border-cyan-400"
                    >
                        {showMoreProjects ? "Show Less Projects" : "Explore More Projects"}
                        <svg className={`w-5 h-5 ml-2 transition-transform duration-300 ${showMoreProjects ? 'rotate-180' : 'group-hover:translate-y-1'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                </div>
            </div>
        </div>
    </section>;
}

export default Project;
