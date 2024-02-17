import { Button, Flex, Heading, Image } from '@chakra-ui/react';
import { useGameContext } from './useGameContext';

export default function Overlay() {
  const { won, guesses, resetGame, setShowInstructions } = useGameContext();
  const lost = !won && guesses.length === 6;

  const restart = () => {
    resetGame();
    setShowInstructions(true);
  };

  if (!won && !lost) {
    return null;
  }

  return (
    <Flex
      position={'fixed'}
      top={0}
      left={0}
      width={'100%'}
      height={'100%'}
      bg={'rgba(0,0,0, 0.75)'}
      zIndex={2}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
    >
      <Image
        src={
          won
            ? 'https://images.huffingtonpost.com/2014-01-13-newspolitics.gif'
            : 'https://i.huffpost.com/gadgets/slideshows/292550/slide_292550_2350534_free.gif'
        }
        alt={won ? 'You won!' : 'You Lost!'}
        filter={'saturate(3.5)'}
      />
      <Heading as={'h1'} color={'white'} size={'4xl'} my={'1rem'}>
        {won ? 'You WIN!' : 'You LOSE!'}
      </Heading>
      <Heading as={'h2'} color={'white'} size={'lg'} mb={'4rem'}>
        {won ? 'No WordTax!' : 'Now pay the WordTax!'}
      </Heading>
      <Button size={'lg'} colorScheme={won ? 'green' : 'red'} onClick={restart}>
        Play Again
      </Button>
    </Flex>
  );
}
