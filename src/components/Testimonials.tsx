"use client";
import { useState } from "react";
import Image from "next/image";
import { testimonialsLinks } from "@/constant/links";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <section >
            <div className="px-5 pt-14 md:container">
                <div className="tape">
                    <h2 className="title">Testimonials</h2>
                    <h4 className="subtitle">MY CLIENT REVIEWS</h4>

                </div>
                <br />
                <div id="containerForBullets"></div>
                <Swiper direction={"vertical"}
                    pagination={{ clickable: true }}
                    loop={true}
                    spaceBetween={40}
                    slidesPerView={1}
                    onSlideChange={(e) => setActiveIndex(e.realIndex)}
                    modules={[Pagination]}
                    className="h-[40rem] max-w-3xl md:h-96">
                    {testimonialsLinks.map((link, index) => (
                        <SwiperSlide key={index}>
                            <div className={`mx-8 flex h-max flex-col items-center gap-6
                             rounded-2xl  bg-white p-8
                              duration-500 md:flex-row ${activeIndex !== index && "scale-75 blur-sm"}`}>
                                <Image src={link.image} alt={link.name} className="h-24 w-24" />
                                <div>
                                    <p className="text-lg text-gray-700 sm:text-base">{link.review}</p>
                                    <br />
                                    <h6 className="text-gray-900 text-2xl font-semibold">{link.name}</h6>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonials