function rabinKarp(text, pattern) {
  if (text.length === 0 || pattern.length === 0) {
    return [];
  }

  const prime = 101; // Choose any suitable prime number

  function hash(str, length) {
    let hashValue = 0;
    for (let i = 0; i < length; i++) {
      hashValue += str.charCodeAt(i) * Math.pow(prime, i);
    }
    return hashValue;
  }

  const patternHash = hash(pattern, pattern.length);
  let textHash = hash(text, pattern.length);

  const result = [];
  for (let i = 0; i <= text.length - pattern.length; i++) {
    if (textHash === patternHash && text.slice(i, i + pattern.length) === pattern) {
      result.push(i);
    }
    textHash -= text.charCodeAt(i);
    textHash /= prime;
    textHash += text.charCodeAt(i + pattern.length) * Math.pow(prime, pattern.length - 1);
  }

  return result;
}
const text = "abcabcabcdef";
const pattern = "abc";

const matches = rabinKarp(text, pattern);

console.log(matches); // Output: [0, 3, 6]
