import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Divider, Link, TextField, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Navigate, NavLink } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { fetchAuth, selectIsAuth } from '../redux/slices/auth';

const Form = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
}));

const theme = createTheme();
const textField = {
  margin: theme.spacing(2),
  width: '55ch',
};

const LoginScreen = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: 'test@ds.ru',
      password: '12345Fvd',
    },
    mode: 'onChange',
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));

    if (!data.payload) {
      return alert('Не удалось авторизоваться!');
    } else {
      window.localStorage.setItem('token', data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <Container>
      <Typography variant="h2" component="h1" sx={{ mt: 3 }}>
        Войти в аккаунт
      </Typography>
      <Divider sx={{ borderBottomWidth: 3, bgcolor: '#000', mb: 4 }} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            id="mail"
            label="Email"
            variant="outlined"
            type="email"
            error={Boolean(errors.email?.message)}
            helperText={errors.email?.message}
            {...register('email', { required: 'Укажите почту' })}
            sx={textField}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            error={Boolean(errors.password?.message)}
            helperText={errors.password?.message}
            sx={textField}
            {...register('password', { required: 'Укажите пароль' })}
          />
        </Box>
        <Button type="submit" variant="contained" color="primary" sx={textField}>
          Войти
        </Button>
      </form>
      <Typography variant="body1" component="p" sx={{ mt: 3, pl: 2, mb: '25vh' }}>
        У вас еще нет аккаунта?{' '}
        <Link href="/register">
          <NavLink to={'/register'}>Зарегистрироваться</NavLink>
        </Link>
      </Typography>
    </Container>
  );
};

export default LoginScreen;
