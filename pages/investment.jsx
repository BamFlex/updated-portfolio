import Image from "next/image";
import Link from "next/link";
import { HiChevronDoubleLeft } from "react-icons/hi";
import { RiRadioButtonFill } from 'react-icons/ri'

const Investment = () => {
    return (
        <div className="w-full">
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10">
                 {/* <Image className="absolute z-1 object-top" layout="fill" objectFit="cover" src="/../public/assets/Moola.png" width='100%' height='100%' alt="image" /> */}
                 <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10">
                    <h2>Investment App</h2>
                    <h3>HTML & CSS ONLY</h3>
                 </div>
                </div>
            </div>
            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8">
                <div className="col-span-4">
                    <p className="p-2 text-[#5651e5] text-lg">Project</p>
                    <h2>Overview</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis illum, quis sequi nihil, repellat voluptatum rerum cumque exercitationem tempore expedita cupiditate doloribus libero? Mollitia tenetur natus deleniti laudantium consequatur corrupti, quae id aperiam provident quia velit nobis fugit atque quod harum maiores asperiores excepturi officia quam voluptates, sequi odio ducimus.</p>
                    <button className="px-8 py-2 mt-4 mr-8"><a href="https://moola.vercel.app/" target="_blank" rel="noopener noreferrer">Demo</a></button>
                    <button className="px-8 py-2 mt-4 mr-8">Code</button>
                </div>
                <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl  p-4">
                    <div>
                        <p className="pb-2 text-center font-bold">Technologies</p>
                    </div>
                    <div>
                        <p className="flex items-center text-gray-600 p-2"><RiRadioButtonFill className="mr-2"/> React JS</p>
                        <p className="flex items-center text-gray-600 p-2"><RiRadioButtonFill className="mr-2"/> Tailwind</p>
                        <p className="flex items-center text-gray-600 p-2"><RiRadioButtonFill className="mr-2"/> JavaScript</p>
                        <p className="flex items-center text-gray-600 p-2"><RiRadioButtonFill className="mr-2"/> Firebase</p>
                        <p className="flex items-center text-gray-600 p-2"><RiRadioButtonFill className="mr-2"/> Next JS</p>
                    </div>
                </div>
            </div>
            <Link href='/#investment'>
                <p className="underline cursor-pointer mb-10 flex items-center"><HiChevronDoubleLeft />Back</p>
            </Link>
        </div>
    );
}
 
export default Investment;