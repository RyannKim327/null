const str = 'Hello, World!';
const substring = 'llo';

// Using includes() method
if (str.includes(substring)) {
  console.log(`"${str}" contains "${substring}"`);
} else {
  console.log(`"${str}" does not contain "${substring}"`);
}

// Using regular expression
const regex = new RegExp(substring);
if (regex.test(str)) {
  console.log(`"${str}" contains "${substring}"`);
} else {
  console.log(`"${str}" does not contain "${substring}"`);
}
