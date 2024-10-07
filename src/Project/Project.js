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


function Project() {
    const [showMoreProjects, setShowMoreProjects] = useState(false);

    const toggleShowMoreProjects = () => {
        setShowMoreProjects(!showMoreProjects);
    };

    return <section id="project" className="mx-16 font-jetBrains flex flex-row justify-center items-center gap-x-16 pt-28 md:mx-24 lg:mx-32 xl:mx-40">
        <div>
            <h1 className="mb-6 text-xl font-bold sm:mb-10 sm:text-4xl">Explore My Project</h1>

            <div className="space-y-20 pb-10">
                <ProjectCard
                    projectImage={allergyDiary}
                    projectName="Allergy Diary - Health Application"
                    projectExplaination="Allergy Diary is a mobile application created to address problems frequently faced by people with allergies."
                    projectIcon1={flutter}
                    projectIcon2={firebase}
                    projectSourceCode="https://github.com/ChristoperChend/allergy-diary"
                    projectLiveDemo="https://binusianorg-my.sharepoint.com/personal/dwi_khaerakinanti_binus_ac_id/_layouts/15/stream.aspx?id=%2Fpersonal%2Fdwi_khaerakinanti_binus_ac_id%2FDocuments%2FVideo%20Demo%20Allergy%20Diary%2Emov&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E7368e68b-c6a0-454c-accb-ff17028d9b02"
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
                    projectSourceCode="https://github.com/ChristoperChend/Portfolio"
                    projectLiveDemo="http://chend-portfolio.vercel.app/"
                />

                {showMoreProjects && (
                    <>
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
                    </>
                )}

                <button onClick={toggleShowMoreProjects} className="border-2 p-[7px] rounded-xl px-4 font-medium hover:text-cyan-400 mx-auto block bg-[#222831] text-xl hover:scale-110 transition-all duration-200">
                    {showMoreProjects ? "Show Less" : "More Projects"}
                </button>
            </div>
        </div>
    </section>;
}

export default Project;
