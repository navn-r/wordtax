import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';

interface Game {
  guesses: [string, number[]][];
  keyboardColors: Record<string, number>;
  isLoading: boolean;
  won: boolean;
  text: string;
}

type ValidateResponse =
  | {
      is_valid_word: true;
      score: number[];
    }
  | {
      is_valid_word: false;
      score: [];
    };

/**
 * Query `wordle-apis.vercel.app` API to validate a word
 *
 * @param guess The word to validate
 * @returns ValidateResponse
 */
const validateText = async (guess: string) => {
  const { data } = await axios.post<ValidateResponse>(
    'https://wordle-apis.vercel.app/api/validate',
    { guess }
  );

  return data;
};

/**
 * Update the current text based on the keyboard event
 *
 * @param text The current text
 * @param event The keyboard event
 * @returns The updated text
 */
const updateText = (text: string, { key, code }: KeyboardEvent) => {
  if (code === 'Backspace') {
    if (text.length === 0) {
      return text;
    }

    return text.slice(0, text.length - 1);
  }

  // check if the key is a letter
  if (text.length < 5 && code.includes('Key')) {
    return text + key.toUpperCase();
  }

  return text;
};

const GameContext = createContext({} as Game);
export const useGameContext = () => useContext(GameContext);

interface GameProviderProps {
  children: React.ReactNode[];
}

export const GameProvider = ({ children }: GameProviderProps) => {
  const [guesses, setGuesses] = useState<Game['guesses']>([]);
  const [keyboardColors, setKeyboardColors] = useState<Game['keyboardColors']>(
    {}
  );
  const [isLoading, setIsLoading] = useState(false);
  const [won, setWon] = useState(false);
  const [text, setText] = useState('');
  const toast = useToast();

  /**
   * Listen for keyboard events and update the text accordingly
   */
  const listener = async (event: KeyboardEvent) => {
    if (won || guesses.length === 6 || isLoading) {
      return;
    }

    if (event.code === 'Enter' && guesses.length < 6) {
      if (text.length !== 5) {
        toast({
          title: 'Invalid word',
          description: 'Guess must be 5 letters long',
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top',
        });
        return;
      }

      setIsLoading(true);
      const { is_valid_word, score } = await validateText(text);
      setIsLoading(false);

      if (!is_valid_word) {
        toast({
          title: 'Invalid word',
          description: `'${text}' is not a valid word in our dictionary`,
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top',
        });
        return;
      }

      if (score.every((s) => s === 2)) {
        setWon(true);
        toast({
          title: 'Correct Guess!',
          description: "Congrats! You've solved the word",
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top',
        });
      }

      // Only gray out letters not in the word
      const updatedKeyboardColors = score.reduce((acc, s, i) => {
        return s === 0 ? { ...acc, [text[i]]: 0 } : acc;
      }, {});

      setKeyboardColors((colors) => ({ ...colors, ...updatedKeyboardColors }));
      setGuesses((guesses) => [...guesses, [text, score]]);
      setText('');
      return;
    }

    setText((text) => updateText(text, event));
  };

  useEffect(() => {
    window.addEventListener('keyup', listener);

    return () => {
      window.removeEventListener('keyup', listener);
    };
  }, [listener]);

  return (
    <GameContext.Provider
      value={{ guesses, keyboardColors, isLoading, won, text }}
    >
      {children}
    </GameContext.Provider>
  );
};
