import React from 'react'
import SectionComponent from "@/components/sectionComponent"

const Goals = () => {
    return (
    <section id='hobbies' className='p-24 mr-16'>
        <div className='text-white text-base sm:text-lg mb-6 lg:text-5xl'>
            <h1>Goals</h1>
        </div>
        <div className='lg:py-16 flex flex-row gap-2 align-middle'>
            <SectionComponent />
        </div>
    </section>
    )
}

export default Goals;
