import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalBody,
  Text,
  UnorderedList,
  ListItem,
  SimpleGrid,
  ModalFooter,
  Link,
} from '@chakra-ui/react';
import { useGameContext } from './useGameContext';
import Key from './Key';

export default function InstructionsModal() {
  const { showInstructions, setShowInstructions } = useGameContext();

  const onClose = () => setShowInstructions(false);

  return (
    <Modal isOpen={showInstructions} onClose={onClose} size={'xl'}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>How To Play</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text as={'p'}>
            In a recent round of negotiations with the Government of Ontario,
            MPAC has established a new system for the valuation of properties.
          </Text>
          <Text as={'p'} my={'0.5rem'}>
            In order to avoid paying property tax,{' '}
            <Text as={'strong'}>you must guess the word in 6 tries</Text>, or
            else you face the WordTax!
          </Text>
          <UnorderedList my={'0.5rem'}>
            <ListItem>Each guess must be a valid 5-letter word.</ListItem>
            <ListItem>
              Input your guess using your keyboard and pressing{' '}
              <Text as={'strong'}>Enter</Text> to submit
            </ListItem>
            <ListItem>
              If you lose all your tries,{' '}
              <Text as={'strong'} color={'red.500'}>
                you will have to pay the WordTax!
              </Text>
            </ListItem>
          </UnorderedList>
          <Text as={'p'} my={'0.5rem'}>
            Example:
          </Text>
          <SimpleGrid columns={5} spacingX={'0.5rem'} width={'max-content'}>
            <Key char={'H'} color={2} />
            <Key char={'O'} color={-1} />
            <Key char={'U'} color={-1} />
            <Key char={'S'} color={-1} />
            <Key char={'E'} color={-1} />
          </SimpleGrid>
          <Text as={'p'} my={'0.5rem'}>
            <Text as={'strong'}>H</Text> is in the word, and in the correct
            spot.
          </Text>
          <SimpleGrid columns={5} spacingX={'0.5rem'} width={'max-content'}>
            <Key char={'V'} color={-1} />
            <Key char={'A'} color={1} />
            <Key char={'L'} color={-1} />
            <Key char={'U'} color={-1} />
            <Key char={'E'} color={-1} />
          </SimpleGrid>
          <Text as={'p'} my={'0.5rem'}>
            <Text as={'strong'}>A</Text> is in the word, but in the wrong spot.
          </Text>
          <SimpleGrid columns={5} spacingX={'0.5rem'} width={'max-content'}>
            <Key char={'L'} color={-1} />
            <Key char={'E'} color={-1} />
            <Key char={'A'} color={-1} />
            <Key char={'S'} color={0} />
            <Key char={'E'} color={-1} />
          </SimpleGrid>
          <Text as={'p'} my={'0.5rem'}>
            <Text as={'strong'}>S</Text> is not in the word, in any spot.
          </Text>
          <Text
            as={'p'}
            mt={'1.5rem'}
            pt={'0.5rem'}
            borderTop={'1px solid gray'}
          >
            A new word is generated every day. If you haven't already, you can{' '}
            <Link
              textDecoration={'underline'}
              color={'blue.500'}
              href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
              isExternal
            >
              sign up
            </Link>{' '}
            for our daily newsletter for tips and tricks!
          </Text>
        </ModalBody>
        <ModalFooter>
          <Text as={'p'} fontSize={'0.75rem'}>
            Made with 💖 in 🍁 by{' '}
            <Link
              href='https://navn.me'
              isExternal
              textDecoration={'underline'}
            >
              Navinn Ravindaran
            </Link>
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
