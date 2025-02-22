import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import useIntersectionObserver from './useIntersectionObserver';


const StyledAccordion = styled(Accordion)(() => ({
  backgroundColor: "#1A1A2E", 
  border: "2px solid #2196F3", 
  color: "#BBDEFB", 
  borderRadius: "8px",
  boxShadow: "0px 4px 8px rgba(33, 150, 243, 0.3)", 
  "& .MuiTypography-root": {
    color: "#90CAF9", 
  },
  "& .MuiSvgIcon-root": {
    color: "#2196F3",
  },
}));

export default function ControlledAccordions() {
  const [ref, isVisible] = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div 
    ref={ref}
    sx={{
      transition: 'transform 0.3s, box-shadow 0.3s, border 0.3s, opacity 0.3s',
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      opacity: isVisible ? 1 : 0,
    }}
    style={{ backgroundColor: "#121212", padding: "20px", borderRadius: "10px" }}>
      <StyledAccordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
          <Typography sx={{ width: '33%', flexShrink: 0 }}>General settings</Typography>
          <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
          </Typography>
        </AccordionDetails>
      </StyledAccordion>

      <StyledAccordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
          <Typography sx={{ color: 'text.secondary' }}>You are currently not an owner</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus.
          </Typography>
        </AccordionDetails>
      </StyledAccordion>

      <StyledAccordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Advanced settings</Typography>
          <Typography sx={{ color: 'text.secondary' }}>Filtering has been disabled</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
          </Typography>
        </AccordionDetails>
      </StyledAccordion>

      <StyledAccordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Integer sit amet egestas eros, vitae egestas augue.
          </Typography>
        </AccordionDetails>
      </StyledAccordion>
    </div>
  );
}
