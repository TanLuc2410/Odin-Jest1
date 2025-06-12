import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./src";
test("Capitalize the first letter", () => {
  expect(capitalize("golgo13")).toBe("G");
});

test("Reverse String", () => {
  expect(reverseString("PanamaIsle")).toBe("elsIamanaP");
});

test("Calculator", () => {
  expect(calculator.add(100, 200)).toBe(300);
  expect(calculator.subtract(500, 300)).toBe(200);
  expect(calculator.multiply(5, 2)).toBe(10);
  expect(calculator.divide(10, 2)).toBe(5);
});

test("Caesar Cipher", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  expect(caesarCipher("MARCUS CRASSUS", 5)).toBe("RFWHZX HWFXXZX");
});

test("Analyze Array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
