"use client"
import Image from "next/image";
import ConactSVG from "../public/svg/contact.svg";
import { iconVariants } from "@/constant/variants";
import { motion } from "framer-motion";
const Contact = () => {
    return (
        <section className=" pb-8 bg-slate-900" id="contact">
            <div className="px-5 py-14 md:container">
                <div className="tape">
                    <h2 className="title " >
                        Hire Me
                    </h2>
                    <h4 className="subtitle" >
                        FOR YOUR PROJECTS
                    </h4>
                </div>
                <br />
                <div className="flex items-center flex-col space-y-4 lg:flex-row">
                    <motion.span
                        initial="hidden"
                        animate="visible"
                        variants={iconVariants}
                        className="block h-full"
                    >
                        <Image
                            src={ConactSVG}
                            alt="Contact SVG"
                            className="w-80 h-80 max-w-sm mt-4 md:mt-0 md:max-w-xl md:block text-gray-950"
                        />
                    </motion.span>
                    <div className="max-w-sm mx-auto bg-white shadow-md rounded-md overflow-hidden">
                        <div className="sm:px-12 2xl:py-8 xsm:px-6 xsm:py-4 ">
                            <h2 className="sm:text-2xl font-bold mb-2 xsm:text-base">Contact Information :</h2>
                            <div className="mb-4 ">
                                <label className="label">Name:</label>
                                <p className="p">Omar Alaskar</p>
                            </div>
                            <div className="mb-4">
                                <label className="label">Email:</label>
                                <p className="p">omr.diiv@gmail.com</p>
                            </div>
                            <div className="mb-4">
                                <label className="label">Phone:</label>
                                <p className="p">0541531275 </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;