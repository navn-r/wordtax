import { Flex, SimpleGrid } from '@chakra-ui/react';
import Key from './Key';

const KEYS = [
  'Q',
  'W',
  'E',
  'R',
  'T',
  'Y',
  'U',
  'I',
  'O',
  'P',
  'A',
  'S',
  'D',
  'F',
  'G',
  'H',
  'J',
  'K',
  'L',
  'Z',
  'X',
  'C',
  'V',
  'B',
  'N',
  'M',
];

export default function Keyboard() {
  return (
    <Flex justifyContent={'center'} alignItems={'center'}>
      <SimpleGrid columns={10} spacingY={'1rem'} spacingX={'0.5rem'}>
        {KEYS.map((l, index) => (
          <Key key={index} char={l} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}
