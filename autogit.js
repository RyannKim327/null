let str = "Hello, World! How are you?";
let result = str.replace(/\s/g, '');
console.log(result);
let str = "Hello, World! How are you?";
let result = str.split(' ').join('');
console.log(result);
let str = "Hello, World! How are you?";
let result = str.split(/\s/g).join('');
console.log(result);
