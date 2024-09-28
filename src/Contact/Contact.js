import React from "react";

function Contact() {
    return <section id="contact" className="font-jetBrains mx-40 gap-x-32 my-24">
        <div className="text-center">
            <h1 className="font-bold text-5xl mb-20">Contact</h1>
            <a className="text-3xl font-medium p-3 px-8 bg-[#222831] rounded-tr-[40px] rounded-bl-[40px] border-[3px] border-cyan-400">Send Me A Message</a>

            <form>
                <div className="flex justify-between mt-16 space-x-10 mb-7">
                    <div className="mb-4 w-full mr-2">
                        <label className="block font-medium text-left">
                            Your name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="mt-1 block w-full bg-[#222831] border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:border-2 focus:border-cyan-400"
                            required
                        />
                    </div>

                    <div className="mb-4 w-full mr-2">
                        <label className="block font-medium text-left">
                            Your email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="mt-1 block w-full bg-[#222831] border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:border-2 focus:border-cyan-400"
                            required
                        />
                    </div>
                </div>

                <div className="mb-7">
                    <label className="block font-medium text-left">
                        Your message
                    </label>
                    <textarea
                        placeholder="Enter your needs"
                        className="mt-1 block w-full bg-[#222831] border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:border-2 focus:border-cyan-400"
                        required
                    ></textarea>
                </div>

                <button
                    type="Send Message"
                    className="px-10 bg-teal-600 text-white py-2 rounded-md hover:bg-teal-500 transition duration-200"
                >
                    Submit
                </button>
            </form>
        </div>


    </section>;
}

export default Contact;
