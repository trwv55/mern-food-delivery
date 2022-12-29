import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import Burger from '../images/menu/Adygei.jpeg';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const Img = styled('img')({
  display: 'block',
  maxWidth: '356px',
  minHeight: '270px',
});

const MenuItems = () => {
  return (
    <div className="burgersMenu-wrapper">
      <Paper elevation={3} sx={{ p: 2, maxWidth: 700, flexGrow: 1, minHeight: 300 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item>
            <ButtonBase sx={{ width: 356, height: 270 }}>
              <Img alt="complex" src={Burger} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="subtitle1" component="div" sx={{ color: '#000' }}>
                  Jim Beam® с беконом, сыром чеддер и луковыми кольцами
                </Typography>
                <Typography variant="body2" gutterBottom sx={{ mt: 1 }}>
                  Большая котлета из говядины, луковые кольца в панировке, бекон, соленые огурцы,
                  свежие томаты, сыр чеддер, микс салата. Соус: авторский соус на основе бурбона
                  Джим Бим.
                </Typography>
                <Grid item container sx={{ mt: 4 }}>
                  <Grid item>
                    <Typography variant="h6" component="span" sx={{ mr: 4 }}>
                      ₸ 1800
                    </Typography>
                  </Grid>

                  <Fab
                    variant="extended"
                    size="small"
                    color="default"
                    aria-label="add"
                    sx={{ mr: 2 }}>
                    <RemoveIcon />
                  </Fab>
                  <Typography variant="h6">0</Typography>
                  <Fab
                    variant="extended"
                    size="small"
                    color="default"
                    aria-label="add"
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

export default MenuItems;
