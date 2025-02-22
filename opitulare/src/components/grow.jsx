'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';
import ActionAreaCard from '@/components/actionAreaCard.jsx';
import Card from '@/components/card.jsx';

export default function SimpleGrow({ topic }) {
  return (
    <Grow in={true}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2
      }}>
        <ActionAreaCard 
          title={topic.title}
          description={topic.description}
          imageSrc={topic.image} 
        />
        
        <Card 
          title={topic.title}
          contents={topic.contents}
        />
      </Box>
    </Grow>
  );
}
