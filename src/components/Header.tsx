import {
  Center,
  Grid,
  GridItem,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';

function Header() {
  return (
    <Grid
      height={'65px'}
      templateColumns={'125px auto'}
      background={'#0060df'}
      alignItems={'center'}
      padding={'0 1rem'}
      borderBottom={'2px solid #003eaa'}
    >
      <GridItem>
        <LinkBox>
          <LinkOverlay href='https://www.mpac.ca/' isExternal>
            <Image
              src='https://www.mpac.ca/sites/default/files/pictures/EN_White_Screen.png'
              width={'125px'}
            />
          </LinkOverlay>
        </LinkBox>
      </GridItem>
      <GridItem>
        <Center width={'calc(100% - 125px)'}>
          <Heading size={'lg'} color={'white'}>
            WordTax
          </Heading>
        </Center>
      </GridItem>
    </Grid>
  );
}

export default Header;
