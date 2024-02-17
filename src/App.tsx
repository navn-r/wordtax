import { Flex } from '@chakra-ui/react';
import Header from './components/Header';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { GameProvider } from './components/useGameContext';
import InstructionsModal from './components/InstructionsModal';

function App() {
  return (
    <GameProvider>
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
      <InstructionsModal />
    </GameProvider>
  );
}

export default App;
