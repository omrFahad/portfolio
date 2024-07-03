"use client"
import Image from "next/image"
import ProjectSvg from "@/public/svg/projects.svg"
import { projectsLinks } from "@/constant/links"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import { iconVariants } from "@/constant/variants"
import { motion } from "framer-motion"
const Project = () => {


    return (
        <section className=" pb-4 my-10 bg-slate-900" id="projects">
            <div className="md:container px-5 pt-14 min-h-screen md:min-h-min flex flex-col justify-between">
                <div className="tape ">
                    <h2 className=" text-slate-200  text-5xl font-medium">
                        Projects
                    </h2>
                    <h4 className="subtitle  ">
                        MY CREATION
                    </h4>
                    <br />
                </div>
                <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
                    <motion.span
                        initial="hidden"
                        animate="visible"
                        variants={iconVariants}
                        className="block h-full"
                    >

                        <Image
                            src={ProjectSvg}
                            alt="..."
                            className=" w-[30rem] h-[30rem]   rounded-3xl"
                        />
                    </motion.span>
                    <Swiper
                        pagination={{ clickable: true }}
                        spaceBetween={10}
                        modules={[Pagination]}
                        className="rounded-xl pb-16 lg:max-w-md xsm:max-w-sm shadow-lg shadow-gray-500 my-10"
                    >
                        {projectsLinks.map((link, index) => (

                            <SwiperSlide
                                key={index}
                                className="bg-white rounded-xl p-5 border-b-8 border-gray-400 h-fit"
                            >
                                <Image
                                    onClick={() => window.location.href = link.src}
                                    src={link.image} alt={link.title}
                                    className=" cursor-pointer rounded-sm border-4 border-gray-700 " />
                                <div className="flex flex-col gap-1 my-2 py-3 ">
                                    <h5 className="font-bold  text-gray-900">
                                        {link.title}
                                    </h5>
                                    <button className="font-bold text-gray-700 self-end">
                                        READ MORE
                                    </button>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>)
}

export default Project