function reverseWords(str: string): string {
    return str.split(' ').reverse().join(' ');
}

const example = "Hello world from TypeScript";
console.log(reverseWords(example)); // Output: "TypeScript from world Hello"
function reverseWords(str: string): string {
    return str.trim().split(/\s+/).reverse().join(' ');
}
