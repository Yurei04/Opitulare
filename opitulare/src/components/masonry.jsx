import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { Typography } from '@mui/material';
import useIntersectionObserver from './useIntersectionObserver';

const heights = [250, 130, 190, 170, 190, 100, 150, 130, 150, 80];

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
  { title: "Item", content: "Content 1" },
  { title: "Item", content: "Content 2" },
  { title: "Item", content: "Content 3" },
  { title: "Item", content: "Content 4" },
  { title: "Item", content: "Content 5" },
  { title: "Item", content: "Content 6" },
  { title: "Item", content: "Content 7" },
  { title: "Item", content: "Content 8" },
  { title: "Item", content: "Content 9" },
  { title: "Item", content: "Content 10" },
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
