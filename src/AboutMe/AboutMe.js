import React from "react";
import Skills from "./Skills/Skills";

function AboutMe() {
    return <section className="flex flex-col justify-center mx-40 mt-28">
        <div className="flex flex-row gap-x-16">
            <div className="flex-shrink-0">
                <img className="w-[300px] h-[450px]"></img>
            </div>

            <div className="font-jetBrains space-y-7 mt-10">
                <h1 className="text-5xl font-bold">About Me</h1>
                <h2 style={{ backgroundColor: "#252525" }} className="rounded-3xl p-10">
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
