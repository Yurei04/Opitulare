"use client"
import React from "react";
import Accordion from "@/components/accordion";

const About = () => {
    return (
        <section id='blog' className='p-24 mr-16'>
            <h3 className="text-white mb-4 text-6xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                    About
                </span>
            </h3>
            <div>
                <Accordion />
            </div>
        </section>
    )
}

export default About;