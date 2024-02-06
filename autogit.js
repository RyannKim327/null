function firstNonRepeatingChar(str) {
   var charCount = {};
   
   for (var i = 0; i < str.length; i++) {
      var char = str[i];
      if (charCount[char]) {
         charCount[char]++;
      } else {
         charCount[char] = 1;
      }
   }

   for (var i = 0; i < str.length; i++) {
      var char = str[i];
      if (charCount[char] === 1) {
         return char;
      }
   }
   
   return null; // No non-repeating characters found
}

// Example usage
var inputString = "aabbccddeeffg";
var result = firstNonRepeatingChar(inputString);
console.log(result); // Output: "g"
