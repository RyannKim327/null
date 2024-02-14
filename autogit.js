const str = 'Hello, world!';

if (str.includes('world')) {
  console.log('Substring found!');
} else {
  console.log('Substring not found!');
}
const str = 'Hello, world!';
const substring = /world/;

if (str.match(substring)) {
  console.log('Substring found!');
} else {
  console.log('Substring not found!');
}
