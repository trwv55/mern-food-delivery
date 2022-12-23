import React from 'react';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import LogoFooter from '../images/header-footer/logo-head.svg';
import FooterBC from '../images/header-footer/footer-bc.png';

const theme = createTheme();
const footer = {
  padding: theme.spacing(5),
  marginTop: 'auto',
  textAlign: 'center',
  backgroundImage: `url(${FooterBC})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: '25vh',
};

export default function Footer() {
  return (
    <footer>
      <Grid container spacing={2} sx={footer}>
        <Grid item xs={12}>
          <a href="/">
            <img src={LogoFooter} alt="" />
          </a>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body2" color="textSecondary">
            COPYRIGHT © {new Date().getFullYear()}{' '}
            <a href="https://github.com/trwv55" target="_blank" rel="noreferrer">
              trwv55
            </a>
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
}
