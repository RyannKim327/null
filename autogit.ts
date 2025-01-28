const originalString = "Hello World";
const noVowelsString = originalString.replace(/[aeiou]/gi, "");
console.log(noVowelsString); // Output: "Hll Wrld"
const originalString = "Hello World";
const noVowelsString = originalString.replace(/[aeiou]/gi, () => "");
console.log(noVowelsString); // Output: "Hll Wrld"
