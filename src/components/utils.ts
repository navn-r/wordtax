import axios from 'axios';

export type ValidateResponse =
  | {
      is_valid_word: true;
      score: number[];
    }
  | {
      is_valid_word: false;
      score: [];
    };

export const validateText = async (guess: string) => {
  const { data } = await axios.post<ValidateResponse>(
    'https://wordle-apis.vercel.app/api/validate',
    { guess }
  );

  return data;
};

export const updateText = (text: string, { key, code }: KeyboardEvent) => {
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
