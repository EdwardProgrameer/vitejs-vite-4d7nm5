import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Link,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '50px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  title: {
    marginBottom: '30px',
  },
  textField: {
    marginBottom: '20px',
  },
  button: {
    marginTop: '20px',
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  icon: {
    fontSize: '50px',
    marginBottom: '20px',
    color: theme.palette.primary.main,
  },
  link: {
    color: theme.palette.primary.main,
  },
}));

const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario a un servidor o para validar los datos ingresados
  };

  return (
    <Container maxWidth="sm" className={classes.container}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <LockOutlinedIcon className={classes.icon} />
        <Typography variant="h5" className={classes.title}>
          Iniciar sesión
        </Typography>
        <TextField
          label="Correo electrónico"
          variant="outlined"
          fullWidth
          className={classes.textField}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          type="password"
          fullWidth
          className={classes.textField}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          className={classes.button}
        >
          Iniciar sesión
        </Button>
        <Box mt={2}>
          <Link href="#" className={classes.link}>
            ¿Olvidaste tu contraseña?
          </Link>
        </Box>
      </form>
    </Container>
  );
};

export default Login;
