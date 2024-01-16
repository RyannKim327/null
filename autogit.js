function rabinKarpSearch(pattern, text) {
  const patternLength = pattern.length;
  const textLength = text.length;
  const patternHash = hash(pattern);
  let textHash = hash(text.substring(0, patternLength));
  
  for (let i = 0; i <= textLength - patternLength; i++) {
    if (patternHash === textHash && pattern === text.substring(i, i + patternLength)) {
        return i;
    }
    
    textHash = recomputeHash(text, textHash, i, i + patternLength);
  }
  
  return -1;
}

function hash(str) {
  let hashValue = 0;
  
  for (let i = 0; i < str.length; i++) {
    hashValue += str.charCodeAt(i) * Math.pow(31, str.length - 1 - i);
  }
  
  return hashValue;
}

function recomputeHash(str, oldHash, oldIndex, newIndex) {
  const oldCharHash = str.charCodeAt(oldIndex);
  const newCharHash = str.charCodeAt(newIndex);
  const newHash = oldHash - (oldCharHash * Math.pow(31, str.length - 1)) + (newCharHash * Math.pow(31, 0));
  
  return newHash;
}

// Example usage:
const text = "ABCABABDABCAABDABABCABD";
const pattern = "ABD";

const index = rabinKarpSearch(pattern, text);
console.log(index); // Output: 15
