function rabinKarp(text, pattern) {
  if (text.length === 0 || pattern.length === 0) {
    return -1; // Pattern not found
  }

  const textLength = text.length;
  const patternLength = pattern.length;

  // Rest of the code goes here...
}
function rabinKarp(text, pattern) {
  // ...

  let patternHash = 0;
  let textHash = 0;
  for (let i = 0; i < patternLength; i++) {
    patternHash += pattern.charCodeAt(i);
    textHash += text.charCodeAt(i);
  }
  
  // ...
}
function rabinKarp(text, pattern) {
  // ...

  for (let i = 0; i <= textLength - patternLength; i++) {
    if (patternHash === textHash) {
      let found = true;
      for (let j = 0; j < patternLength; j++) {
        if (text[i + j] !== pattern[j]) {
          found = false;
          break;
        }
      }
      if (found) {
        return i; // Pattern found at index i
      }
    }

    textHash -= text.charCodeAt(i);
    textHash += text.charCodeAt(i + patternLength);
  }

  // ...
}
function rabinKarp(text, pattern) {
  // ...

  return -1; // Pattern not found

  // ...
}
function rabinKarp(text, pattern) {
  if (text.length === 0 || pattern.length === 0) {
    return -1; // Pattern not found
  }

  const textLength = text.length;
  const patternLength = pattern.length;

  let patternHash = 0;
  let textHash = 0;
  for (let i = 0; i < patternLength; i++) {
    patternHash += pattern.charCodeAt(i);
    textHash += text.charCodeAt(i);
  }

  for (let i = 0; i <= textLength - patternLength; i++) {
    if (patternHash === textHash) {
      let found = true;
      for (let j = 0; j < patternLength; j++) {
        if (text[i + j] !== pattern[j]) {
          found = false;
          break;
        }
      }
      if (found) {
        return i; // Pattern found at index i
      }
    }

    textHash -= text.charCodeAt(i);
    textHash += text.charCodeAt(i + patternLength);
  }

  return -1; // Pattern not found
}
