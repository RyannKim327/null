let str = "   hello world   ";
str = str.trim(); // outputs: "hello world"
let str = "   hello world   ";
str = str.replace(/\s+/g, ''); // outputs: "helloworld"
let str = "   hello world   ";
str = str.replace(/^\s+|\s+$/g, ''); // outputs: "hello world"
let str = "   hello world   ";
str = str.normalize('NFKC'); // outputs: "hello world"
