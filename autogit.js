const str = 'Hello, world!';
const subStr = 'world';

if (str.includes(subStr)) {
  console.log('Substring found!');
} else {
  console.log('Substring not found!');
}
const str = 'Hello, world!';
const subStr = 'world';
const regex = new RegExp(subStr);

if (str.match(regex)) {
  console.log('Substring found!');
} else {
  console.log('Substring not found!');
}
