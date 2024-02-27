let str = "  Hello   World  ";
let newStr = str.replace(/\s/g, ''); // The \s matches any whitespace character, and the 'g' flag makes the replacement global
console.log(newStr); // Output: "HelloWorld"
