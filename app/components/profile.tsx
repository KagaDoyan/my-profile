'use client';

import { useRef } from "react";
import { QRCodeSVG } from 'qrcode.react';

export default function Profile() {
    const work_year = new Date().getFullYear() - 2021;
    // make a ref to the element
    const About = useRef<HTMLDivElement>(null);
    const Experience = useRef<HTMLDivElement>(null);
    const Education = useRef<HTMLDivElement>(null);
    const Skills = useRef<HTMLDivElement>(null);
    const Languages = useRef<HTMLDivElement>(null);

    const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="flex flex-col">
            <div className="hidden md:block">
                <nav className="fixed top-0 left-0 right-0 shadow-md z-10 p-4">
                    <ul className="flex justify-end p-4 gap-8">
                        <li className="cursor-pointer hover:text-orange-500 font-semibold text-lg" onClick={() => scrollToSection(About)}>About</li>
                        <li className="cursor-pointer hover:text-orange-500 font-semibold text-lg" onClick={() => scrollToSection(Skills)}>Skills</li>
                        <li className="cursor-pointer hover:text-orange-500 font-semibold text-lg" onClick={() => scrollToSection(Experience)}>Experience</li>
                        <li className="cursor-pointer hover:text-orange-500 font-semibold text-lg" onClick={() => scrollToSection(Education)}>Education</li>
                        <li className="cursor-pointer hover:text-orange-500 font-semibold text-lg" onClick={() => scrollToSection(Languages)}>Languages</li>
                    </ul>
                </nav>
            </div>
            <div className="md:hidden fixed bottom-0 left-0 right-0 shadow-md z-10 p-4 bg-gray-900">
                <ul className="flex justify-around p-4 gap-4">
                    <li className="cursor-pointer hover:text-orange-500 font-semibold text-lg" onClick={() => scrollToSection(About)}>About</li>
                    <li className="cursor-pointer hover:text-orange-500 font-semibold text-lg" onClick={() => scrollToSection(Skills)}>Skills</li>
                    <li className="cursor-pointer hover:text-orange-500 font-semibold text-lg" onClick={() => scrollToSection(Experience)}>Experience</li>
                    <li className="cursor-pointer hover:text-orange-500 font-semibold text-lg" onClick={() => scrollToSection(Education)}>Education</li>
                    <li className="cursor-pointer hover:text-orange-500 font-semibold text-lg" onClick={() => scrollToSection(Languages)}>Languages</li>
                </ul>
            </div>
            <div className="min-h-screen flex flex-col items-center mt-32">
                <div ref={About} className="flex flex-col lg:flex-row w-full max-w-6xl p-8 min-h-screen items-center justify-center">
                    <div className="lg:w-2/3">
                        <h1 className="text-3xl font-bold">
                            <span className="text-orange-600">HELLO!</span>
                        </h1>
                        <h1 className="text-4xl font-bold mt-2">
                            I Am Phanoudeth Thonsavath.
                        </h1>
                        <p className="text-xl mt-4 p-4 rounded-lg shadow-lg">
                            I'm a passionate developer with {work_year} years of experience in backend development, specializing in Golang and Nodejs. Alongside my backend expertise, I also have skills in website development, enabling me to contribute to full-stack solutions effectively. I'm always eager to learn and take on new challenges to create impactful software.
                        </p>
                        <div className="mt-4">
                            <p className="text-xl"><strong>Phone:</strong> +8562056892644</p>
                            <p className="text-xl"><strong>Email:</strong> panoudeth@gmail.com</p>
                        </div>
                    </div>
                    <div className="mt-20 lg:w-1/3 flex flex-col justify-center items-center">
                        <img src="/image/static/qr.png" alt="qr code" />
                        <button
                            className="mt-4 text-lg font-semibold bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition-colors duration-300"
                            onClick={() => {
                                const vCardData = `BEGIN:VCARD\nVERSION:3.0\nFN:Phanoudeth Thonsavath\nTEL:+8562056892644\nEMAIL:panoudeth@gmail.com\nEND:VCARD`;
                                const blob = new Blob([vCardData], { type: 'text/vcard' });
                                const url = URL.createObjectURL(blob);
                                const a = document.createElement('a');
                                a.href = url;
                                a.download = 'contact.vcf';
                                a.click();
                                URL.revokeObjectURL(url);
                            }}
                        >
                            Add me
                        </button>
                    </div>
                </div>
                <div className="w-full max-w-6xl p-8 mt-20 min-h-screen flex flex-col items-center justify-center" ref={Skills}>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="space-y-6 p-8">
                            <h2 className="text-4xl font-bold border-b border-gray-300 pb-2">Skills</h2>
                            <div className="space-y-4">
                                <div>
                                    <h2 className="text-xl font-semibold">Programming Languages:</h2>
                                    <p className="text-xl">Golang, Python, C#, PHP, JavaScript, TypeScript, etc.</p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold">Frameworks:</h2>
                                    <p className="text-xl">React, Next.js, Svelte, Express, Fiber, Elysia, etc.</p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold">Tools:</h2>
                                    <p className="text-xl">Git, Docker, Jenkins, etc.</p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold">Databases:</h2>
                                    <p className="text-xl">PostgreSQL, MySQL, MongoDB, etc.</p>
                                </div>
                            </div>
                        </div>
                        {/* background near transparent/white */}
                        <div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border border-gray-300 p-8 rounded-md">
                                <div className="flex justify-center items-center p-2 rounded-lg h-24 hover:transform hover:translate-y-[-5px] transition-transform duration-300">
                                    <img
                                        src="/image/static/golang.png"
                                        alt="Logo"
                                        className="w-14 h-14 object-contain hover:transform hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="flex justify-center items-center p-2 rounded-lg h-24 hover:transform hover:translate-y-[-5px] transition-transform duration-300">
                                    <img
                                        src="/image/static/type.png"
                                        alt="Logo"
                                        className="w-14 h-14 object-contain hover:transform hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="flex justify-center items-center p-2 rounded-lg h-24 hover:transform hover:translate-y-[-5px] transition-transform duration-300">
                                    <img
                                        src="/image/static/c_sh.png"
                                        alt="Logo"
                                        className="w-20 h-20 object-contain hover:transform hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="flex justify-center items-center p-2 rounded-lg h-24 hover:transform hover:translate-y-[-5px] transition-transform duration-300">
                                    <img
                                        src="/image/static/fiber.png"
                                        alt="Logo"
                                        className="w-18 h-18 object-contain hover:transform hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="flex justify-center items-center p-2 rounded-lg h-24 hover:transform hover:translate-y-[-5px] transition-transform duration-300">
                                    <img
                                        src="/image/static/elysia_v.webp"
                                        alt="Logo"
                                        className="w-18 h-18 object-contain hover:transform hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="flex justify-center items-center p-2 rounded-lg h-24 hover:transform hover:translate-y-[-5px] transition-transform duration-300">
                                    <img
                                        src="/image/static/react.png"
                                        alt="Logo"
                                        className="w-18 h-18 object-contain hover:transform hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="flex justify-center items-center p-2 rounded-lg h-24 hover:transform hover:translate-y-[-5px] transition-transform duration-300">
                                    <img
                                        src="/image/static/svelte.png"
                                        alt="Logo"
                                        className="w-14 h-14 object-contain hover:transform hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="flex justify-center items-center p-2 rounded-lg h-24 hover:transform hover:translate-y-[-5px] transition-transform duration-300">
                                    <img
                                        src="/image/static/docker.webp"
                                        alt="Logo"
                                        className="w-14 h-14 object-contain hover:transform hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="flex justify-center items-center p-2 rounded-lg h-24 hover:transform hover:translate-y-[-5px] transition-transform duration-300">
                                    <img
                                        src="/image/static/jenkin.png"
                                        alt="Logo"
                                        className="w-14 h-14 object-contain hover:transform hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="flex justify-center items-center p-2 rounded-lg h-24 hover:transform hover:translate-y-[-5px] transition-transform duration-300">
                                    <img
                                        src="/image/static/postgresql.png"
                                        alt="Logo"
                                        className="w-14 h-14 object-contain hover:transform hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="flex justify-center items-center p-2 rounded-lg h-24 hover:transform hover:translate-y-[-5px] transition-transform duration-300">
                                    <img
                                        src="/image/static/mysql.webp"
                                        alt="Logo"
                                        className="w-18 h-18 object-contain hover:transform hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="flex justify-center items-center p-2 rounded-lg h-24 hover:transform hover:translate-y-[-5px] transition-transform duration-300">
                                    <img
                                        src="/image/static/mgdb.png"
                                        alt="Logo"
                                        className="w-14 h-14 object-contain hover:transform hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 col-span-2">
                            <div className="space-y-6 p-8">
                                <h2 className="text-4xl font-bold border-b border-gray-300 pb-2">Skill Levels</h2>
                                <div className="space-y-4">
                                    <div>
                                        <h2 className="text-xl font-semibold">Backend Development:</h2>
                                        <div className="relative pt-1">
                                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-orange-200">
                                                <div style={{ width: '90%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold">Logic:</h2>
                                        <div className="relative pt-1">
                                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-orange-200">
                                                <div style={{ width: '90%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold">Frontend Development:</h2>
                                        <div className="relative pt-1">
                                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-orange-200">
                                                <div style={{ width: '70%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold">DevOps:</h2>
                                        <div className="relative pt-1">
                                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-orange-200">
                                                <div style={{ width: '50%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold">UX/UI Design:</h2>
                                        <div className="relative pt-1">
                                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-orange-200">
                                                <div style={{ width: '30%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-6xl p-8 mt-20 min-h-screen flex flex-col items-center justify-center" ref={Experience}>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="space-y-6 p-8">
                            <h1 className="text-4xl font-bold border-b border-gray-300 pb-2">Experience</h1>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <img src="/image/static/LTC.png" alt="Lao Telecom" className="w-16 h-16 object-contain bg-white rounded-full" />
                                    <div>
                                        <h2 className="text-lg font-semibold">Lao Telecom</h2>
                                        <p className="text-md text-gray-400">Backend Developer (2021-2022)</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <img src="/image/static/kokkok.jpg" alt="Kokkok Company" className="w-16 h-16 object-contain round rounded-full" />
                                    <div>
                                        <h2 className="text-lg font-semibold">Kokkok Company (Kolao)</h2>
                                        <p className="text-md text-gray-400">Backend Developer (2022-2023)</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <img src="/image/static/kolao.png" alt="Kolao HQ" className="w-16 h-16 object-contain rounded-full" />
                                    <div>
                                        <h2 className="text-lg font-semibold">Kolao HQ</h2>
                                        <p className="text-md text-gray-400">Backend Developer (2023-Present)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6 p-8">
                            <h1 className="text-4xl font-bold border-b border-gray-300 pb-2">Education</h1>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <div>
                                        <h2 className="text-lg font-semibold">Vientiane Secondary School</h2>
                                        <p className="text-md text-gray-400">Graduated</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div>
                                        <h2 className="text-lg font-semibold">Soutsaka College</h2>
                                        <p className="text-md text-gray-400">Faculty of Computer Science and Engineering - Graduated</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="w-full max-w-6xl p-8 mt-20 min-h-screen flex flex-col items-center justify-center" ref={Languages}>
                    <div className="space-y-6 p-8">
                        <h1 className="text-4xl font-bold border-b border-gray-300 pb-2">Languages</h1>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <div>
                                    <h2 className="text-xl font-semibold">Lao</h2>
                                    <p className="text-lg text-gray-400">Native</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div>
                                    <h2 className="text-xl font-semibold">Thai</h2>
                                    <p className="text-lg text-gray-400">Intermediate</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div>
                                    <h2 className="text-xl font-semibold">English</h2>
                                    <p className="text-lg text-gray-400">Intermediate</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div>
                                    <h2 className="text-xl font-semibold">Japanese</h2>
                                    <p className="text-lg text-gray-400">Pre-Intermediate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}