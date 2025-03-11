import React from "react";

const Navbar: React.FC = () => {
    return (
        <nav className="shadow-md md:flex hidden fixed top-0 w-full bg-white z-10">
            <div className="px-8 py-8 flex justify-end items-center w-full">
                <div className="flex space-x-6">
                    <a
                        href="#about"
                        className="text-xl font-semibold hover:text-orange-700 focus:outline-none"
                    >
                        About Me
                    </a>
                    <a
                        href="#skills"
                        className="text-xl font-semibold hover:text-orange-700 focus:outline-none"
                    >
                        Skills
                    </a>
                    <a
                        href="#projects"
                        className="text-xl font-semibold hover:text-orange-700 focus:outline-none"
                    >
                        Projects
                    </a>
                    <a
                        href="#experience"
                        className="text-xl font-semibold hover:text-orange-700 focus:outline-none"
                    >
                        Experience
                    </a>
                    <a
                        href="#contact"
                        className="text-xl font-semibold hover:text-orange-700 focus:outline-none"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
