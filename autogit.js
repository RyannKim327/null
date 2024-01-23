const stringWithWhitespace = '   Hello   World   ';
const withoutWhitespace = stringWithWhitespace.replace(/\s/g, '');
console.log(withoutWhitespace); // Output: "HelloWorld"
const stringWithWhitespace = '   Hello   World   ';
const withoutWhitespace = stringWithWhitespace.split(' ').join('');
console.log(withoutWhitespace); // Output: "HelloWorld"
const stringWithWhitespace = '   Hello   World   ';
const withoutWhitespace = stringWithWhitespace.trim();
console.log(withoutWhitespace); // Output: "Hello   World"
