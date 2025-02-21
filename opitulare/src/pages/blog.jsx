"use client"
import React from "react";
import Masonry from "../components/masonry"

const Blog = () => {
    return (
        <section id='blog' className='p-24 mr-16'>
            <div className='text-white text-base sm:text-lg mb-6 lg:text-5xl'>
                <h1>Blog</h1>
            </div>

            <div>
                <Masonry />
            </div>
        </section>
    )
}

export default Blog;