const str = 'Hello, world!';
const substring = 'world';

if (str.includes(substring)) {
  console.log(`"${str}" contains "${substring}"`);
} else {
  console.log(`"${str}" does not contain "${substring}"`);
}
const str = 'Hello, world!';
const substring = 'world';

const regex = new RegExp(substring);
if (regex.test(str)) {
  console.log(`"${str}" contains "${substring}"`);
} else {
  console.log(`"${str}" does not contain "${substring}"`);
}
"Hello, world!" contains "world"
