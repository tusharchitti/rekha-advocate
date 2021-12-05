import React from "react"
import Image from "next/image"
import profile from "/public/profile.jpg"
import Profession from './Profession';
import Footer from "./Footer";

const About = () => {
    return (
        <div className="container px-4 mx-auto"> 
        <div className="lg:px-4 lg:mt-12 ">
                    <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                        Rekha Garg
                    </h1>
                    
        </div>
          <div className="container px-4 mx-auto">
            <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 ">
                <div className="container px-0 mx-auto lg:text-5xl">
                    Namastey!!
                </div>
                    <div className="mt-6 text-gray-800 dark:text-white">
                        <p className="mb-4">                            
                            I am an IncomeTax and SalesTax Advocate with an experience of 25 years.I hold a degree in BA/LLB. I Love 
                            to try new things. Entering into 
                            the world of FreeLance to share and grow as a community.
                        </p>
                    </div>
                </div>
                <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
                    <Image
                        src={profile}
                        alt="Profile"
                        priority={true}
                        className="rounded-full"
                        width={250}
                        height={250}
                        placeholder="blur"
                    />
                </div>
                
            </div>
        </div>
        <Profession/>
        <Footer/>
        </div>

    )
}

export default About;