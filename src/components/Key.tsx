import { Grid, Text } from '@chakra-ui/react';

interface KeyProps {
  char?: string;
  color?: number;
}

const Key = ({ char, color = -1 }: KeyProps) => {
  return (
    <Grid
      bg={
        char
          ? color !== -1
            ? ['gray.400', 'yellow.300', 'green.400'][color]
            : 'gray.200'
          : 'white'
      }
      height='2.75rem'
      width='2.75rem'
      placeItems={'center'}
      border={'1px solid var(--chakra-colors-gray-500)'}
      borderRadius={'5px'}
    >
      <Text as={'strong'}>{char?.toUpperCase()}</Text>
    </Grid>
  );
};

export default Key;
