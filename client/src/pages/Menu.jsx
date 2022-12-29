import React from 'react';
import { useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import MenuItems from '../components/MenuItems';

const Menu = () => {
  const { items, status } = useSelector((state) => state.products.products);

  return (
    <>
      <Container>
        <div className="menuTitle-wrapper">
          <Typography variant="h2" component="h1">
            Menu
          </Typography>
          <Divider sx={{ borderBottomWidth: 3, bgcolor: '#000' }} />
        </div>
        <div className="burgersTitle-wrapper">
          <Divider textAlign="left">
            <Typography variant="h4">Burgers</Typography>
          </Divider>
        </div>
      </Container>
      <MenuItems />
      <div className="saladsTitle-wrapper">
        <Container>
          <Divider textAlign="left" sx={{ mt: 4 }}>
            <Typography variant="h4">Salads</Typography>
          </Divider>
        </Container>
      </div>
      <MenuItems />
    </>
  );
};

export default Menu;
