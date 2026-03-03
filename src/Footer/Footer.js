import React from "react";

function Footer() {
    return <section className="w-full bg-[#1e2329] border-t border-gray-800/50 text-gray-400 font-rubik py-6 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-center items-center transition-all duration-300 gap-4">
            <h1 className="text-center">
                &copy; {new Date().getFullYear()} <span className="text-cyan-500 font-semibold">Christoper Chendra</span>. All rights reserved.
            </h1>
        </div>
    </section>;
}

export default Footer;
