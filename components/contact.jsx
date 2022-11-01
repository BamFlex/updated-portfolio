import Image from 'next/image';
import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill, BsWhatsapp } from 'react-icons/bs';
import { HiOutlineChevronDoubleUp } from'react-icons/hi';
import Moi from '../public/assets/moi.jpeg';


const Contact = () => {
    return (
        <div id='contact' className="w-full lg:h-screen">
            <div className="max-w-[960px] m-auto px-2 py-16 w-full">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">Contact</p>
                <h2 className="py-4">Get in Touch</h2>

                <div className="grid md:grid-cols-5 gap-8">

                    <div className="col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
                        <div className="mx-auto lg:p-4 h-full">
                            <div>
                                <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={Moi} alt="image" />
                            </div>
                            <div className='py-2'>
                                <h2>Bamidele Felix</h2>
                                <p>FullStack Developer</p>
                                <p className='py-4'>I'm available for freelance and full-time positions. Contact me and let's talk</p>
                            </div>
                            <div>
                            <p className='uppercase pt-8'>Connect with me</p>
                            {/* <div className='flex items-center justify-between py-4'>
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
                            </div> */}
                            <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                    <div className='rounded-full flex items-center border-2 bg-[#f8f8f8] p-2 cursor-pointer shadow-lg shadow-gray-400 hover:scale-110 ease-in duration-300'>
                        <Link href="https://www.upwork.com/freelancers/~01342f29afc9e3ec9e" target="_blank" rel="noopener noreferrer">
                            {/* <AiFillLinkedin size={30}/> */}
                            <Image src="/../public/assets/upworkImg.jpg" width='40px' height='40px' alt="image" />
                        </Link>    
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 bg-[#f3f3f3] cursor-pointer hover:scale-110 ease-in duration-300'>
                        {/* <Link href="mailto:bamidelefelix94@gmail.com" target="_blank" rel="noopener noreferrer"> */}
                            <a href="mailto:acedigitalsolution.webmobile@gmail.com"><AiOutlineMail size={30} className="text-[#5651e5]"/></a>
                            {/* <Image src="/../public/assets/upworkImg.jpg" width='40px' height='40px' alt="image" /> */}
                        {/* </Link>  */}
                    </div>
                    <div className='rounded-full flex items-center border-2 bg-[#ffffff] py-3 px-2 cursor-pointer shadow-lg shadow-gray-400 hover:scale-110 ease-in duration-300'>                        {/* <AiOutlineMail size={30}/> */}
                        <Link href="https://www.fiverr.com/ace_mobweb" target="_blank" rel="noopener noreferrer">
                            {/* <Image src="/../public/assets/upworkImg.jpg" width='40px' height='40px' alt="image" /> */}
                            <Image src="/../public/assets/fiverr.jpg" width='40px' height='30px' alt="image" />
                        </Link> 
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer bg-[#f5f5f5] hover:scale-110 ease-in duration-300'>
                        <Link href="https://www.upwork.com/freelancers/~01342f29afc9e3ec9e" target="_blank" rel="noopener noreferrer">
                            <BsWhatsapp size={30} className="text-[#0ba370]"/>
                        </Link> 
                    </div>
                </div>
                        </div>
                        </div>
                        
                    </div>

                    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>

                        <div className='p-4'>
                            <form >
                                <div className='grid md:grid-cols-2 gap-4 w-full p-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Name</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300 outline-none'  type="text" required/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Phone Number</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300 outline-none'  type="number" />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Email</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300 outline-none'  type="email" required/>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Subject</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300 outline-none'  type="text" />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea className='border-2 rounded-lg p-3 flex border-gray-300 outline-none'rows={5} ></textarea>
                                </div>
                                <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            <div className='flex justify-center py-12'>
                <Link href='/'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30}/>
                    </div>
                </Link>
            </div>
        </div>
    );
}
 
export default Contact;