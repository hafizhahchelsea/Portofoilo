import React from "react";
import dpr from '../asset/dpr.jpg';
import maximum from '../asset/maximumgym.jpg';
import bi from '../asset/bi.jpg';
import porto from '../asset/portofolio.jpg';
import port2 from '../asset/port2.jpg';

const Projects =() => {
    return(
        <section id="projects"className="py-20 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-2x1 font-bold mb-8">My Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 grap-8">
                    <div className="bg-gray-100 p-4 rounded">
                        <img src={dpr} alt="Samuel Wattimena" className="w-full h-48 object-cover mb-4 rounded"/>
                        <h3 className="text-2x1 font-bold mb-2">DPRD Jateng</h3>
                        <p className="text-gray-700">Profile Website for DPRD jateng</p>
                    </div>
                    
                    <div className="bg-gray-100 p-4 rounded">
                        <img src={maximum} alt="Samuel Wattimena" className="w-full h-48 object-cover mb-4 rounded"/>
                        <h3 className="text-2x1 font-bold mb-2">Maximum Gym</h3>
                        <p className="text-gray-700">Profesional Company Website For Gym</p>
                    </div>
                    
                    <div className="bg-gray-100 p-4 rounded">
                        <img src={bi} alt="Samuel Wattimena" className="w-full h-48 object-cover mb-4 rounded"/>
                        <h3 className="text-2x1 font-bold mb-2">CV. Bintang Perkasa Indonesia</h3>
                        <p className="text-gray-700">Profesional Landing Page for CV BPI</p>
                    </div>
                    
                    <div className="bg-gray-100 p-4 rounded">
                        <img src={porto} alt="Samuel Wattimena" className="w-full h-48 object-cover mb-4 rounded"/>
                        <h3 className="text-2x1 font-bold mb-2">Profesional Portofolio Website</h3>
                        <p className="text-gray-700">Profesional Portofolio website with React and Frame Motion </p>
                    </div>
                    
                    <div className="bg-gray-100 p-4 rounded">
                        <img src={port2} alt="Samuel Wattimena" className="w-full h-48 object-cover mb-4 rounded"/>
                        <h3 className="text-2x1 font-bold mb-2">Profesional Website 2</h3>
                        <p className="text-gray-700">Profesional website using Tailwind CSS </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;