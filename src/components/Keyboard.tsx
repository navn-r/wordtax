import { Flex, SimpleGrid } from '@chakra-ui/react';
import Key from './Key';

const KEYS = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('');

interface KeyboardProps {
  colors?: Record<string, number>;
}

export default function Keyboard({ colors }: KeyboardProps) {
  return (
    <Flex justifyContent={'center'} alignItems={'center'}>
      <SimpleGrid columns={10} spacingY={'1rem'} spacingX={'0.5rem'}>
        {KEYS.map((c) => (
          <Key key={c} char={c} color={colors?.[c]} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}
