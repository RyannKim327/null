function burrowsWheelerEncode(text) {
  // Add a sentinel character to the end of the text
  text += "\0";

  // Create an array of rotations
  const rotations = [];
  for (let i = 0; i < text.length; i++) {
    rotations.push(text.slice(i) + text.slice(0, i));
  }

  // Sort the rotations
  rotations.sort();

  // Extract the last characters of each rotation
  let encodedText = "";
  for (let i = 0; i < rotations.length; i++) {
    encodedText += rotations[i][rotations[i].length - 1];
  }

  // Find the original text's index in the sorted rotations
  let originalIndex;
  for (let i = 0; i < rotations.length; i++) {
    if (rotations[i] === text) {
      originalIndex = i;
      break;
    }
  }

  // Return the encoded text and the original index
  return { encodedText, originalIndex };
}
function burrowsWheelerDecode(encodedText, originalIndex) {
  // Create an array of empty strings
  let table = Array(encodedText.length).fill("");

  // Fill in the table column by column
  for (let i = 0; i < encodedText.length; i++) {
    for (let j = 0; j < encodedText.length; j++) {
      table[j] = encodedText[j] + table[j];
    }
    table.sort();
  }

  // Return the original text
  return table[originalIndex].replace("\0", "");
}
const text = "banana";
const encoded = burrowsWheelerEncode(text);
console.log("Encoded: " + encoded.encodedText);
console.log("Original index: " + encoded.originalIndex);
const decoded = burrowsWheelerDecode(encoded.encodedText, encoded.originalIndex);
console.log("Decoded: " + decoded);
