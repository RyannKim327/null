function getLengthOfStr(str) {
    let count = 0;
    while (str[count] !== undefined) {
        count++;
    }
    return count;
}

let myString = "Hello, World!";
let length = getLengthOfStr(myString);
console.log(length); // This will output the length of the string
