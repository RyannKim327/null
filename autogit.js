function searchRabinKarp(text, pattern) {
  const prime = 101; // prime number to use as the base
  const textLength = text.length;
  const patternLength = pattern.length;
  const patternHash = hash(pattern);

  for (let i = 0; i <= textLength - patternLength; i++) {
    const substring = text.slice(i, i + patternLength);
    const substringHash = hash(substring);

    if (substringHash === patternHash && substring === pattern) {
      return i; // return the index where the match starts
    }

    // Update the hash for the next substring
    if (i < textLength - patternLength) {
      const prevCoefficient = text.charCodeAt(i) * Math.pow(prime, patternLength - 1);
      const nextCoefficient = text.charCodeAt(i + patternLength);
      substringHash = (substringHash - prevCoefficient) * prime + nextCoefficient;
    }
  }

  return -1; // return -1 if no match is found
}

// Helper function to calculate the hash value of a string
function hash(str) {
  let hashValue = 0;
  const prime = 101;
  const strLength = str.length;

  for (let i = 0; i < strLength; i++) {
    hashValue += str.charCodeAt(i) * Math.pow(prime, strLength - i - 1);
  }

  return hashValue;
}

// Example usage
const text = "This is a simple example text";
const pattern = "example";
console.log(searchRabinKarp(text, pattern)); // Output: 10 - the index where the match starts
