function countCharOccurrences(str, char) {
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    
    return count;
}

// Example usage
let str = "hello world";
let char = "o";
console.log(countCharOccurrences(str, char)); // Output: 2
