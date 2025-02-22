'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import { Switch, FormControlLabel, Accordion } from '@mui/material';
import ActionAreaCard from './actionAreaCard';
import Card from "@/components/card"

export default function ParentComponent() {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [openModal, setOpenModal] = React.useState(false);

    const handleActivate = (index) => {
        setActiveIndex(index);
    };

    const handleOpenModal = () => {
        setOpenModal(true);
    }

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    const sections = [
        {
            label: "To Help",
            description: ["lorem", "lorem"],
            images: ["/images/help.png", "/images/help.png",],
            contents: "lorem lorem lorem lorem lorem lorem"
        },
        {
            label: "Become Aware",
            description: ["lorem", "lorem"],
            images: ["/images/help.png", "/images/help.png",],
            contents: "lorem lorem lorem lorem lorem lorem"
        },
        {
            label: "To Inform",
            description: ["lorem", "lorem"],
            images: ["/images/help.png", "/images/help.png",],
            contents: "lorem lorem lorem lorem lorem lorem"
        },
        {
            label: "To Educate",
            description: ["lorem", "lorem"],
            images: ["/images/help.png", "/images/help.png",],
            contents: "lorem lorem lorem lorem lorem lorem"
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
            <Box sx={{ display:"flex", flexDirection: "row", gap: 3}}>
                <ActionAreaCard 
                    title={sections[activeIndex].label}
                    description={sections[activeIndex].description.join(", ")} 
                    imageSrc={sections[activeIndex].images[0]} 
                />
                <Card 
                    title={sections[activeIndex].title}
                    contents={sections[activeIndex].contents}
                
                />

            </Box>
        </Box>
    );
}
