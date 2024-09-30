import React from 'react';
import CV from '../Assets/Profile.pdf'
import envelop from '../Assets/Envelop.svg'
import job from '../Assets/Suitcase.svg'
import location from '../Assets/Location.svg'

const DeveloperCard = () => {
    return (
        <div className="items-center">
            <div className="font-jetBrains text-white p-7 rounded-tl-[150px] rounded-br-[150px] w-[350px] border-x-4 border-cyan-400">

                <div className="flex justify-center">
                    <img
                        src="https://avatars.githubusercontent.com/u/9919?s=280&v=4"
                        alt="Developer avatar"
                        className="w-24 h-24 rounded-full border-2 border-cyan-500"
                    />
                </div>


                <div className="text-center mt-4">
                    <h2 className="text-2xl font-semibold">Christoper Chendra</h2>
                    <p className="text-cyan-400">Sofware Engineer</p>
                </div>


                <div className="mt-4">
                    <ul className="text-sm space-y-2">
                        <li className="flex items-center space-x-2">
                            <img src={envelop} className='w-5'></img>
                            <span>christoper.chendra15@gmail.com</span>
                        </li>
                        <li className="flex items-center space-x-2">
                        <img src={job} className='w-5 h-5'></img>
                            <span>Indonesia</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <img src={location} className='w-5 h-5'></img>
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
