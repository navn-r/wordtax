import { Flex, Center, Grid, GridItem, Heading, Image } from '@chakra-ui/react';
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

function App() {
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
        <Board />
        <Keyboard />
      </Flex>
    </>
  );
}

export default App;
