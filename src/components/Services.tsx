import { servicesLinks } from "@/constant/links"
import Image from "next/image"
const Services = () => {
    return (
        <section className="bg-slate-900" id="services">
            <div className="md:container px-5 py-14">
                <div className="tape">
                    <h2 className="title" >
                        Services
                    </h2>
                    <h4 className="subtitle" >
                        WHAT I OFFER
                    </h4>
                </div>
                <br />
                <div className="flex gap-5 justify-between flex-wrap group">
                    {servicesLinks.map((link, index) => (

                        <div
                            key={index}
                            className="min-w-[14rem] duration-300 cursor-pointer  
                      rounded-lg text-center bg-cyan-700 p-6 flex-1 hover:scale-105
                       "
                        >
                            <Image src={link.logo} alt={link.title} className="mx-auto w-16 w-16 bg-cyan-100 rounded-lg p-1 " />
                            <h6 className="my-3 text-2xl font-medium text-slate-100">{link.title}</h6>
                            <p className="leading-7  text-slate-200">{link.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>)
}

export default Services