import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

interface props {
  cardImage: string;
  cardImageAltTxt: string;
  cardTitle: string;
  cardDescription: string;
  cardButtonLabel: string;
  cardButtonUrl: string;
}

export default function GameCard(props: props) {
  const { cardImage, cardImageAltTxt, cardTitle, cardDescription, cardButtonLabel, cardButtonUrl } = props;
  
  let navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(cardButtonUrl);
  };

  return (
    <Card sx={{ maxWidth: 345, m: { xs: 4, md: 8 }}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={cardImage}
          alt={cardImageAltTxt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {cardTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {cardDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant="contained" onClick={handleButtonClick}>
          {cardButtonLabel}
        </Button>
      </CardActions>
    </Card>
  );
}
