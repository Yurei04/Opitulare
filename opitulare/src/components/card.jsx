import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import useIntersectionObserver from './useIntersectionObserver';


export default function OutlinedCard({ title, type, contents }) {
  const [ref, isVisible] = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });
  
  return (
    <Box 
    ref={ref}
    sx={{
    minWidth: 275,
    transition: 'transform 0.3s, box-shadow 0.3s, border 0.3s, opacity 0.3s',
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    opacity: isVisible ? 1 : 0,}}
    >
      <Card 
        variant="outlined" 
        sx={{
          bgcolor: "#121212", 
          border: "2px solid #2196F3", 
          color: "white", 
          borderRadius: 2, 
          boxShadow: "0px 4px 10px rgba(33, 150, 243, 0.3)", 
        }}
      >
        <CardContent>
          <Typography 
            gutterBottom 
            sx={{ color: "#90CAF9", fontSize: 14 }} 
          >
            {title}
          </Typography>
          <Typography 
            sx={{ color: "#BBDEFB", mb: 1.5 }} 
          >
            {type}
          </Typography>
          <Typography variant="body2">
            {contents}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
