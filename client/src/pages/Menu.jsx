import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import MenuItem from '../components/MenuItem';
import Grid from '@mui/material/Grid';
import { fetchProducts } from '../redux/slices/products.js';
import Loading from '../components/Loading';

const Menu = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const burgersItems = items.filter((item) => item.category === 'Burgers');
  const burNum = burgersItems.length;
  const dishesItems = items.filter((item) => item.category === 'Sides');
  const saladsItems = items.filter((item) => item.category === 'Salads');
  const dessertsItems = items.filter((item) => item.category === 'Desserts');

  return (
    <>
      <Container>
        <div className="menuTitle-wrapper">
          <Typography variant="h2" component="h1">
            Меню
          </Typography>
          <Divider sx={{ borderBottomWidth: 3, bgcolor: '#000' }} />
        </div>
        <div className="burgersTitle-wrapper">
          <Divider textAlign="left">
            <Typography variant="h4">Бургеры</Typography>
          </Divider>
        </div>
      </Container>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {status === 'loading'
          ? [...Array(burNum)].map(() => <Loading width={'600'} height={'300'} ml={'20'} />)
          : burgersItems.map((item, i) => (
              <Grid item xs={12} md={6} sx={{ ml: 0, width: '100%' }} key={i}>
                <MenuItem goods={item} />
              </Grid>
            ))}
      </Grid>
      <div className="saladsTitle-wrapper">
        <Container>
          <Divider textAlign="left" sx={{ mt: 4 }}>
            <Typography variant="h4">Гарниры</Typography>
          </Divider>
        </Container>
      </div>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {status === 'loading'
          ? [...Array(dishesItems.length)].map(() => (
              <Loading width={'600'} height={'300'} ml={'20'} />
            ))
          : dishesItems.map((item, i) => (
              <Grid item xs={12} md={6} sx={{ ml: 0, width: '100%' }} key={i}>
                <MenuItem goods={item} />
              </Grid>
            ))}
      </Grid>

      <div className="saladsTitle-wrapper">
        <Container>
          <Divider textAlign="left" sx={{ mt: 4 }}>
            <Typography variant="h4">Салаты</Typography>
          </Divider>
        </Container>
      </div>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {status === 'loading'
          ? [...Array(saladsItems.length)].map(() => (
              <Loading width={'600'} height={'300'} ml={'20'} />
            ))
          : saladsItems.map((item, i) => (
              <Grid item xs={12} md={6} sx={{ ml: 0, width: '100%' }} key={i}>
                <MenuItem goods={item} />
              </Grid>
            ))}
      </Grid>

      <div className="saladsTitle-wrapper desserts">
        <Container>
          <Divider textAlign="left" sx={{ mt: 4 }}>
            <Typography variant="h4">Десерты</Typography>
          </Divider>
        </Container>
      </div>
      <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mb: 8 }}>
        {status === 'loading'
          ? [...Array(dessertsItems.length)].map(() => (
              <Loading width={'600'} height={'300'} ml={'20'} />
            ))
          : dessertsItems.map((item, i) => (
              <Grid item xs={12} md={6} sx={{ ml: 0, width: '100%' }} key={i}>
                <MenuItem goods={item} />
              </Grid>
            ))}
      </Grid>
    </>
  );
};

export default Menu;
