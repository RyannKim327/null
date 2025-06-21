const str = "   Hello, World!   ";
const trimmedStr = str.trim();
console.log(trimmedStr); // Output: "Hello, World!"
const str = "   Hello, \t World! \n";
const noWhitespaceStr = str.replace(/\s+/g, '');
console.log(noWhitespaceStr); // Output: "Hello,World!"
const str = "   Hello, \t World! \n";
const noSpacesStr = str.replace(/ /g, '');
console.log(noSpacesStr); // Output: "Hello,\tWorld!\n"
const str = "   Hello, \t World! \n";
const noTabsStr = str.replace(/\t/g, '');
console.log(noTabsStr); // Output: "   Hello,  World! \n"
const str = "   Hello,    \t World!   ";
const collapsedStr = str.replace(/\s+/g, ' ').trim();
console.log(collapsedStr); // Output: "Hello, World!"
function removeWhitespace(input: string, options: { leading?: boolean, trailing?: boolean, inner?: boolean }): string {
    let result = input;

    if (options.leading || options.trailing) {
        result = result.trim();
    }

    if (options.inner) {
        result = result.replace(/\s+/g, '');
    }

    return result;
}

const str = "   Hello,    World!   ";
console.log(removeWhitespace(str, { leading: true, trailing: true })); // Output: "Hello,    World!"
console.log(removeWhitespace(str, { inner: true })); // Output: "Hello,World!"
console.log(removeWhitespace(str, { leading: true, trailing: true, inner: true })); // Output: "Hello,World!"
