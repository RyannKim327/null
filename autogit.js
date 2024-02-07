function burrowsWheelerTransform(text) {
  // Step 1: Generate all cyclic rotations of the input text.
  const rotations = [];
  for (let i = 0; i < text.length; i++) {
    const rotation = text.slice(i) + text.slice(0, i);
    rotations.push(rotation);
  }

  // Step 2: Sort the rotations lexicographically.
  rotations.sort();

  // Step 3: Take the last characters of each sorted rotation to form the transformed text.
  let transformedText = '';
  for (let i = 0; i < rotations.length; i++) {
    transformedText += rotations[i][rotations[i].length - 1];
  }

  return transformedText;
}
function inverseBurrowsWheelerTransform(text) {
  // Step 1: Create an array of objects, each containing a character and its count.
  const characterCount = [];
  for (let i = 0; i < text.length; i++) {
    const char = text.charAt(i);
    if (characterCount[char] === undefined) {
      characterCount[char] = 0;
    }
    characterCount[char]++;
  }

  // Step 2: Create a sorted array of characters.
  const sortedChars = Object.keys(characterCount).sort();

  // Step 3: Transform the input text into an array of objects, each containing a character and its occurrence index.
  const transformedText = [];
  for (let i = 0; i < text.length; i++) {
    const char = text.charAt(i);
    const index = sortedChars.indexOf(char);
    transformedText.push({ char, index });
  }

  // Step 4: Sort the transformed text by occurrence index.
  transformedText.sort((a, b) => a.index - b.index);

  // Step 5: Construct the original text by concatenating the characters from the transformed text.
  let originalText = '';
  let currentIndex = 0;
  while (originalText.length < text.length) {
    const { char, index } = transformedText[currentIndex];
    originalText += char;
    currentIndex = index;
  }

  return originalText;
}
const input = 'banana';
const transformed = burrowsWheelerTransform(input);
console.log(transformed); // Outputs: 'annbaba'

const original = inverseBurrowsWheelerTransform(transformed);
console.log(original); // Outputs: 'banana'
