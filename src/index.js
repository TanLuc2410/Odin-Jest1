export const capitalize = (string) => {
  return string[0].toUpperCase();
};

export const reverseString = (string) => {
  let result = [];
  for (let i = string.length - 1; i >= 0; i--) {
    result.push(string[i]);
  }
  return result.join("");
};

export const calculator = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },

  multiply(a, b) {
    return a * b;
  },

  divide(a, b) {
    return Math.round((a / b) * 100) / 100;
  },
};

const cipher = (letter, changeFactor) => {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const letterIndex = alphabet.indexOf(letter.toLowerCase());
  if (letterIndex === -1) return letter;

  let newIndex;
  if (letterIndex + changeFactor > 25) {
    newIndex = letterIndex + changeFactor - 26;
  } else {
    newIndex = letterIndex + changeFactor;
  }

  if (letter === letter.toUpperCase()) return alphabet[newIndex].toUpperCase();
  return alphabet[newIndex];
};

export const caesarCipher = (string, changeFactor = 3) => {
  let result = [];
  const arr = [...string];

  for (let i = 0; i < arr.length; i++) {
    let cipheredLetter = cipher(arr[i], changeFactor);
    result.push(cipheredLetter);
  }

  return result.join("");
};

export const analyzeArray = (array) => {
  const newArray = [...array].sort((a, b) => a - b);
  return {
    average: Math.floor(
      newArray.reduce((prev, current) => prev + current, 0) / array.length,
    ),
    min: newArray[0],
    max: newArray[newArray.length - 1],
    length: array.length,
  };
};
