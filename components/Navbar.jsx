// import Image from "next/image";
import React, { useState, useEffect } from 'react';

import { AiFillLinkedin, AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Link from "next/link";
import {useRouter} from 'next/router';
import Image from 'next/image';
import {Upwork} from '../public/assets/upworkImg.jpg'


const Navbar = () => {

    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#ecf0f3');
    const [linkColor, setLinkColor] = useState('#1f2937');

    const router = useRouter();

    useEffect(() => {
        if (router.pathname === "/property" ||
        router.pathname === "/crypto" ||
        router.pathname === "/investment" ||
        router.pathname === "/cardetailing" ||
        router.asPath === "/property" ) {
            setNavBg('transparent');
            setLinkColor('#ecf0f3');
        }else {
            setNavBg('#ecf0f3');
            setLinkColor('#1f2937')
        }
    },[])

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleShadows = () => {
            if (window.scrollY >= 90){
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadows)
    }, [])
    return (
        <div style={{backgroundColor: `${navBg}`}} className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <Link href="/">
                    <div className='md:pl-8 '>
                        <Image className='border border-gray-100' src="/../public/assets/logo.jpg" width='100%' height='70%' alt="image" />
                    </div>
                </Link>
                <div>
                    <ul style={{color: `${linkColor}`}} className="hidden md:flex ">
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
                        </Link>
                        <Link href="/#about">
                            <li className="ml-10 text-sm uppercase hover:border-b">About</li>
                        </Link>
                        <Link href="/#skills">
                            <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
                        </Link>
                        <Link href="/#projects">
                            <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
                        </Link>
                        <Link href="/#contact">
                            <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
                        </Link>
                    </ul>
                    <div className='md:hidden' onClick={handleNav}>
                        {/* <AiOutlineCloseCircle/> */}
                        <AiOutlineMenu/>
                    </div>
                </div>
            </div>

            {/* MOBILE MENU */}
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ase-in duration-700' : ''}>
                <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 
                    'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between '>
                            {/* <img src="../public/assets/logo.png" alt="logo" /> */}
                            <Image className='bg-gray-700 p-5 rounded-xl' src="/../public/assets/logo.jpg" width='75%' height='50%' alt="image" />
                            {/* <Img src='/..assets/logo.png' alt='image' width='30px' height='30px'/> */}
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ' onClick={handleNav}>
                                <AiOutlineClose/>
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>Let's Build Something Legendary Together</p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/' >
                                <li className='py-4 text-sm' onClick={handleNav}>Home</li>
                            </Link>
                            <Link href='/#about'>
                                <li className='py-4 text-sm' onClick={handleNav}>About</li>
                            </Link>
                            <Link href='/#skills'>
                                <li className='py-4 text-sm' onClick={handleNav}>Skills</li>
                            </Link>
                            <Link href='/#projects'>
                                <li className='py-4 text-sm' onClick={handleNav}>Projects</li>
                            </Link>
                            <Link href='/#contact'>
                                <li className='py-4 text-sm' onClick={handleNav}>Contact</li>
                            </Link>
                        </ul>
                        
                        <div className='mt-10'>
                            <p className='uppercase tracking-widest text-[#5651e5]'>Let's Connect</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-400  flex items-center p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <Link href='/' >
                                        <a href="https://www.upwork.com/freelancers/~01342f29afc9e3ec9e" target="_blank" rel="noopener noreferrer">
                                            {/* <AiFillLinkedin/> */}
                                            <Image src="/../public/assets/upworkImg.jpg" width='30px' height='25px' alt="image" />
                                        </a>
                                    </Link>                                                                                                                                 
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 flex items-center  p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <Link href='/'>
                                        <a href="http://https://www.fiverr.com/ace_mobweb" target="_blank" rel="noopener noreferrer">
                                        {/* <AiFillLinkedin/> */}
                                        <Image src="/../public/assets/fiverr.jpg" width='40px' height='25px' alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 flex items-center  p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <AiOutlineMail mailto='acedigitalsolution.webmobile@gmail.com'/>
                                    {/* <Image src="/../public/assets/upworkImg.jpg" width='30px' height='25px' alt="image" /> */}
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 flex items-center  p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    {/* <BsFillPersonLinesFill/> */}
                                    <Image src="/../public/assets/whatsapp.png" width='30px' height='25px' alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;