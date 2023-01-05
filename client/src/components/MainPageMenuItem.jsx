import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Burger from '../images/burger.png';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/cart';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  border: '1px solid rgba(53, 184, 190, 0.15)',
  borderRadius: '6px',
  padding: theme.spacing(2),
}));

const MainPageMenuItem = ({ item }) => {
  const [number, setNumber] = useState(1);
  const dispatch = useDispatch();

  const handleItem = (event) => {
    event.preventDefault();
    const product = {
      id: item.id,
      title: item.title,
      description: item.description,
      price: item.price,
      imageURL: item.imageURL,
    };
    try {
      for (let i = 0; i < number; i++) {
        dispatch(addItem(product));
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Grid item xs={12} sm={6} md={6}>
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
                onChange={(e) => setNumber(e.target.value)}
                sx={{ width: '70px', mr: '25px' }}
              />
            </div>

            <Button
              type="submit"
              onClick={(event) => handleItem(event)}
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
      </Item>
    </Grid>
  );
};

export default MainPageMenuItem;
