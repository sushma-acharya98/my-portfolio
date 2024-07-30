import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About: React.FC = () => {
  return (
    <Container>
      <Box className='about-me'>
        <Box className='MY-Info'>
          <Typography variant="h1">SUSHMA ACHARYA</Typography>
          PASSIONATE WEB DEVELOPER FROM NEPAL
        </Box>
      </Box>
    </Container>
  );
};

export default About;
