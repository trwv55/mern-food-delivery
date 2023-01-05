import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';
import Loading from './Loading.jsx';
import MainPageMenuItem from './MainPageMenuItem';

const MenuScreen = (props) => {
  const { items, status } = useSelector((state) => state.products.products);
  const burgerItems = items.filter((item) => item.category === 'Burgers' && item.rating === 5);

  return (
    <div className="menu-wrapper">
      <Container>
        <div className="menu-content">
          <h1 className="menu-title">Browse our menu</h1>
          <p className="menu-text">
            Use our menu to place an order online, or phone our store to place a pickup order. Fast
            and fresh food.
          </p>
          <div className="button-wrapper">
            <Button
              variant="contained"
              sx={{
                background: '#35B8BE',
                height: '52px',
                width: '147px',
                mt: '49px',
                mr: '20px',
              }}>
              Burgers
            </Button>
            <Button
              variant="contained"
              sx={{ background: '#35B8BE', height: '52px', width: '147px', mt: '49px' }}>
              Sides
            </Button>
          </div>
          <Grid
            container
            className="grid-container"
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}>
            {status === 'loading' ? (
              <Loading width={'1150'} height={'450'} />
            ) : status === 'error' ? (
              <div>Страница недоступна</div>
            ) : (
              burgerItems.map((item, i) => <MainPageMenuItem item={item} key={i} />)
            )}
          </Grid>

          <NavLink to={'/menu'}>
            <Button
              variant="contained"
              sx={{ background: '#35B8BE', height: '60px', width: '193px', mt: '49px' }}>
              See full menu
            </Button>
          </NavLink>
        </div>
      </Container>
    </div>
  );
};

export default MenuScreen;
