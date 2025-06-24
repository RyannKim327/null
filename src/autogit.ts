const lowerCaseString = originalString.toLowerCase();
const originalString: string = "HELLO WORLD!";
const lowerCaseString: string = originalString.toLowerCase();

console.log(lowerCaseString); // Output: "hello world!"
const originalString: string = "İSTANBUL"; // Turkish uppercase letter 'İ'
const lowerCaseString: string = originalString.toLocaleLowerCase('tr-TR');

console.log(lowerCaseString); // Output: "istanbul" (correctly handles Turkish locale)
function areStringsEqualIgnoreCase(str1: string, str2: string): boolean {
    return str1.toLowerCase() === str2.toLowerCase();
}

console.log(areStringsEqualIgnoreCase("TypeScript", "typescript")); // Output: true
