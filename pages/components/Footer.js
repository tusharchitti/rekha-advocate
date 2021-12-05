import React from "react";

const Footer = () => {
    return (
        <div className="mt-0 lg:mt-18 sm:pb-10 sm:py-12 py-2">
            <div className="max-w-4xl px-4 mx-auto text-gray-800 dark:text-white">
                <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300"></div>
                <div className="flex flex-col justify-between lg:flex-row items-center">
                    <p>Built with Next.js, Tailwind and Vercel</p>
                    <div className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
                        <a
                            href="https://gmail.com"
                            className={"transition-colors hover:text-yellow-500"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            rekha.garg06@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;