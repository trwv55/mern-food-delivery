import React from 'react';
import { Button, Container, Divider, Link, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';

const Form = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
}));

const theme = createTheme();
const textField = {
  margin: theme.spacing(2),
  width: '55ch',
};

const RegisterScreen = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1" sx={{ mt: 3 }}>
        Регистрация
      </Typography>
      <Divider sx={{ borderBottomWidth: 3, bgcolor: '#000', mb: 4 }} />
      <Form autoComplete="off">
        <TextField id="name" label="Name" variant="outlined" required sx={textField} />
        <TextField id="mail" label="Email" variant="outlined" required sx={textField} />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          sx={textField}
          required
        />
        <TextField
          id="password"
          label="Confirm Password"
          type="password"
          variant="outlined"
          sx={textField}
          required
        />
        <Button variant="contained" color="primary" sx={textField}>
          Зарегестрироваться
        </Button>
      </Form>
      <Typography variant="body1" component="p" sx={{ mt: 3, pl: 2, mb: '25vh' }}>
        Уже есть аккаунт?{' '}
        <Link href="/register">
          <NavLink to={'/login'}>Войти</NavLink>
        </Link>
      </Typography>
    </Container>
  );
};

export default RegisterScreen;
