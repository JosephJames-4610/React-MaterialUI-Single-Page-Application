import * as React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const IdentifyDifference = () => {
  const [imageLocation, setImageLocation] = React.useState<string>('/identifyDifferenceImages/q01.png');
  const [disablePrev, setDisablePrev] = React.useState<boolean>(true);
  const [disableNext, setDisableNext] = React.useState<boolean>(false);

  const handleRevealClick = () => {
    setImageLocation(`/identifyDifferenceImages/a${imageLocation.substr(27,2)}.png`);
  };

  const handlePrevClick = () => {
    let imageNumber = Number(imageLocation.substr(27,2)) - 1
    if (imageNumber > 0) {
      setImageLocation(`/identifyDifferenceImages/q0${imageNumber}.png`);
      if (disableNext) setDisableNext(false);
    } 
    if (imageNumber === 1) setDisablePrev(true);
  }
  const handleNextClick = () => {
    let imageNumber = Number(imageLocation.substr(27,2)) + 1
    if (imageNumber < 10) {
      setImageLocation(`/identifyDifferenceImages/q0${imageNumber}.png`);
      if (disablePrev) setDisablePrev(false);
    } 
    if (imageNumber === 9) setDisableNext(true);
  }

  return (
    <Container maxWidth={false} sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, my: 6, justifyContent: 'center', alignItems: 'center' }} >
      <Box sx={{ flexGrow: 1, display: 'flex' }}>
        <Typography
          variant="h2"
          noWrap
          component="a"
          href="/"
          sx={{
            m: 4,
            display: 'flex',
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: '#1976d2',
            textDecoration: 'none',
          }}
        >
          SPOT THE DIFFERENCE
        </Typography>
      </Box>
      <Stack direction="row" spacing={2}>
        <Button size="large" startIcon={<ArrowBackIosNewIcon />} sx={{ my: 8 }} onClick={handlePrevClick} disabled={disablePrev} />
        <Paper elevation={6} >
          <img src={imageLocation} />
        </Paper>
        <Button size="large" endIcon={<ArrowForwardIosIcon />}  sx={{ my: 8 }} onClick={handleNextClick} disabled={disableNext} />
      </Stack>
      <Button
        size="large"
        variant="contained"
        onClick={handleRevealClick}
        sx={{ my: 5, mx: 5, color: 'white', display: 'block', minWidth: 600, minHeight: 75, fontSize: 30 }}
      >
        REVEAL
      </Button>
    </Container>
  );
};

export default IdentifyDifference;
