const str = 'Hello, World!';

if (str.includes('Hello')) {
  console.log('Substring found');
} else {
  console.log('Substring not found');
}
const str = 'Hello, World!';

if (str.indexOf('Hello') !== -1) {
  console.log('Substring found');
} else {
  console.log('Substring not found');
}
const str = 'Hello, World!';
const regex = /Hello/;

if (regex.test(str)) {
  console.log('Substring found');
} else {
  console.log('Substring not found');
}
