import Image from "next/image";
import { AiOutlineGithub } from "react-icons/ai";

const Skills = () => {
    return (
        <div id="skills" className="w-full lg:h-screen p-2">
            <div className="max-w-[960px] mx-auto flex flex-col justify-center h-full">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">Skills</p>
                <h2 className="py-4">What I can do</h2>

                <div className="grid px-8 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src='/../public/assets/html.png' width={60} height={60} alt='html logo'/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src='/../public/assets/css.png' width={60} height={60} alt='html logo'/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>CSS3</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src='/../public/assets/javascriptImg.png' width={60} height={60} alt='html logo'/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>JavScript</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src='/../public/assets/react.png' width={60} height={60} alt='html logo'/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>REACT</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src='/../public/assets/tailwindImg.png' width={60} height={60} alt='html logo'/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>TAILWIND</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src='/../public/assets/mongo.png' width={60} height={60} alt='html logo'/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>MONGO DB</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                               <AiOutlineGithub size={60}/> 
                                {/* <Image src='/../public/assets/github.jpg' width={60} height={60} alt='html logo'/> */}
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>GITHUB</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src='/../public/assets/nodejs.png' width={60} height={60} alt='html logo'/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>NODE JS</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Skills;