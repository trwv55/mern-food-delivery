import React from 'react';
import { AppBar, Toolbar, Badge } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from '../images/header-footer/logo-head.svg';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const theme = createTheme();
const navlinks = {
  display: 'flex',
};

const links = {
  color: '#28224B',
  fontSize: '17px',
  justifyContent: 'flex-end',
  marginLeft: theme.spacing(10),
  display: { xs: 'none', md: 'flex' },
  '&:hover': {
    color: '#35B8BE',
  },
};

const logo = {
  cursor: 'pointer',
  marginLeft: theme.spacing(10),
};

const cart = {
  marginLeft: theme.spacing(5),
  cursor: 'pointer',
};

const Header = ({ handleCart }) => {
  const { items, totalItems } = useSelector((state) => state.cart);

  return (
    <AppBar className="header-wrapper" position="sticky" sx={{ background: '#ffffff' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link sx={logo} href="/">
          <NavLink to={'/'}>
            <img src={Logo} alt="logo" />
          </NavLink>
        </Link>
        <Box sx={navlinks}>
          <Link sx={links} href="/" underline="none">
            <NavLink to={'/'}>Главная</NavLink>
          </Link>
          <Link sx={links} href="/" underline="none">
            <NavLink to={'/menu'}>Меню</NavLink>
          </Link>
          <Link sx={links} href="/" underline="none">
            <NavLink to={'/login'}>Войти</NavLink>
          </Link>
          <Link sx={links} href="/register" underline="none">
            Регистрация
          </Link>
          <Badge color="success" badgeContent={totalItems} sx={{ mr: '35px' }}>
            <ShoppingCartIcon onClick={handleCart} color="action" sx={cart} />
          </Badge>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
