import { Flex, SimpleGrid } from '@chakra-ui/react';
import { useGameContext } from './useGameContext';
import Key from './Key';

const ROWS = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];

export default function Keyboard() {
  const { keyboardColors } = useGameContext();

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
    </Flex>
  );
}
