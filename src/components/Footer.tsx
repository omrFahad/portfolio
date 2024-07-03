"use client"
import { githubIcon, linkedin } from '@/constant/links'
import React from 'react'



const Footer = () => {
    const currentDate = new Date().getFullYear();

    return (
        <footer className='pt-20 pb-4'>
            <div className="conatiner flex justify-center items-center gap-6">
                <button onClick={() => window.location.href = "https://www.linkedin.com/in/omar-alaskar-978b99307/"}>

                    {linkedin}
                </button>
                <button onClick={() =>
                    window.location.href = "https://github.com/omrFahad"}>
                    {githubIcon}

                </button>
            </div>

            <h2 className="  text-center my-12 xsm:w-[100%] xsm:text-2xl sm:text-4xl text-slate-300">© {currentDate} Portfolio. All rights reserved | Designed by Omar Alaskar</h2>
        </footer>
    )
}

export default Footer