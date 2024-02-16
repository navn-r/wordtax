import { Center, Flex, Grid, GridItem, Heading, Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { updateText, validateText } from './components/utils';

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

function App() {
  const [guesses, setGuesses] = useState<[string, number[]][]>([]);
  const [keyboardColors, setKeyboardColors] = useState<Record<string, number>>(
    {}
  );
  const [won, setWon] = useState(false);
  const [text, setText] = useState('');

  const listener = async (e: KeyboardEvent) => {
    if (won || guesses.length === 6) {
      return;
    }

    if (e.code === 'Enter' && guesses.length < 6 && text.length === 5) {
      const { is_valid_word, score } = await validateText(text);
      if (!is_valid_word) {
        console.log('Invalid word', text);
        return;
      }

      if (score.every((s) => s === 2)) {
        setWon(true);
      }

      score.forEach((s, i) => {
        if (s === 0) {
          setKeyboardColors((colors) => ({ ...colors, [text[i]]: 0 }));
        }
      });

      setGuesses((guesses) => [...guesses, [text, score]]);

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
        <Keyboard colors={keyboardColors} />
      </Flex>
    </>
  );
}

export default App;
