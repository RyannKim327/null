function findFirstRepeatedCharacter(str) {
  const charSet = new Set(); // or create an empty object using {}

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charSet.has(char)) {
      return char;
    }
    charSet.add(char);
  }

  return null; // or any other value you prefer
}

// Example usage:
const string = "hello world";
const repeatedChar = findFirstRepeatedCharacter(string);
console.log("First repeated character:", repeatedChar);
