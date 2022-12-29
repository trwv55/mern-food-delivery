import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import Container from '@mui/material/Container';
import { experimentalStyled as styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { NavLink } from 'react-router-dom';
import Burger from '../images/burger.png';
import { fetchProducts } from '../redux/slices/products.js';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  border: '1px solid rgba(53, 184, 190, 0.15)',
  borderRadius: '6px',
  padding: theme.spacing(2),
}));

const MenuScreen = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const burgerItems = items.filter((item) => item.category === 'Burgers' && item.rating === 5);

  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await axios.get('/api/products');
  //     setProducts(res.data);
  //   };
  //   fetchData();
  // }, []);

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
              <div>Загрузка</div>
            ) : status === 'error' ? (
              <div>Страница недоступна</div>
            ) : (
              burgerItems.map((item, i) => (
                <Grid item xs={12} sm={6} md={6} key={i}>
                  <Item>
                    <div className="item-wrapper">
                      <img src={Burger} alt="" />
                      <div className="item-content">
                        <div className="price-flex">
                          <h4 className="item-title">{item.title}</h4>
                          <span> {item.price} T</span>
                        </div>

                        <p className="item-text">{item.description}</p>
                        <div className="item-add">
                          <TextField
                            id="standard-basic"
                            label="Количество"
                            variant="standard"
                            sx={{ width: '70px', mr: '25px' }}
                          />
                          <Button
                            variant="contained"
                            sx={{
                              background: '#35B8BE',
                              height: '45px',
                              width: '123px',
                            }}>
                            Add
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Item>
                </Grid>
              ))
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
