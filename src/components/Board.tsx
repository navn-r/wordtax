import { Box, Flex, SimpleGrid } from '@chakra-ui/react';

const BOARD = Array.from({ length: 5 * 6 });

export default function Board() {
  return (
    <Flex justifyContent={'center'} alignItems={'center'}>
      <SimpleGrid
        columns={5}
        spacingY={'0.5rem'}
        spacingX={'0.5rem'}
        width={'max-content'}
      >
        {BOARD.map((_, index) => (
          <Box key={index} bg='gray.200' height='4rem' width='4rem' />
        ))}
      </SimpleGrid>
    </Flex>
  );
}
