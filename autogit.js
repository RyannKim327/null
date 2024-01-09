function rabinKarp(text, pattern) {
  // implementation goes here
}
function rabinKarp(text, pattern) {
  if (text.length === 0 || pattern.length === 0) {
    return -1;
  }
  // Rest of the implementation follows
}
function hash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash += str.charCodeAt(i);
  }
  return hash;
}

function rabinKarp(text, pattern) {
  if (text.length === 0 || pattern.length === 0) {
    return -1;
  }

  const patternHash = hash(pattern);
  // Rest of the implementation follows
}
function rabinKarp(text, pattern) {
  if (text.length === 0 || pattern.length === 0) {
    return -1;
  }

  const patternHash = hash(pattern);

  let textHash = hash(text.substr(0, pattern.length));
  // Rest of the implementation follows
}
function rabinKarp(text, pattern) {
  if (text.length === 0 || pattern.length === 0) {
    return -1;
  }

  const patternHash = hash(pattern);

  let textHash = hash(text.substr(0, pattern.length));

  for (let i = 0; i <= text.length - pattern.length; i++) {
    if (textHash === patternHash && text.substr(i, pattern.length) === pattern) {
      return i;
    }

    textHash -= text.charCodeAt(i);
    textHash += text.charCodeAt(i + pattern.length);
  }

  return -1;
}
function rabinKarp(text, pattern) {
  if (text.length === 0 || pattern.length === 0) {
    return -1;
  }

  const patternHash = hash(pattern);

  let textHash = hash(text.substr(0, pattern.length));

  for (let i = 0; i <= text.length - pattern.length; i++) {
    if (textHash === patternHash && text.substr(i, pattern.length) === pattern) {
      return i;
    }

    textHash -= text.charCodeAt(i);
    textHash += text.charCodeAt(i + pattern.length);
  }

  return -1;
}
