import React from "react";
import photo from '../Assets/NORE_TIFANI03452.JPG'

function AboutMe() {
    return <section id="about" className="mx-40 flex justify-between gap-x-32 mb-24">
        <div className="flex-shrink-0">
            <img src={photo} className="w-[300px] h-[500px]"></img>
        </div>

        <div className="font-jetBrains space-y-7 mt-10">
            <h1 className="text-5xl font-bold">About Me</h1>
            <h2 style={{ backgroundColor: "#222831" }} className="rounded-3xl p-10">
                <span className="text-red-400">&lt;h2&gt;</span>
                <h2 className="ml-10 my-2">
                    I am a Computer Science student at Binus University with a strong passion for software engineering.
                    My focus lies in mastering the principles and practices that make software development efficient,
                    reliable, and scalable.
                    <br /><br />
                    From understanding version control systems (both centralized and distributed) to ensuring software
                    quality through comprehensive testing strategies and Quality Assurance (QA), I aim to build robust,
                    high-quality applications.
                </h2>
                <span className="text-red-400">&lt;/h2&gt;</span>
            </h2>
        </div>
    </section>;
}

export default AboutMe;
