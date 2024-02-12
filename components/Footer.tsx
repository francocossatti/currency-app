"use client";
import React from 'react';
import { Box, Container, Typography, Grid, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <Box sx={{ width: '100%', position: 'absolute', bottom: 0, alignItems: 'center', }} >
      <Container maxWidth={false}>
        <Grid container alignItems="center">
          <Grid item xs={12}>
            <Box
              sx={{
                borderTop: '1px solid rgba(255, 255, 255, 0.75)'
              }}
            />
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body1" sx={{ fontSize: '2svh' }}>
              © 2024 Franco Cossatti
            </Typography>
          </Grid>
          <Grid item xs={4} container justifyContent="flex-end">
          <IconButton color="inherit" sx={{ fontSize: '2svh' }} onClick={event =>  window.location.href='https://github.com/francocossatti'}> 
              <GitHubIcon/>
            </IconButton>
            <IconButton color="inherit" sx={{ fontSize: '2svh' }} onClick={event =>  window.location.href='https://www.linkedin.com/in/franco-cossatti/'}>
              <LinkedInIcon/>
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
