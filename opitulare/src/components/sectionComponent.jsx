'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import { Switch, FormControlLabel } from '@mui/material';
import ActionAreaCard from './actionAreaCard';

export default function ParentComponent() {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const handleActivate = (index) => {
        setActiveIndex(index);
    };

    const sections = [
        {
            label: "To Help",
            description: ["lorem", "lorem"],
            images: ["/images/help.png"]
        },
        {
            label: "Become Aware",
            description: ["lorem", "lorem"],
            images: ["/images/aware.png"]
        },
        {
            label: "To Inform",
            description: ["lorem", "lorem"],
            images: ["/images/inform1.png"]
        },
        {
            label: "To Educate",
            description: ["lorem", "lorem"],
            images: ["/images/inform2.png"]
        }
    ];

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'center', gap: 2 }}>
                {sections.map((section, index) => (
                    <FormControlLabel
                        key={index}
                        control={<Switch checked={index === activeIndex} onChange={() => handleActivate(index)} />}
                        label={section.label}
                    />
                ))}
            </Box>
            <ActionAreaCard 
                title={sections[activeIndex].label}
                description={sections[activeIndex].description.join(", ")} 
                imageSrc={sections[activeIndex].images[0]} 
            />
        </Box>
    );
}
