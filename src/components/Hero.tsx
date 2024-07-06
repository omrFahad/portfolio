"use client"
import Image from "next/image";
import HeroSVG from "@/public/svg/hero.svg"
import { Variants, delay, motion, transform } from "framer-motion";
import { charVariants, iconVariants } from "@/constant/variants";
const Hero = () => {
    const text = `Omar Fahad \nFrontend Developer`;

    return (
        <section
            id="home"
            className="mx-auto overflow-hidden"
        >
            <div className="relative flex min-h-screen flex-row">

                <div className="flex w-full flex-col-reverse items-center justify-center md:flex-row ">
                    <div className="px-6 pb-16 pt-5 " >
                        {text.split('').map((char, index) => (
                            <motion.h1 style={{ whiteSpace: 'pre-line' }} className="inline text-slate-200 text-5xl font-semibold" key={index}
                                initial="hidden"
                                animate="visible"
                                variants={charVariants}
                                transition={{ delay: index * 0.075, duration: 1 }} // Adjust the typing speed by changing the delay value
                            >
                                {char}
                            </motion.h1>
                        ))}
                        <br />

                        <motion.span

                            className="flex mt-12"
                        >
                            <motion.button
                                initial={{ y: 0 }}
                                animate={{ y: [0, 40, 0] }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: "mirror",
                                    duration: 2,
                                    delay: 0.2,

                                }}
                                className="btn  bg-sky-600  hover:bg-sky-500 "
                                onClick={() => window.location.href = "https://www.linkedin.com/in/omar-alaskar-978b99307/"
                                }
                            >
                                Linkedin<br />
                            </motion.button>
                            <motion.button
                                initial={{ y: 0 }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: "mirror",
                                    duration: 2,
                                    delay: 0.4,
                                }} animate={{ y: [0, 40, 0] }}
                                className="btn  bg-teal-600 hover:bg-teal-500"
                                onClick={() => window.location.href = "https://drive.google.com/file/d/1RuIKkKyFfNjUkGkxcrwCoD_l0S1cJ96Q/view"
                                }
                            >
                                downlaod<br /> resume
                            </motion.button>
                            <motion.button
                                initial={{ y: 0 }}
                                animate={{ y: [0, 40, 0] }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: "mirror",
                                    duration: 2,
                                    delay: 0.6,
                                }}
                                className="btn bg-gray-950 hover:bg-gray-800"
                                onClick={() => window.location.href = "https://github.com/omrFahad"

                                }


                            >
                                Github<br />
                            </motion.button>
                        </motion.span>


                    </div>
                    <div className="mb-4 xsm:h-2/5 sm:h-2/4 ">
                        <motion.span
                            initial="hidden"
                            animate="visible"
                            variants={iconVariants}
                            className="block h-full"
                        >
                            <Image
                                src={HeroSVG}
                                alt="Hero"
                                className="h-full rounded-xl  bg-cover"
                            />
                        </motion.span>
                    </div>
                </div>
            </div>
        </section >
    )
}


export default Hero