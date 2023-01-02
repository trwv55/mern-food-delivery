import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loading = ({ width, height, ml }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ml: +ml || 0,
        mt: 6,
        width: +width,
        height: +height,
        bgcolor: '#fff',
      }}>
      <CircularProgress size="5rem" sx={{}} />
    </Box>
  );
};

export default Loading;
