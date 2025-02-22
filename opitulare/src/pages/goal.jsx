import React from 'react'
import SectionComponent from "@/components/sectionComponent"

const Goals = () => {
    return (
    <section id='hobbies' className='p-24 mr-16'>
            <h3 className="text-white mb-4 text-6xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                    Goals
                </span>
            </h3>
        <div className='lg:py-16 flex flex-row gap-2 align-middle'>
            <SectionComponent />
        </div>
    </section>
    )
}

export default Goals;
