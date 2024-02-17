import { Flex, SimpleGrid } from '@chakra-ui/react';
import { useGameContext } from './useGameContext';
import Key from './Key';

const KEYS = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('');

export default function Keyboard() {
  const { keyboardColors } = useGameContext();

  return (
    <Flex justifyContent={'center'} alignItems={'center'}>
      <SimpleGrid columns={10} spacingY={'1rem'} spacingX={'0.5rem'}>
        {KEYS.map((c) => (
          <Key key={c} char={c} color={keyboardColors?.[c]} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}
