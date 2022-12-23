import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react';

const ShoppingCart = (props) => {
  const { cartOpen, closeCart } = props;
  return (
    <Drawer anchor="right" open={cartOpen} onClose={closeCart}>
      <List sx={{ width: 450 }}>
        <ListItem>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Корзина" />
        </ListItem>
        <Divider />
        <ListItem>Корзина пуста!</ListItem>
      </List>
    </Drawer>
  );
};

export default ShoppingCart;
