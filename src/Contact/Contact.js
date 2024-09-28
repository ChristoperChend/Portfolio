import React from "react";
import Swal from 'sweetalert2'

function Contact() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "ce67e46a-d2ab-4b8a-bed8-93636833fab7");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
            });
        }
    };

    return <section id="contact" className="font-jetBrains mx-40 gap-x-32 my-24">
        <div className="text-center">
            <h1 className="font-bold text-5xl mb-20">Contact</h1>
            <a className="text-3xl font-medium p-3 px-8 bg-[#222831] rounded-tr-[40px] rounded-bl-[40px] border-[3px] border-cyan-400">Send Me A Message</a>

            <form onSubmit={onSubmit}>
                <div className="flex justify-between mt-16 space-x-10 mb-7">
                    <div className="mb-4 w-full mr-2">
                        <label className="block font-medium text-left">
                            Your name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="mt-1 block w-full bg-[#222831] border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:border-2 focus:border-cyan-400"
                            name="Name"
                            autoComplete="off"
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
                            name="Email"
                            autoComplete="off"
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
                        name="Message"
                        autoComplete="off"
                        required
                    ></textarea>
                </div>

                <button type="submit" className="px-7 bg-teal-600 text-white py-2 rounded-md hover:bg-teal-500 transition duration-200">
                    Send Message
                </button>
            </form>
        </div>


    </section>;
}

export default Contact;
