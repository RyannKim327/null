const str = 'Hello, world!';
const substring = 'world';

if (str.includes(substring)) {
  console.log('String contains the substring');
} else {
  console.log('String does not contain the substring');
}
const str = 'Hello, world!';
const substring = 'world';

if (str.indexOf(substring) !== -1) {
  console.log('String contains the substring');
} else {
  console.log('String does not contain the substring');
}
const str = 'Hello, world!';
const substring = 'world';

const regex = new RegExp(substring);

if (regex.test(str)) {
  console.log('String contains the substring');
} else {
  console.log('String does not contain the substring');
}
