let str = 'Hello, world!';
let substring = 'world';

if (str.includes(substring)) {
    console.log('The string contains the substring');
} else {
    console.log('The string does not contain the substring');
}
let str = 'Hello, world!';
let substring = 'WORLD';

if (str.toLowerCase().includes(substring.toLowerCase())) {
    console.log('The string contains the substring');
} else {
    console.log('The string does not contain the substring');
}
