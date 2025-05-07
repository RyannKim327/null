function getStringLength(str: string): number {
    let count = 0;
    for (const _ of str) {
        count++;
    }
    return count;
}

const example = "Hello, world!";
console.log(getStringLength(example)); // Outputs: 13
