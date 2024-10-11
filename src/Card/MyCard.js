import React from 'react';
import CV from '../Assets/CV.pdf'
import envelop from '../Assets/Envelop.svg'
import job from '../Assets/Suitcase.svg'
import location from '../Assets/Location.svg'

const DeveloperCard = () => {
    return (
        <div className="items-center">
            <div className="font-jetBrains border-x-4 border-cyan-400 text-white w-[300px] rounded-tl-[80px] rounded-br-[80px] p-8 sm:p-7 xl:rounded-tl-[150px] xl:rounded-br-[150px] xl:w-[350px] md:w-[300px]">

                <div className="flex justify-center">
                    <img
                        src="https://avatars.githubusercontent.com/u/9919?s=280&v=4"
                        alt="Developer avatar"
                        className="w-20 h-20 rounded-full border-2 border-cyan-500 xl:w-24 xl:h-24"
                    />
                </div>


                <div className="text-center mt-4">
                    <h2 className="font-semibold md:text-lg xl:text-2xl">Christoper Chendra</h2>
                    <p className="text-cyan-400">Application Developer</p>
                </div>


                <div className="mt-4 flex justify-center">
                    <ul className="text-xs xl:text-sm space-y-2 md:text-xs">
                        <li className="flex items-center space-x-2">
                            <img src={envelop} className='w-4'></img>
                            <span>christoper.chendra15@gmail.com</span>
                        </li>
                        <li className="flex items-center space-x-2">
                        <img src={location} className='w-4'></img>
                            <span>Indonesia</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <img src={job} className='w-4'></img>
                            <span>Full-time / Freelancer</span>
                        </li>
                    </ul>
                </div>

                <div className="mt-6 flex justify-center">
                    <a
                        href={CV}
                        download
                        className="bg-white text-gray-800 px-5 py-2 rounded-full text-sm font-medium flex items-center space-x-2 hover:bg-gray-300"
                    >
                        <span>Download CV</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DeveloperCard;
