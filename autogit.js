let str = '  hello  world  ';
let result = str.replace(/\s/g, ''); 
console.log(result); // Output: 'helloworld'
let str = '  hello  world  ';
let result = str.trim(); 
console.log(result); // Output: 'hello  world'
let str = '  hello  world  ';
let result = str.replace(/\s+/g, ' '); 
console.log(result); // Output: ' hello world '
