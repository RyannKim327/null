function rabinKarp(pattern, text) {
   // Implementation goes here
}
function rabinKarp(pattern, text) {
   const patternLength = pattern.length;
   const textLength = text.length;
   
   // Calculate the hash value of the pattern
   let patternHash = 0;
   let textHash = 0;
   const prime = 31; // A prime number used to calculate hash
   const modulus = 1e9 + 9; // A large prime number used for modulus
   
   for (let i = 0; i < patternLength; i++) {
      patternHash = (patternHash * prime + pattern.charCodeAt(i)) % modulus;
   }
   
   // Implementation continues...
}
function rabinKarp(pattern, text) {
   const patternLength = pattern.length;
   const textLength = text.length;
   
   let patternHash = 0;
   let textHash = 0;
   const prime = 31;
   const modulus = 1e9 + 9;
   
   for (let i = 0; i < patternLength; i++) {
      patternHash = (patternHash * prime + pattern.charCodeAt(i)) % modulus;
      textHash = (textHash * prime + text.charCodeAt(i)) % modulus;
   }
   
   // Implementation continues...
}
function rabinKarp(pattern, text) {
   const patternLength = pattern.length;
   const textLength = text.length;
   
   let patternHash = 0;
   let textHash = 0;
   const prime = 31;
   const modulus = 1e9 + 9;
   
   for (let i = 0; i < patternLength; i++) {
      patternHash = (patternHash * prime + pattern.charCodeAt(i)) % modulus;
      textHash = (textHash * prime + text.charCodeAt(i)) % modulus;
   }
   
   for (let i = 0; i <= textLength - patternLength; i++) {
      if (patternHash === textHash) {
         let j;
         for (j = 0; j < patternLength; j++) {
            if (text[i + j] !== pattern[j]) {
               break;
            }
         }
         
         if (j === patternLength) {
            console.log(`Pattern found at index ${i}`);
         }
      }
      
      if (i < textLength - patternLength) {
         // Calculate the hash for the next substring
         textHash = (prime * (textHash - text.charCodeAt(i) * Math.pow(prime, patternLength - 1)) +
                     text.charCodeAt(i + patternLength)) % modulus;
         if (textHash < 0) {
            textHash += modulus;
         }
      }
   }
}
const pattern = "abc";
const text = "ababcabcabababd";

rabinKarp(pattern, text);
