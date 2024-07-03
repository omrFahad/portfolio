import { skillsLinks } from "@/constant/links"
import Image from "next/image"
const Skills = () => {
    return (
        <section className="min-h-fit " id="skills">
            <div className="px-5 py-14 md:container">
                <div className="tape">
                    <h2 className="title" >Skills</h2>
                    <h4 className="subtitle">MY TOP SKILLS</h4>
                </div>
                <br />
                <div className="flex flex-wrap justify-center my-0 mx-auto w-[50%]  ">
                    {skillsLinks.map((link, index) => (

                        <div className="mr-12 my-4" key={index} >
                            <Image src={link.logo} alt='' className=" w-20 h-20 duration-200 hover:scale-125" />
                        </div>

                    ))}
                </div>
            </div>
        </section>)
}

export default Skills