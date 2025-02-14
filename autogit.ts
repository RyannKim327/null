function removeSpaces(input: string): string {
    return input.replace(/ /g, '');
}

const originalString = "Hello World!";
const stringWithoutSpaces = removeSpaces(originalString);
console.log(stringWithoutSpaces); // Output: "HelloWorld!"
