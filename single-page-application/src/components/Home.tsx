import Container from '@mui/material/Container';
import { GameCard } from './shared/index';

const gameCardList = [
  {
    cardImage: '/gameCardImages/CardImage01.webp',
    cardImageAltTxt: 'Identify-Difference-Img',
    cardTitle: 'Identify Difference',
    cardDescription: 'Compare two images and identify the difference between them',
    cardButtonLabel: 'PLAY',
    cardButtonUrl: '/identify-difference',
  },
  {
    cardImage: '/gameCardImages/CardImage02.webp',
    cardImageAltTxt: 'Memory-Check-Img',
    cardTitle: 'Memory Check',
    cardDescription: 'Select two cells which produce same calculated result consecutively',
    cardButtonLabel: 'PLAY',
    cardButtonUrl: '/memory-check',
  }
]

const Home = () => {
  const renderGameCards = (): any => {
    return (
      <>
        <GameCard {...gameCardList[0]}></GameCard>
        <GameCard {...gameCardList[1]}></GameCard>
      </>
    )
  }

  return (
    <Container maxWidth={false} sx={{ display: { xs: 'flex' }, flexGrow: 1, flexDirection: { xs: 'column', md: 'row' }, m: 2, justifyContent: 'center', alignItems: 'center' }} >
      {renderGameCards()}
    </Container>
  );
};

export default Home;