'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import { Switch, FormControlLabel } from '@mui/material';
import SimpleGrow from './grow';

const section1 = [
    {
        title: "Spread Awareness",
        description: "Educate the public about abuse and its consequences.",
        image: "/images/help1.png",
        contents: "Raising awareness is the first step to change. Share resources and information to help others recognize and prevent abuse."
    },
    {
        title: "Support Victims",
        description: "Provide emotional and practical support to survivors.",
        image: "/images/help2.png",
        contents: "Being there for victims can make a difference. Listen, believe, and offer guidance to available resources."
    },
    {
        title: "Report Abuse",
        description: "Encourage reporting abuse to proper authorities.",
        image: "/images/help3.png",
        contents: "Reporting abuse can prevent further harm. Support systems exist to protect victims and bring perpetrators to justice."
    }
];

const section2 = [
    {
        title: "Recognize Signs",
        description: "Understand common indicators of abuse.",
        image: "/images/awareness1.png",
        contents: "Knowing the warning signs can help prevent abuse and offer early intervention for victims."
    },
    {
        title: "Understand Its Impact",
        description: "Learn about the lasting effects of abuse.",
        image: "/images/awareness2.png",
        contents: "Abuse affects mental and physical well-being. Raising awareness can lead to greater compassion and action."
    }
];

const section3 = [
    {
        title: "Share Facts",
        description: "Spread accurate information about abuse.",
        image: "/images/inform1.png",
        contents: "Knowledge is power. Misinformation can enable abuse, while facts empower people to take action."
    },
    {
        title: "Debunk Myths",
        description: "Challenge misconceptions about abuse.",
        image: "/images/inform2.png",
        contents: "Many myths about abuse prevent victims from getting help. Education is key to dismantling these barriers."
    }
];


const section4 = [
    {
        title: "1 Button Thousand Lifes",
        description: "By punting 1 button on major website to signal they are being abused can save lives",
        image: "/images/educate1.png",
        contents: "Utilizing the world of technology by adding a button to signal that they are being abused, to notify the authorities while being subtle."
    },
    {
        title: "Extend help",
        description: "Use of brower extensions as a medium to call authorities",
        image: "/images/educate2.png",
        contents: "By creating web extentions like change of font with a hidden button to alert the authorities to your location."
    }
];

export default function ParentComponent() {
    const [activeSection, setActiveSection] = React.useState(1);

    const handleActivate = (sectionNumber) => {
        setActiveSection(sectionNumber);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'row', sm: 'row' }, justifyContent: 'center', gap: 2 }}>
                <FormControlLabel
                    control={<Switch checked={activeSection === 1} onChange={() => handleActivate(1)} />}
                    label="To Help"
                />
                <FormControlLabel
                    control={<Switch checked={activeSection === 2} onChange={() => handleActivate(2)} />}
                    label="Become Aware"
                />
                <FormControlLabel
                    control={<Switch checked={activeSection === 3} onChange={() => handleActivate(3)} />}
                    label="To Inform"
                />
                <FormControlLabel
                    control={<Switch checked={activeSection === 4} onChange={() => handleActivate(4)} />}
                    label="Opitilare"
                />
            </Box>

            <Box sx={{ display: "flex", flexDirection: "row", gap: 3 }}>
                {activeSection === 1 && section1.map((topic, index) => <SimpleGrow key={index} topic={topic} />)}
                {activeSection === 2 && section2.map((topic, index) => <SimpleGrow key={index} topic={topic} />)}
                {activeSection === 3 && section3.map((topic, index) => <SimpleGrow key={index} topic={topic} />)}
                {activeSection === 4 && section4.map((topic, index) => <SimpleGrow key={index} topic={topic} />)}
            </Box>
        </Box>
    );
}
