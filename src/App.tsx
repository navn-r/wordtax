import { Center, Flex, Grid, GridItem, Heading, Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Board from './components/Board';
import Keyboard from './components/Keyboard';

const Header = () => {
  return (
    <Grid
      height={'65px'}
      templateColumns={'125px auto'}
      background={'#0060df'}
      alignItems={'center'}
      padding={'0 1rem'}
      borderBottom={'2px solid #003eaa'}
    >
      <GridItem>
        <Image
          src='https://www.mpac.ca/sites/default/files/pictures/EN_White_Screen.png'
          width={'125px'}
        />
      </GridItem>
      <GridItem>
        <Center width={'calc(100% - 125px)'}>
          <Heading size={'lg'} color={'white'}>
            WordTax
          </Heading>
        </Center>
      </GridItem>
    </Grid>
  );
};

const updateText = (text: string, { key, code }: KeyboardEvent) => {
  if (code === 'Backspace') {
    if (text.length === 0) {
      return text;
    }

    return text.slice(0, text.length - 1);
  }

  // check if the key is a letter
  if (text.length < 5 && code.includes('Key')) {
    return text + key.toUpperCase();
  }

  return text;
};

function App() {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [text, setText] = useState('');

  const listener = (e: KeyboardEvent) => {
    if (e.code === 'Enter' && guesses.length < 5 && text.length === 5) {
      setGuesses((guesses) => [...guesses, text]);
      setText('');
      return;
    }

    setText((text) => updateText(text, e));
  };

  useEffect(() => {
    window.addEventListener('keyup', listener);

    return () => {
      window.removeEventListener('keyup', listener);
    };
  }, [listener]);

  return (
    <>
      <Header />
      <Flex
        flexDir={'column'}
        as={'main'}
        width={'100%'}
        maxW={'500px'}
        mx={'auto'}
        mt={'clamp(1rem, 10vh, 10rem)'}
        gap={'clamp(1rem, 10vh, 10rem)'}
      >
        <Board text={text} guesses={guesses} />
        <Keyboard />
      </Flex>
    </>
  );
}

export default App;
