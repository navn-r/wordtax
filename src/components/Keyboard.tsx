import { Flex, Grid, SimpleGrid, Text } from '@chakra-ui/react';

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
          <Grid
            key={index}
            bg='gray.200'
            height='2.75rem'
            width='2.75rem'
            placeItems={'center'}
          >
            <Text as={'strong'}>{l}</Text>
          </Grid>
        ))}
      </SimpleGrid>
    </Flex>
  );
}
