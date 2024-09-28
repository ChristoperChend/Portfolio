import React from "react";
import { ReactTyped } from "react-typed";
import photo from '../Assets/NORE_FEREN03399.JPG'
import DeveloperCard from "../Card/MyCard";
import gitHubIcon from '../Assets/Github.svg'
import instagramIcon from '../Assets/Instagram.svg'
import linkedInIcon from '../Assets/LinkedIn.svg'
import discordIcon from '../Assets/Discord.svg'

function HomePage() {
    return <section id="home" className="mx-40 flex justify-between gap-x-32 mb-24 items-center">
        <div className="font-jetBrains space-y-3 mt-32">
            <h1 className="text-3xl font-bold">WELCOME!</h1>
            <h2 className="text-5xl font-bold">
                I Am{' '}
                <ReactTyped 
                className="text-cyan-400"
                    strings={['Software Engineer', 'Mobile Developer', 'Web Developer']}
                    typeSpeed={70}
                    backSpeed={50}
                    loop
                />
            </h2>
            <h3>
                <span className="text-red-400">&lt;h3&gt;</span>
                <h3 className="ml-10 my-2">
                    Hello! I'm Christoper Chendra, with a passion for developing in various languages
                    that can be used for commercial businesses
                </h3>
                <span className="text-red-400">&lt;/h3&gt;</span>
            </h3>

            <div>
                <span className="flex space-x-7 ml-5">
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
                        href="https://www.instagram.com/chr.chend/"
                        target="_blank"
                        aria-label="Instagram profile">
                        <img
                            src={instagramIcon}
                            alt="Instagram icon"
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

        <DeveloperCard />
    </section>;
}

export default HomePage;
