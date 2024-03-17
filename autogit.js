function removeVowels(str) {
   return str.replace(/[aeiouAEIOU]/g, '');
}

// Example
console.log(removeVowels("Hello World")); // Output: "Hll Wrld"
