function burrowsWheelerTransform(str) {
  // Add a sentinel character to the end
  str = str + "$";

  // Generate all rotations of the string
  let rotations = [];
  for (let i = 0; i < str.length; i++) {
    rotations.push(str.slice(i) + str.slice(0, i));
  }

  // Sort the rotations lexicographically
  rotations.sort();

  // Extract the last characters of each rotation
  let transformedStr = "";
  for (let i = 0; i < str.length; i++) {
    transformedStr += rotations[i][str.length - 1];
  }

  return transformedStr;
}
function inverseBurrowsWheelerTransform(str) {
  // Initialize an array of empty strings
  let table = [];
  for (let i = 0; i < str.length; i++) {
    table.push("");
  }

  // Fill the table with placeholder characters
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      table[j] = str[j] + table[j];
    }
    table.sort();
  }

  // Find the original string with the sentinel character
  let originalStr = "";
  for (let i = 0; i < str.length; i++) {
    if (table[i].endsWith("$")) {
      originalStr = table[i];
      break;
    }
  }

  // Remove the sentinel character and return the original string
  return originalStr.slice(0, originalStr.length - 1);
}
let inputString = "banana";
let transformedString = burrowsWheelerTransform(inputString);
let originalString = inverseBurrowsWheelerTransform(transformedString);

console.log("Input: " + inputString);
console.log("Transformed: " + transformedString);
console.log("Original: " + originalString);
