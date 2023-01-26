import React, { Redirect } from "react";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../Assets/logo.jpg'
import { registration } from '../../service//helpers/authentification';
import { Validate, ValidationGroup } from 'mui-validate';
import { createBrowserHistory } from 'history';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const history = createBrowserHistory();
export default function SignUp() {

  function Login() {
    React.useEffect(() => {
      history.push('/pageafterlogin')
    }, [])
  
    return <h1>Login page</h1>
  }
  function handleSubmit(event){
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    var object = {};
    data.forEach((value, key) => {
      if (!Reflect.has(object, key)) {
        object[key] = value;
        return;
      }
      if (!Array.isArray(object[key])) {
        object[key] = [object[key]];
      }
      object[key].push(value);
    })
    registration(object)
      .then((response) => {
          if (response.status===201) {
            window.location.href = "/home"
          }
      })      
}

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
        
          <img src={logo} alt="logo" />
          <Typography component="h1" variant="h5">

            Inscription
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <ValidationGroup>
                <Grid item xs={12} sm={6}>

                  <Validate name="firstName" required regex={[/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u, 'Veuillez saisir un prénom valide']}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="Prenom"
                      autoFocus
                    />
                  </Validate>

                </Grid>

                <Grid item xs={12} sm={6}>
                  <Validate name="lastName" required regex={[/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u, 'Veuillez saisir un nom valide']}>

                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Nom"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Validate>

                </Grid>

                <Grid item xs={12}>
                  <Validate name="email" required regex={[/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Veuillez saisir un email valide']}>

                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email"
                      name="email"
                      autoComplete="email"
                    />
                  </Validate>
                </Grid>
                <Grid item xs={12}>
                  <Validate name="adress" required regex={[/^[a-zA-Z0-9\s,'-]*$/, 'Veuillez saisir une adresse valide']}>

                    <TextField
                      required
                      fullWidth
                      id="adress"
                      label="Adresse"
                      name="adress"
                      autoComplete="adress"
                    />
                  </Validate>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Validate name="city" required regex={[/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/, 'Veuillez saisir une ville valide']}>
                    <TextField
                      autoComplete="given-name"
                      name="city"
                      required
                      fullWidth
                      id="city"
                      label="Ville"
                      autoFocus
                    />
                  </Validate>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Validate name="postIndex" required regex={[/^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/, 'Veuillez saisir un code postale valide']}>

                    <TextField
                      required
                      fullWidth
                      id="postIndex"
                      label="Code Postale"
                      name="postIndex"
                      autoComplete="family-name"
                    />
                  </Validate>

                </Grid>

                <Grid item xs={12}>
                  <Validate name="phoneNumber" required regex={[/^[+](\d{3})\)?(\d{3})(\d{5,6})$|^(\d{10,10})$/, 'Veuillez saisir un numero valide']}>
                    <TextField
                      required
                      fullWidth
                      id="phoneNumber"
                      label="Numéro de téléphone"
                      name="phoneNumber"
                      autoComplete="phoneNumber"
                    />
                  </Validate>

                </Grid>

                <Grid item xs={12}>
                  <Validate name="username" required regex={[/^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/, "Veuillez saisir un pseudo valide : longeur 8 à 20 , charactère alphanumerique "]}>

                    <TextField
                      required
                      fullWidth
                      id="username"
                      label="Nom d'utilisateur"
                      name="username"
                      autoComplete="email"
                    />
                  </Validate>

                </Grid>

                <Grid item xs={12}>
                  <Validate name="password" required regex={[/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, "Veuillez saisir un mots de passe valide : minimum huit caractères, au moins une lettre et un chiffre "]}>

                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Mot de passe"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Validate>
                </Grid>
                <Grid item xs={12}>                
                    <FormControlLabel
                      control={<Checkbox value="allowExtraEmails" color="primary" required={true}/>}
                      label="J'accepte de recevoir des promotions marketing et des mises à jour par e-mail."
                    />
                </Grid>
              </ValidationGroup>
            </Grid>
            <Button
              id="signUp"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Inscription
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="singin" variant="body2">

                  Vous avez déjà un compte? S'identifier
                </Link>
              </Grid>
            </Grid>

          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}