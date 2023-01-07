import React from 'react';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';

const CartItem = ({ item }) => {
  const total = item.count * item.price;

  return (
    <List sx={{ width: '100%', maxWidth: 460, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={item.title}
          secondary={
            <>
              <Typography
                sx={{ display: 'block', mt: 1 }}
                component="span"
                variant="body1"
                color="#ebebebe">
                Количество: {item.count}
              </Typography>
              <Typography
                sx={{ display: 'block', mt: 1 }}
                component="h4"
                variant="subtitle1"
                color="text.primary">
                Цена: {total} ₸
              </Typography>
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
};

export default CartItem;
