import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { clearItems } from '../redux/slices/cart';

// const Btn = styled(Button)(({ theme }) => ({
//   background: '#35B8BE',
//   height: '52px',
//   width: '147px',
//   color: '#ffffff',
//   ml: theme.spacing(3),
// }));

const ShoppingCart = (props) => {
  const dispatch = useDispatch();
  const { cartOpen, closeCart } = props;
  const { totalItems, items } = useSelector((state) => state.cart);

  const handleCartItem = (event) => {
    event.preventDefault();
    if (window.confirm('Вы уверены что хотите удалить заказ?')) {
      dispatch(clearItems());
    }
  };

  const calcTotalPrice = () => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      total += item.count * item.price;
    }
    return total;
  };

  let totalPrice = calcTotalPrice();

  return (
    <Drawer anchor="right" open={cartOpen} onClose={closeCart}>
      <List sx={{ width: 500 }}>
        <ListItem>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Корзина" />
        </ListItem>
        <Divider />
        <ListItem sx={{ mt: 2 }}>{totalItems === 0 ? 'Корзина пуста!' : 'Ваш заказ:'}</ListItem>
        {items.map((item, i) => (
          <CartItem item={item} key={i} />
        ))}
        <ListItem sx={{ mt: 2 }}>
          <Typography
            sx={{ display: 'block', mt: 1 }}
            component="h3"
            variant="title3"
            color="#35b8be">
            Заказ: {totalPrice} ₸
          </Typography>
        </ListItem>
        {totalItems ? (
          <ListItem sx={{ display: 'flex', mt: 1 }}>
            <Button
              variant="contained"
              sx={{
                background: '#35B8BE',
                height: '45px',
                width: '193px',
                color: '#ffffff',
              }}>
              Оплатить заказ
            </Button>
            <Button
              variant="outlined"
              onClick={handleCartItem}
              sx={{
                height: '45px',
                width: '193px',
                ml: 3,
              }}>
              Очистить корзину
            </Button>
          </ListItem>
        ) : (
          ' '
        )}
      </List>
    </Drawer>
  );
};

export default ShoppingCart;
