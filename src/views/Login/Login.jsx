import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        background: {
          default: "#0F131C"
        }
      }
  });

export default function SignIn() {

  return (
    <div style={{"display": "flex",
                 "flexDirection": "column",
                 "alignItems": "center",
                 "justifyContent": "center",
                 "width": "56.25vh"}}>
      <img src='https://cdn.discordapp.com/attachments/891129799974719559/891799763291365396/image0.png'
           alt='logo' />
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs" >
        <CssBaseline />
          <Box bgcolor="white"
            sx={{
              borderRadius: '12px',
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box mb={3} />
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1, display:'flex', flexDirection: 'column' }}>
              <TextField
                margin="normal"
                required
                id="email"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                href="/forms"
              >
                Sign In
              </Button>
            </Box>
              label="Senha"
              label="Lembrar"
              label="Endereço de Email"
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}