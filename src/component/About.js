import React from "react";
import Profile from '../asset/profile.jpg';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-100">
            <div className="container mx-auto text-center px-6">
                <h2 className="text-4x1 font-bold mb-8 text-gray-800">
                    Tentang saya
                </h2>

                <div className="flex flex-col items-center mb-12">
                    <img src={`${Profile}`} alt="Profile Picture" className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg"/>
                    <p className="text-lg text-gray-600 mb-2">Student</p>
                    <p className="text-x1 text-gray-700 font-semibold">I'm a Student</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-300">
                        <h3 className="text-2x1 font-bold mb-4 text-rose-800">IoT</h3>
                        <p className="text-gray-700 mb-4">
                            I Student how to implement a smart devices into real life.
                        </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-300">
                        <h3 className="text-2x1 font-bold mb-4 text-rose-800">Web Progaming</h3>
                        <p className="text-gray-700 mb-4">
                            I Student how to create a system using a tech industrial framework such as ReactJS, DJango, Laravel.
                        </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-300">
                        <h3 className="text-2x1 font-bold mb-4 text-rose-800">Mobile Apps</h3>
                        <p className="text-gray-700 mb-4">
                            I Student how to create a Mobile Apps.
                        </p>
                    </div>
                </div>
                <p className="text-lg text-gray-600 mt-8">
                    I do also provide a coding mentoring for a competations and projects mentoring
                </p>
            </div>
        </section>
    )
}

export default About;