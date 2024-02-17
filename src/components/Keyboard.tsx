import { Button, ButtonGroup, Flex, SimpleGrid } from '@chakra-ui/react';
import { useGameContext } from './useGameContext';
import Key from './Key';

const ROWS = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];

export default function Keyboard() {
  const { keyboardColors, showInstructions, setShowInstructions, resetGame } =
    useGameContext();

  return (
    <Flex
      justifyContent={'center'}
      alignItems={'center'}
      flexDir={'column'}
      gap={'1rem'}
    >
      {ROWS.map((row) => (
        <SimpleGrid key={row} columns={row.length} spacingX={'0.5rem'}>
          {row.split('').map((char) => (
            <Key key={char} char={char} color={keyboardColors[char]} />
          ))}
        </SimpleGrid>
      ))}
      <ButtonGroup>
        <Button colorScheme={'green'} onClick={() => setShowInstructions(true)}>
          {showInstructions ? 'Hide' : 'Show'} Instructions
        </Button>
        <Button colorScheme={'red'} onClick={resetGame}>
          Restart
        </Button>
      </ButtonGroup>
    </Flex>
  );
}
