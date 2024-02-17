import { Box, Grid, ScaleFade, Text } from '@chakra-ui/react';
import { memo } from 'react';

interface KeyProps {
  char?: string;
  color?: number;
}

const scoreColors = ['gray.400', 'yellow.300', 'green.400'];

const Key = memo(({ char, color = -1 }: KeyProps) => {
  if (!char) {
    return (
      <Box
        bg={'white'}
        height='2.75rem'
        width='2.75rem'
        border={'1px solid var(--chakra-colors-gray-500)'}
        borderRadius={'5px'}
      />
    );
  }

  return (
    <ScaleFade in={!!char} initialScale={0.5}>
      <Grid
        bg={color !== -1 ? scoreColors[color] : 'gray.200'}
        height='2.75rem'
        width='2.75rem'
        placeItems={'center'}
        border={'1px solid var(--chakra-colors-gray-500)'}
        borderRadius={'5px'}
      >
        <Text as={'strong'}>{char?.toUpperCase()}</Text>
      </Grid>
    </ScaleFade>
  );
});

export default Key;
