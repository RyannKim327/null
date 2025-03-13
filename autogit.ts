function getStringLength(str: string): number {
    let count = 0;
    for (let char of str) {
        count++;
    }
    return count;
}

console.log(getStringLength("Hello")); // Output: 5
function getStringLengthRecursive(str: string): number {
    if (str === '') return 0;
    return 1 + getStringLengthRecursive(str.slice(1));
}

console.log(getStringLengthRecursive("Hello")); // Output: 5
function getStringLengthReduce(str: string): number {
    return str.split('').reduce((count) => count + 1, 0);
}

console.log(getStringLengthReduce("Hello")); // Output: 5
function getStringLengthWhile(str: string): number {
    let count = 0;
    while (str[count] !== undefined) {
        count++;
    }
    return count;
}

console.log(getStringLengthWhile("Hello")); // Output: 5
