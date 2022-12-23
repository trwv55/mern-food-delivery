import React from 'react';
import { Button } from '@mui/material';
import Container from '@mui/material/Container';
import { experimentalStyled as styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Burger from '../images/burger.png';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  border: '1px solid rgba(53, 184, 190, 0.15)',
  borderRadius: '6px',
  padding: theme.spacing(2),
}));

const MenuScreen = () => {
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
            {Array.from(Array(6)).map((_, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <Item>
                  <div className="item-wrapper">
                    <img src={Burger} alt="" />
                    <div className="item-content">
                      <div className="price-flex">
                        <h4 className="item-title">Burger Dreams</h4>
                        <span>$ 9.20 USD</span>
                      </div>

                      <p className="item-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </p>
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
            ))}
          </Grid>
          <Button
            variant="contained"
            sx={{ background: '#35B8BE', height: '60px', width: '193px', mt: '49px' }}>
            See full menu
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default MenuScreen;
