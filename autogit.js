const str = 'Hello, World!';

console.log(str.includes('Hello')); // true
console.log(str.includes('hello')); // false (case-sensitive)
console.log(str.includes('Wor'));   // true
const str = 'Hello, World!';

console.log(str.indexOf('Hello') >= 0); // true
console.log(str.indexOf('hello') >= 0); // false (case-sensitive)
console.log(str.indexOf('Wor') >= 0);   // true
const str = 'Hello, World!';

console.log(/Hello/.test(str)); // true
console.log(/hello/.test(str)); // false (case-sensitive)
console.log(/Wor/.test(str));   // true
