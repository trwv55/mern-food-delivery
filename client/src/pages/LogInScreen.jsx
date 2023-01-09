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

const LogInScreen = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1" sx={{ mt: 3 }}>
        Войти в аккаунт
      </Typography>
      <Divider sx={{ borderBottomWidth: 3, bgcolor: '#000', mb: 4 }} />
      <Form autoComplete="off">
        <TextField id="mail" label="Email" variant="outlined" required sx={textField} />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          sx={textField}
          required
        />
        <Button variant="contained" color="primary" sx={textField}>
          Login
        </Button>
      </Form>
      <Typography variant="body1" component="p" sx={{ mt: 3, pl: 2, mb: '25vh' }}>
        У вас еще нет аккаунта?{' '}
        <Link href="/register">
          <NavLink to={'/register'}>Зарегистрироваться</NavLink>
        </Link>
      </Typography>
    </Container>
  );
};

export default LogInScreen;
