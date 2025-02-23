'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import SimpleGrow from '@/components/grow.jsx';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';


const section1 = [
    {
        title: "Spread Awareness",
        description: "Educate the public about abuse and its consequences.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA3Ok9KgTU-VNon2KxKfMT5LEg83CybHlYIw&s",
        contents: "Raising awareness is the first step to change. Share resources and information to help others recognize and prevent abuse.",
        modalContents: [
            "Awareness is the first step toward preventing abuse. Educating people about the realities of abuse can empower communities to act.",
            "Share resources such as videos, articles, infographics, and survivor testimonies.",
            "Organize or participate in community events, online campaigns, and school programs to spread knowledge.",
            "Teach bystanders how to intervene safely when they suspect abuse.",
            "Provide links to organizations that offer educational materials on recognizing, preventing, and addressing abuse.",
            "Collaborate with influencers, social media platforms, and schools to amplify the message."
        ]
    },
    {
        title: "Support Victims",
        description: "Provide emotional and practical support to survivors.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEFvDJPWPWm3Q9tPOxxdO5tu_ufS3WmZwqUw&s",
        contents: "Being there for victims can make a difference. Listen, believe, and offer guidance to available resources.",
        modalContents: [
            "Survivors of abuse often suffer from trauma, PTSD, anxiety, and depression—compassion and understanding are crucial.",
            "Offer emotional support by actively listening and validating their experiences without judgment.",
            "Help victims find safe spaces, shelters, or online support communities where they can heal.",
            "Provide resources on therapy and counseling services for survivors.",
            "Encourage legal support when needed and help victims understand their rights.",
            "Guide them to organizations that offer financial, medical, or legal aid."
        ]
    },
    {
        title: "Report Abuse",
        description: "Encourage reporting abuse to proper authorities.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKt2ZvCPg2XFwuWaUfUYVExH5lvXCmjcwmmA&s",
        contents: "Reporting abuse can prevent further harm. Support systems exist to protect victims and bring perpetrators to justice.",
        modalContents: [
            "Reporting abuse can prevent future harm and save lives, but victims often hesitate due to fear, shame, or lack of knowledge.",
            "Provide a step-by-step guide on how to report abuse anonymously or with assistance.",
            "Offer a list of helplines, local and international organizations, and law enforcement contacts.",
            "Explain what happens after a report is made, including legal procedures and protective measures.",
            "Discuss witness reporting—how bystanders can safely report abuse without putting themselves or the victim at risk.",
            "Address concerns like retaliation, privacy, and confidentiality when reporting abuse."
        ]
    }
];

const section2 = [
    {
        title: "Recognize Signs",
        description: "Understand common indicators of abuse.",
        image: "https://www.miamiherald.com/latest-news/klbt4u/picture260673582/alternates/LANDSCAPE_1140/iStock-1197819105.jpg",
        contents: "Knowing the warning signs can help prevent abuse and offer early intervention for victims.",
        modalContents: [
            "Abuse can take many forms: physical, emotional, sexual, financial, and neglect. Recognizing early warning signs can help in intervention.",
            "Common signs of abuse:",
            "Physical Abuse: Unexplained bruises, burns, fractures, fear of physical contact.",
            "Emotional Abuse: Low self-esteem, self-isolation, anxiety, excessive guilt, fearfulness.",
            "Sexual Abuse: Difficulty walking/sitting, fear of a particular person, age-inappropriate sexual knowledge.",
            "Neglect: Malnutrition, poor hygiene, unattended medical issues, wearing inappropriate clothing for weather conditions.",
            "How to respond if you suspect someone is being abused.",
            "Training programs for teachers, caregivers, and community members to recognize and respond to abuse signs."    
        ]
    },
    {
        title: "Understand Its Impact",
        description: "Learn about the lasting effects of abuse.",
        image: "https://mulberrybush.org.uk/wp-content/uploads/2024/07/signs-of-childhood-trauma.png",
        contents: "Abuse affects mental and physical well-being. Raising awareness can lead to greater compassion and action.",
        modalContents: [
            "Abuse has long-term effects on victims, influencing their mental, emotional, and physical well-being.",
            "The psychological toll includes PTSD, depression, self-harm, and suicidal thoughts.",
            "Physical consequences can range from chronic pain to severe medical conditions caused by prolonged stress.",
            "Abuse affects trust, relationships, and overall quality of life, often making it hard for victims to function normally in society.",
            "Survivors might struggle with self-worth, employment, or maintaining healthy relationships due to past trauma.",
            "Support systems, therapy, and community assistance can help victims heal and regain control of their lives."
        
        ]
    }
];

const section3 = [
    {
        title: "Share Facts",
        description: "Spread accurate information about abuse.",
        image: "https://t3.ftcdn.net/jpg/06/88/84/74/360_F_688847481_BqEEd3fqnMSE4ai9abuvuoQpxVInAX9z.jpg",
        contents: "Knowledge is power. Misinformation can enable abuse, while facts empower people to take action.",
        modalContents: [
            "Knowledge is a powerful tool against abuse. Understanding the scope of the issue can motivate action.",
            "Global statistics on abuse:",
            "1 in 3 women experiences physical or sexual violence in their lifetime.",
            "Child abuse cases are often underreported due to fear or manipulation.",
            "Many domestic violence victims return to abusive relationships due to financial dependence or lack of support.",
            "How misinformation about abuse can harm victims and prevent proper intervention.",
            "Ways to verify information before sharing to avoid spreading false narratives.",
            "How laws and protection services vary by country—whats legal in one place may not be in another."
        ]
    },
    {
        title: "Debunk Myths",
        description: "Challenge misconceptions about abuse.",
        image: "https://img.freepik.com/free-vector/woman-looking-through-magnifying-glass-comparing-myths-facts_88138-737.jpg",
        contents: "Many myths about abuse prevent victims from getting help. Education is key to dismantling these barriers.",
        modalContents: [
            "Many common misconceptions prevent people from recognizing abuse or taking it seriously.",
            "Myth: Abuse only happens in poor or uneducated communities.",
            "Truth: Abuse can happen to anyone, regardless of background, education, or financial status.",
            "Myth: If a victim doesnt leave, they must not want help.",
            "Truth: Leaving an abusive situation is difficult due to fear, financial dependence, or psychological manipulation.",
            "Myth: Men cant be victims of abuse.",
            "Truth: Men also experience abuse, but stigma often prevents them from speaking out.",
            "Myth: Emotional abuse isnt as serious as physical abuse.",
            "Truth: Emotional and psychological abuse can have lasting mental health effects.",
            "Providing education and awareness can help break these harmful stereotypes."
        ]
    }
];


const section4 = [
    {
        title: "1 Button Thousand Lifes",
        description: "By punting 1 button on major website to signal they are being abused can save lives",
        image: "https://media.istockphoto.com/id/585171778/photo/red-button-isolated-on-white.jpg?s=612x612&w=0&k=20&c=sobboSjSpJJrSO84C3X3jnzfh12Tpp_m3mxdQIyX5XM=",
        contents: "Utilizing the world of technology by adding a button to signal that they are being abused, to notify the authorities while being subtle.",
        modalContents: [
            "Technology can be used as a silent distress tool for victims who cannot openly seek help.",
            "A single button on major websites (e.g., social media, e-commerce platforms) can send an immediate alert to authorities.",
            "How a discreet 'Help' button could work:",
            "Can be disguised as a normal button (e.g., changing settings, reading a news article) but triggers a hidden alert.",
            "Sends an automatic distress signal with the victim’s location.",
            "Redirects the user to a fake but safe webpage while authorities are alerted.",
            "Examples of similar systems: Uber's emergency button, silent alarms in banks.",
            "Collaboration with tech companies to integrate such features into their platforms."
        ]
    },
    {
        title: "Extend help",
        description: "Use of brower extensions as a medium to call authorities",
        image: "https://blog.tryshiftcdn.com/uploads/2022/06/browser-extensions-blog@2x.png",
        contents: "By creating web extentions like change of font with a hidden button to alert the authorities to your location.",
        modalContents: [
            "• Web extensions can be developed to provide a hidden lifeline for abuse victims.",
            "• How browser extensions can work:\n",
            "   - A disguised UI feature (e.g., a 'Read Mode' button) that sends an alert to pre-selected contacts or authorities.\n",
            "   - Auto-clearing browsing history related to help-seeking searches.\n",
            "   - Coded messages or a safe word system to trigger emergency assistance.\n",
            "• How AI can assist in detecting patterns of distress and suggest resources or emergency contacts.\n",
            "• Case studies of existing tech-based interventions and their effectiveness.\n",
            "• The importance of confidentiality and encryption in protecting user data.\n"
        ]
        
    }
];

export default function ParentComponent() {
    const [activeSection, setActiveSection] = React.useState(1);
    const [modalContent, setModalContent] = React.useState(""); 
    const [open, setOpen] = React.useState(false); 

    const handleActivate = (sectionNumber) => {
        setActiveSection(sectionNumber);
    };

    const handleOpen = (content) => {
        setModalContent(content);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'row', sm: 'row' }, justifyContent: 'center', gap: 2 }}>
                {["To Help", "Become Aware", "Legal Aid", "Projects"].map((label, index) => (
                    <FormControlLabel
                        key={index}
                        control={<Switch checked={activeSection === index + 1} onChange={() => handleActivate(index + 1)} />}
                        label={label}
                    />
                ))}
            </Box>

            <Box sx={{ display: "flex", flexDirection: "row", gap: 3 }}>
                {[section1, section2, section3, section4][activeSection - 1].map((topic, index) => (
                    <Box key={index} onClick={() => handleOpen(topic.modalContents)}>
                        <SimpleGrow topic={topic} />
                    </Box>
                ))}
            </Box>

            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 500 }}
            >
                <Fade in={open}>
                    <Box    sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            alignItems: "center",
                            width: "100%", 
                            maxWidth: "1000px", 
                            margin: "0 auto", 
                            padding: "20px",
                            backgroundColor: "#1A1A2E",
                            border: "2px solid #2196F3", 
                            borderRadius: "8px",
                            boxShadow: "0px 4px 8px rgba(33, 150, 243, 0.3)",
                        }}>
                        <Typography variant="h6" component="h2">
                            Information
                        </Typography>
                        {Array.isArray(modalContent) ? (
                            modalContent.map((line, i) => (
                                <Typography key={i} variant="body1" sx={{ color: "#ddd", mt: 1 }}>
                                    {line.startsWith("-") ? <>&#8226; {line.slice(1)}</> : line}
                                </Typography>
                            ))
                        ) : (
                            <Typography sx={{ color: "#ddd", mt: 2 }}>{modalContent}</Typography>
                        )}
                    </Box>
                </Fade>
            </Modal>
        </Box>
    );
}
