import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const PageNotFound = () => {
  return (
    <Container maxWidth="xl">
      <Typography
        variant="h2"
        noWrap
        component="h2"
        sx={{
          m: 5,
          display: 'flex',
          justifyContent: 'center',
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        404 - Page Not Found
      </Typography>
    </Container>
  );
};

export default PageNotFound;