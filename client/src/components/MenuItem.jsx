import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import Burger from '../images/menu/Adygei.jpeg';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, minusItem, removeItem } from '../redux/slices/cart';

const Img = styled('img')({
  display: 'block',
  maxWidth: '356px',
  minHeight: '270px',
});

const MenuItem = ({ goods }) => {
  const [itemsNum, setItemsNum] = useState(0);
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const handleClickRemove = (event) => {
    event.preventDefault();
    setItemsNum((prev) => (prev <= 0 ? 0 : prev - 1));
    if (itemsNum > 1) {
      dispatch(minusItem(goods));
    } else if (itemsNum === 1) {
      dispatch(removeItem(goods.id));
    } else {
      console.log('Выберите заказ');
    }
  };

  const handleClickAdd = (event) => {
    event.preventDefault();
    setItemsNum((prev) => prev + 1);
    const product = {
      id: goods.id,
      title: goods.title,
      description: goods.description,
      price: goods.price,
      imageURL: goods.imageURL,
    };

    try {
      dispatch(addItem(product));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="burgersMenu-wrapper">
      <Paper elevation={3} sx={{ p: 2, maxWidth: 700, flexGrow: 1, minHeight: 300 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 8, md: 6 }}>
          <Grid item>
            <ButtonBase sx={{ width: 356, height: 270 }}>
              <Img alt="complex" src={Burger} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="subtitle1" component="div" sx={{ color: '#000' }}>
                  {goods.title}
                </Typography>
                <Typography variant="body2" gutterBottom sx={{ mt: 1 }}>
                  {goods.description}
                </Typography>
                <Grid item container sx={{ mt: 4 }}>
                  <Grid item>
                    <Typography variant="h6" component="span" sx={{ mr: 4 }}>
                      ₸ {goods.price}
                    </Typography>
                  </Grid>

                  <Fab
                    variant="extended"
                    size="small"
                    color="default"
                    aria-label="remove"
                    onClick={handleClickRemove}
                    sx={{ mr: 2 }}>
                    <RemoveIcon />
                  </Fab>
                  <Typography variant="h6">{itemsNum}</Typography>
                  <Fab
                    variant="extended"
                    size="small"
                    color="default"
                    aria-label="add"
                    onClick={handleClickAdd}
                    sx={{ ml: 2 }}>
                    <AddIcon />
                  </Fab>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default MenuItem;
