import { Flex, SimpleGrid } from '@chakra-ui/react';
import Key from './Key';

interface BoardProps {
  guesses: string[];
  text: string;
}

export default function Board({ guesses, text }: BoardProps) {
  return (
    <Flex justifyContent={'center'} alignItems={'center'}>
      <SimpleGrid
        columns={5}
        spacingY={'0.5rem'}
        spacingX={'0.5rem'}
        width={'max-content'}
      >
        {guesses.map((g) =>
          g.split('').map((c, i) => <Key key={`${g}-${i}`} char={c} />)
        )}
        {text.split('').map((c, index) => (
          <Key key={index} char={c} />
        ))}
        {Array.from({ length: 5 * (6 - guesses.length) - text.length }).map(
          (_, index) => (
            <Key key={index} />
          )
        )}
      </SimpleGrid>
    </Flex>
  );
}
