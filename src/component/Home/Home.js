import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../Assets/logo.jpg'


const theme = createTheme();

export default function Home() {

  

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        

          <img src={logo} alt="logo"/>

          <Typography component="h1" variant="h5" >

          accueil
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}