"use client"

import * as React from 'react';
import  PieChart  from "@/components/pieChart";
import BarChart  from "@/components/barChart";
import Box from '@mui/material/Box';
import useIntersectionObserver from '@/components/useIntersectionObserver';

const Visualizer = () => {
    const [ref, isVisible] = useIntersectionObserver({
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      });
    return (
        <Box 
        ref={ref}
        sx={{
            transition: 'transform 0.3s, box-shadow 0.3s, border 0.3s, opacity 0.3s',
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            opacity: isVisible ? 1 : 0,
            display: 'flex', flexDirection: { xs: 'column', sm: 'column' }, justifyContent: 'center', gap: 2 }}> 
            <h3 className="text-white mb-4 text-6xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                    Data
                </span>
            </h3>
            <Box sx={{display: 'flex', flexDirection: { xs: 'column', sm: 'column' }, justifyContent: 'center', alignItems: "center",gap: 2 }}>

                <PieChart />

                <BarChart />
            </Box>
        </Box>
    )
}

export default Visualizer;