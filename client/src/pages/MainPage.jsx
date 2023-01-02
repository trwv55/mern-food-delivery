import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainRight from '../images/main-right.png';
import Container from '@mui/material/Container';
import MenuScreen from '../components/MenuScreen';
import { fetchProducts } from '../redux/slices/products.js';

const MainScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const { items, status } = useSelector((state) => state.products.products);
  return (
    <>
      <div className="main-wrapper">
        <Container>
          <div className="main-parts">
            <div className="main-left">
              <h2 className="main-title">
                Beautiful food & takeaway, <span>delivered</span> to your door.
              </h2>
              <p className="main-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur magnam excepturi
                laudantium quos nostrum assumenda quod minima possimus impedit molestiae?
              </p>

              <Button
                variant="contained"
                sx={{ background: '#35B8BE', height: '60px', width: '193px' }}>
                Place an Order
              </Button>

              <h4>Trustpilot</h4>
              <p className="main-app">
                <span>4.8 out of 5</span> based on 2000+ reviews
              </p>
            </div>
            <div className="main-right">
              <img src={MainRight} alt="" />
            </div>
          </div>
        </Container>
      </div>
      <MenuScreen items={items} status={status} />
    </>
  );
};

export default MainScreen;
