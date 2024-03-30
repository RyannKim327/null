function findStringLength(str) {
    let count = 0;
    for (let i = 0; str[i] !== undefined; i++) {
        count++;
    }
    return count;
}

let myString = "Hello, World!";
console.log("Length of the string:", findStringLength(myString));
