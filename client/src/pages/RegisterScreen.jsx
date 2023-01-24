import React, { useEffect } from 'react';
import { Button, Container, Divider, Link, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createTheme } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { fetchReg, selectIsAuth } from '../redux/slices/auth';

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
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  // useEffect(() => {
  //   if (watch('password') !== watch('confirmPassword')) {
  //     setError('password', 'notMatch', 'Passwords do not match');
  //   }
  // }, [watch('password'), watch('confirmPassword'), setError]);

  const onSubmit = async (values) => {
    const data = await dispatch(fetchReg(values));

    if (!data.payload) {
      return alert('Не удалось зарегестрироваться!');
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
        Регистрация
      </Typography>
      <Divider sx={{ borderBottomWidth: 3, bgcolor: '#000', mb: 4 }} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          error={Boolean(errors.name?.message)}
          helperText={errors.name?.message}
          {...register('name', { required: 'Укажите ваше имя' })}
          id="name"
          label="Name"
          variant="outlined"
          required
          sx={textField}
        />
        <TextField
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          {...register('email', { required: 'Укажите почту' })}
          id="mail"
          label="Email"
          variant="outlined"
          required
          sx={textField}
        />
        <TextField
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          {...register('password', {
            required:
              'Пароль должен быть минимум 6 символов, содержать одну заглавную и строчную буквы',
          })}
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          sx={textField}
          required
        />
        <Button type="submit" variant="contained" color="primary" sx={textField}>
          Зарегестрироваться
        </Button>
      </form>
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
