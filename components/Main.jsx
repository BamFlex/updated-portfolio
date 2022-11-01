import Image from "next/image";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill, BsWhatsapp } from "react-icons/bs";

const Main = () => {
    return (
        <div id="home" className="w-full h-screen text-center">
         <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
            <div className="mt-20">
                <p className="text-sm tracking-widest">LET'S BUILD SOMETHING TOGETHER</p>
                <h1 className="Py-4 text-gray-700">Hi, I'm <span className="text-[#5651e5]">Bamidele</span></h1>
                <h1 className="Py-2 text-gray-700">A FULLSTACK DEVELOPER</h1>
                <p className="Py-4 my-2 text-gray-600 text-[14px] max-w-[70%] m-auto">I develop websites and landing pages with HTML5, CSS3 and JavaScript. Others are REACT, NODE JS and MONGO DB. I've developed, designed and redesigned websites across different Content Management System (CMS) platforms such as WordPress, Wix, SquareSpace, Duda, weebly etc as well as E-Commerce platforms like Shopify and Woo-Commerce.</p>
                <p className="Py-4 text-gray-600 max-w-[70%] text-[14px] m-auto">I'm pleased to state that all the websites that I've developed have different functionalities and various forms of integrations that are essential for the effective performance of their business functions.</p>

                
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <a href="https://www.linkedin.com/in/adeleke-bamidele-81bbbb212" target="_blank" rel="noopener noreferrer"><AiFillLinkedin/></a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <a href="https://github.com/BamFlex" target="_blank" rel="noopener noreferrer"><AiFillGithub/></a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <a href="mailto:acedigitalsolution.webmobile@gmail.com"><AiOutlineMail/></a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <a href="tel:+2349075523254"><BsFillPersonLinesFill/></a>
                    </div>
                </div>
                
                
            </div>
         </div>
        </div>
    );
}
 
export default Main;