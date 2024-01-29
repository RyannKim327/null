const str = 'Hello, world!';
const substring = 'world';

if (str.includes(substring)) {
  console.log('Substring found!');
} else {
  console.log('Substring not found.');
}
const str = 'Hello, world!';
const substring = 'world';

if (str.indexOf(substring) >= 0) {
  console.log('Substring found!');
} else {
  console.log('Substring not found.');
}
const str = 'Hello, world!';
const substring = 'world';

const regex = new RegExp(substring);

if (regex.test(str)) {
  console.log('Substring found!');
} else {
  console.log('Substring not found.');
}
