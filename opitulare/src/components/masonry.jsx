import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import Typography  from '@mui/material/Typography';
import useIntersectionObserver from '@/components/useIntersectionObserver';

const heights = [250, 130, 190, 170, 190, 150, 150, 130, 150, 180];

const Item = styled(Paper)(() => ({
  backgroundColor: "#1A1A2E",
  border: "2px solid #2196F3",
  padding: "16px",
  textAlign: "center",
  color: "#BBDEFB",
  borderRadius: "10px",
  boxShadow: "0px 4px 8px rgba(33, 150, 243, 0.3)",
}));

const itemData = [
  { title: "Recognizing Abuse", content: "Learn the signs of emotional, physical, and sexual abuse in children and teens." },
  { title: "How to Get Help", content: "A step-by-step guide on where to seek help and report abuse safely." },
  { title: "Supporting a Friend", content: "How to support a friend who may be experiencing abuse." },
  { title: "Legal Rights for Survivors", content: "Know the legal protections available for abuse survivors." },
  { title: "Healing from Trauma", content: "Tips on coping and healing after experiencing abuse." },
  { title: "Online Safety for Teens", content: "Protecting yourself from online exploitation and grooming." },
  { title: "Resources for Parents", content: "How parents can identify and prevent child abuse." },
  { title: "Breaking the Silence", content: "Stories of survivors and their journeys to healing." },
  { title: "The Impact of Abuse", content: "Understanding the long-term effects of abuse on mental health." },
  { title: "Reporting Abuse Anonymously", content: "How to report abuse while protecting your identity." },
];


export default function FixedColumns() {
  const [ref, isVisible] = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  return (
    <Box
      ref={ref}
      sx={{
        width: 1000,
        minHeight: 700,
        transition: 'transform 0.3s, box-shadow 0.3s, border 0.3s, opacity 0.3s',
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        opacity: isVisible ? 1 : 0,
      }}
    >
      <Masonry columns={4} spacing={2}>
        {heights.map((height, index) => (
          <Item key={index} sx={{ height }}>
            <Typography variant="h6">{itemData[index]?.title} {index + 1}</Typography>
            <Typography variant="body2">{itemData[index]?.content}</Typography>
          </Item>
        ))}
      </Masonry>
    </Box>
  );
}
