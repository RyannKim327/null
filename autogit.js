function rabinKarp(pattern, text) {
  const indices = [];

  if (pattern.length === 0 || text.length === 0) {
    return indices;
  }

  const prime = 101;
  const mod = 100000007;

  let patternHash = 0;
  let textHash = 0;
  let h = 1;

  for (let i = 0; i < pattern.length - 1; i++) {
    h = (h * prime) % mod;
  }

  for (let i = 0; i < pattern.length; i++) {
    patternHash = (patternHash * prime + pattern.charCodeAt(i)) % mod;
    textHash = (textHash * prime + text.charCodeAt(i)) % mod;
  }

  for (let i = 0; i <= text.length - pattern.length; i++) {
    if (patternHash === textHash) {
      let found = true;

      for (let j = 0; j < pattern.length; j++) {
        if (pattern[j] !== text[i + j]) {
          found = false;
          break;
        }
      }

      if (found) {
        indices.push(i);
      }
    }

    if (i < text.length - pattern.length) {
      textHash = (prime * (textHash - text.charCodeAt(i) * h) + text.charCodeAt(i + pattern.length)) % mod;

      if (textHash < 0) {
        textHash += mod;
      }
    }
  }

  return indices;
}
const text = "ABABDABACDABABCABAB";
const pattern = "ABA";

const indices = rabinKarp(pattern, text);
console.log(indices); // [0, 10, 14]
