import Image from "next/image";

const About = () => {
    return (
        <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">

            <div className="max-w-[960px] m-auto md:grid grid-cols-3 gap-8">
                
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-[#5652e5]">About</p>
                    <h2 className="py-2 text-gray-600">Who I Am</h2>
                    <div className="px-8">
                        <p className="py-2 text-gray-600">I'm an independent Freelancer with years of experience in web development, UI/UX, Email Marketing and other digital services.</p>
                        {/* <p className="py-2 text-gray-600 underline cursor-pointer">Check out some of my Projects</p> */}
                        <p className="py-2 text-gray-600">I'm a succesfull freelancer on Upwork with Job Success Score of 100% as well as a Level 1 Seller on Fiver. I priotize the satisfaction of my clients at all times and that has earned me wonderful reviews from my client from different countries and continents.</p>
                        <p className="py-2 text-gray-600">I'm confident that you'll be highly satisfied with my services and I'm conviced that a trial will convice you.</p>
                    </div>
                </div>
                <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <Image className="rounded-xl" src="/../public/assets/laptop.jpg" width='330px' height='295px' alt="image" />
                </div>
            </div>
        </div>
    );
}
 
export default About;