import React from "react";
import Skills from "./Skills/Skills";

function AboutMe() {
    return <section className="mt-28 mx-14 justify-center lg:mx-24 xl:mx-40">
        <div className="gap-x-10 flex flex-col lg:flex-row md:flex-row lg:gap-x-14 xl:flex-row xl:gap-x-16">
            <div className="flex-shrink-0 flex justify-center mb-5">
                <img className="mt-5 w-[180px] h-[280px] md:w-[240px] md:h-[340px] lg:w-[270px] lg:h-[380px] xl:w-[320px] xl:h-[500px]"></img>
            </div>

            <div className="font-jetBrains space-y-3 md:mt-5 xl:space-y-7 xl:mt-2">
                <h1 className="text-xl text-center font-bold lg:text-3xl lg:mt-10 xl:text-5xl">About Me</h1>
                <h2 style={{ backgroundColor: "#252525" }} className="p-5 rounded-3xl text-xs md:text-sm lg:text-sm xl:p-10 xl:text-base">
                    <span className="text-red-400">&lt;h2&gt;</span>
                    <h2 className="ml-10 my-2 font-light">
                        I am a Computer Science student at Binus University with a strong passion for <b className="font-ibm text-orange-600 bg-[#404040] px-1 rounded-md font-bold">Mobile Development</b>.
                        My focus lies in mastering the principles and practices that make mobile app development efficient,
                        user-friendly, and scalable.
                        <br /><br />
                        I'm passionate about creating seamless mobile experiences, and my hands-on work has given me the
                        practical skills needed to deliver polished, professional apps.
                    </h2>
                    <span className="text-red-400">&lt;/h2&gt;</span>
                </h2>
            </div>
        </div>

        <Skills />
    </section>;
}

export default AboutMe;
