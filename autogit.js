const str = 'Hello, World!';
const subStr = 'World';

if (str.includes(subStr)) {
    console.log('The string contains the substring');
} else {
    console.log('The string does not contain the substring');
}
const str = 'Hello, World!';
const subStr = 'World';

if (str.indexOf(subStr) !== -1) {
    console.log('The string contains the substring');
} else {
    console.log('The string does not contain the substring');
}
const str = 'Hello, World!';
const subStr = 'World';
const regex = new RegExp(subStr);

if (regex.test(str)) {
    console.log('The string contains the substring');
} else {
    console.log('The string does not contain the substring');
}
