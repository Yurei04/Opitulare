import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motio";
import Link from "next/link"

const Homepage = () => {
    return (

        <section className=" relative lg:py-22 py-20 homepage-contianer bg-cover bg-center bg-no-repeat">
            <div>
                <motion.div
                    initial={{ Opacity: 0, Scale: 0.5 }}
                >
                    <h3>
                        <span>

                        </span>
                        <br/>
                        <TypeAnimation 
                        
                         {/* Add sequence typing title description here */}
                        
                        
                        />
                    </h3>
                    <p>
                        {/* Add Website description here */}
                    </p>
                </motion.div>


            </div>
        </section>

    )
}

export default Homepage;