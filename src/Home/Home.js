import React from "react";
import { ReactTyped } from "react-typed";
import DeveloperCard from "../Card/MyCard";
import gitHubIcon from '../Assets/Github.svg'
import linkedInIcon from '../Assets/LinkedIn.svg'
import discordIcon from '../Assets/Discord.svg'

function HomePage() {
    return <section id="home" className="mt-24 mx-14 h-screen items-center sm:flex sm:mt-0 md:mx-12 md:gap-x-12 xl:mx-40 xl:gap-x-32">
        <div className="font-jetBrains space-y-3 xl:mt-20">
            <h1 className="text-lg font-bold xl:text-3xl md:text-2xl">WELCOME!</h1>
            <h2 className="text-xl font-bold xl:text-5xl md:text-2xl">
                I Am{' '}
                <ReactTyped
                    className="text-cyan-400"
                    strings={['Software Engineer', 'Mobile Developer', 'Web Developer']}
                    typeSpeed={70}
                    backSpeed={50}
                    loop
                />
            </h2>
            <div className="md:text-base xl:text-lg">
                <span className="text-red-400">&lt;h3&gt;</span>
                <h3 className="ml-10 my-2">
                    Hello! I'm Christoper Chendra, with a passion for developing in various languages
                    that can be used for commercial businesses.
                </h3>
                <span className="text-red-400">&lt;/h3&gt;</span>
            </div>

            <div className="space-y-3">
                <h1 className="md:text-base xl:text-lg">Connect with me</h1>
                <span className="flex space-x-5">
                    <a
                        href="https://github.com/ChristoperChend"
                        target="_blank"
                        aria-label="GitHub profile">
                        <img
                            src={gitHubIcon}
                            alt="GitHub icon"
                            className="w-8 h-8 transition duration-300 ease-in-out hover:invert hover:brightness-0"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/christoper-chendra/"
                        target="_blank"
                        aria-label="LinkedIn profile">
                        <img
                            src={linkedInIcon}
                            alt="LinkedIn icon"
                            className="w-8 h-8 transition duration-300 ease-in-out hover:invert hover:brightness-0"
                        />
                    </a>
                    <a
                        href="https://www.discord.com/users/443479853048659978"
                        target="_blank"
                        aria-label="Discord profile">
                        <img
                            src={discordIcon}
                            alt="Discord icon"
                            className="w-8 h-8 transition duration-300 ease-in-out hover:invert hover:brightness-0"
                        />
                    </a>
                </span>
            </div>
        </div>

        <div className="mt-5 flex justify-center">
            <DeveloperCard />
        </div>
    </section>;
}

export default HomePage;
