import React from "react"
import Image from "next/image"
import taxadvocate from "/public/taxadvocate.jpg"
const Profession = () => {
    return (
        <div className="container px-4 mx-auto">

<div class="flex flex-col ...">
  <div className="container px-4 mx-auto lg:text-5xl">

  Professional Experience

  </div>

  <div className="container px-4 mx-auto">
  <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 ">
                    <div className="mt-6 text-gray-800 dark:text-white">
                        <p className="mb-4">                            
                        • I am an advocate by profession and handle about 200+ clients.
                        </p>
                    </div>
                    <div className="mt-6 text-gray-800 dark:text-white">
                        <p className="mb-4">
                        •  I also have experience in accounting.
                        </p>
                    </div>
                    <div className="mt-6 text-gray-800 dark:text-white">
                        <p className="mb-4">
                        • My profession also gave me an exposure in data entry. 
                        Entering client data, making excel sheets were part of my day to day job.
                        </p>
                    </div>
                    
                    <div className="mt-6 text-gray-800 dark:text-white">
                        <p className="mb-4">
                        • My major subject was English. I love to write articles, essays and speeches.
                        </p>
                    </div>
                </div>
                <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
                    <Image
                        src={taxadvocate}
                        alt="TaxAdvocate"
                        priority={true}
                        className="rounded-full"
                        width={250}
                        height={250}
                        placeholder="blur"
                    />
                </div>
        </div>

</div>

        </div>
        </div>
        
    )
}

export default Profession;