import Image from "next/image";
import Link from "next/link";
// import Boy from '../public/assets/boy.jpg'
import Buildings from '../public/assets/buildings.png'
import Crypto from '../public/assets/cryptoApp.png';
import Moola from '../public/assets/Moola.png'
import Detailing from '../public/assets/carDetailing.png'
import ProjectItems from "./ProjectItems";

const Projects = () => {
    return (
        <div id="projects" className="w-full">
            <div className="max-w-[960px] mx-auto px-2 py-16">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">Projects</p>
                <h2 className="py-4">What I've Built</h2>
                <div className="px-8 grid md:grid-cols-2 gap-8">

                    <ProjectItems title='Property Finder' backgroundImg={Buildings} projectUrl='/property'/>
                    <ProjectItems title='Crypto App' backgroundImg={Crypto} projectUrl='/crypto'/>
                    <ProjectItems title='Investment App' backgroundImg={Moola} projectUrl='/investment'/>
                    <ProjectItems title='Property Finder' backgroundImg={Detailing} projectUrl='/property'/>

                </div>
            </div>
        </div>
     );
}
 
export default Projects;