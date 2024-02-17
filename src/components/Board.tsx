import { Flex, Grid, SimpleGrid, Spinner } from '@chakra-ui/react';
import Key from './Key';

interface BoardProps {
  guesses: [string, number[]][];
  isLoading: boolean;
  text: string;
}

export default function Board({ guesses, text, isLoading }: BoardProps) {
  return (
    <Flex justifyContent={'center'} alignItems={'center'} position={'relative'}>
      {isLoading && (
        <Grid
          position={'absolute'}
          left={'24%'}
          width={'16.25rem'}
          height={'100%'}
          bg={'rgba(0,0,0, 0.125)'}
          zIndex={1}
          backdropFilter={''}
          borderRadius={'5px'}
          placeItems={'center'}
          boxShadow={'0 0 10px 5px rgba(0,0,0, 0.125)'}
        >
          <Spinner size='xl' thickness={'5px'} color={'white'} />
        </Grid>
      )}
      <SimpleGrid
        columns={5}
        spacingY={'0.5rem'}
        spacingX={'0.5rem'}
        width={'max-content'}
      >
        {guesses.map(([guess, score]) =>
          guess
            .split('')
            .map((c, i) => (
              <Key key={`${guess}-${i}`} char={c} color={score[i]} />
            ))
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
