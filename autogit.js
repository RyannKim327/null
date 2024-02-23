function calculateStringLength(str) {
    let count = 0;
    for (let i = 0; str[i] !== undefined; i++) {
        count++;
    }
    return count;
}

let str = "Hello, World!";
console.log(calculateStringLength(str)); // Output: 13
