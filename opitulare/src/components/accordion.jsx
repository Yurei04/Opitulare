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
          <Typography sx={{ width: '33%', flexShrink: 0 }}>What</Typography>
          <Typography sx={{ color: 'text.secondary' }}>What is abused?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Abuse is any act that harms someone physically, emotionally, sexually, or financially.
          </Typography>
        </AccordionDetails>
      </StyledAccordion>

      <StyledAccordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Where</Typography>
          <Typography sx={{ color: 'text.secondary' }}>Where does abused happens</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Abuse happens in homes, schools, workplaces, online spaces, and even in public institutions.
          </Typography>
        </AccordionDetails>
      </StyledAccordion>

      <StyledAccordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Why</Typography>
          <Typography sx={{ color: 'text.secondary' }}>Why does it happen?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          People are abused due to power imbalances, control, manipulation, or societal norms that tolerate mistreatment.
          </Typography>
        </AccordionDetails>
      </StyledAccordion>

      <StyledAccordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
          <Typography sx={{ width: '33%', flexShrink: 0 }}>How</Typography>
          <Typography sx={{ color: 'text.secondary' }}>How to help?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Support victims by listening, reporting abuse, offering resources, and encouraging them to seek professional help.
          </Typography>
        </AccordionDetails>
      </StyledAccordion>
    </div>
  );
}
