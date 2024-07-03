"use client";
import { useState } from "react";
import { navLinks } from "@/constant/links";
const menu = <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" d="M5 14a2 2 0 1 0-2-2" /><circle cx="12" cy="12" r="2" /><path stroke-linecap="round" d="M21 12a2 2 0 1 1-2-2" /></g></svg>

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [active, setActive] = useState(0);

    return (
        <div className="w-full flex justify-center">
            <div
                className="sm:cursor-pointer fixed top-10 left-10 z-[999] rounded-lg
                 bg-slate-500 p-2 xsm:top-5 xsm:left-5 xsm:p-0 "
                onClick={() => setShowMenu(!showMenu)}
            >
                {menu}
            </div>
            <nav
                className={`fixed  z-[999] flex items-center gap-5 bg-slate-500 px-6 py-3 
                backdrop-blur-md rounded-full text-slate-200 duration-300 ${showMenu ? "bottom-10" : "bottom-[-100%]"}`}

            >
                {
                    navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            onClick={() => setActive(index)}
                            className={`text-xl p-2.5 rounded-full sm:cursor-pointer ${active === index && "bg-slate-700"}`}>
                            {link.icon}
                        </a>
                    ), {})}
            </nav>
        </div>)
}

export default Navbar