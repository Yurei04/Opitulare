import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { Typography, useTheme } from '@mui/material';

const heights = [250, 130, 190, 170, 190, 100, 150, 130, 150, 80];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
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
  return (
    <Box sx={{ width: 1000, minHeight: 700 }}>
      <Masonry columns={4} spacing={2}>
        {heights.map((height, index) => (
          <Item key={index} sx={{ height }}>
            <Typography variant="h6">{itemData[index].title} {index + 1}</Typography>
            <Typography variant="body2">{itemData[index].content}</Typography>
          </Item>
        ))}
      </Masonry>
    </Box>
  );
}
