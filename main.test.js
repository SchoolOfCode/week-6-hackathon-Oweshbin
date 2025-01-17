import {expect, test} from "vitest";

import {
    isPalindrome,
}from "./main.js"


test("Will Palidrone be true?", () => {
    
    //check the user input is a string
    //check the user's input can be reversed
    //If it can be, check for True
    //If it can't, check for False
   
    //Arrange
    const word1 = "arrange"
    const word2 = "redivider"
    const wordFalse =  isPalindrome(word1)
    const wordTrue = isPalindrome(word2)
    //Act
    expect (wordFalse).toBe(false);
    expect(wordTrue).toBe(true);
    
  })


 test("should throw an error if input is not a string", () => {
    // Check for number input
    expect(() => isPalindrome(12321)).toThrowError("Input must be a string");

    // Check for other non-string inputs
    expect(() => isPalindrome(null)).toThrowError("Input must be a string");
    expect(() => isPalindrome(undefined)).toThrowError("Input must be a string");
    expect(() => isPalindrome([])).toThrowError("Input must be a string");
    expect(() => isPalindrome({})).toThrowError("Input must be a string");
  });

  test("should handle edge cases", () => {
    //Check for single character
    expect(() => isPalindrome("A")).toThrowError("Input must not be a single letter"); 
  });
 
  test("should throw an error for numeric strings", () => {
    //Check for numerical strings
    expect(() => isPalindrome("123")).toThrowError("Input must not be a numeric string");
  });













  /* ANSWER
  if (typeof str !== 'string') {
    throw new Error("Input must be a string");
  }
if (str.length === 1) {
    throw new Error("Input must not be a single letter");
  }
if (/^\d+$/.test(str)) {
    throw new Error("Input must not be a numeric string");
  }
  str = str.toLowerCase();
  const newStr = str.split('').reverse().join('');

  if (newStr === str) {
    return true;
  } else {
    return false;
  }
*/