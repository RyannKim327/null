const originalString: string = "This is a sample string with spaces.";
const stringWithoutSpaces: string = originalString.replace(/\s+/g, '');

console.log(stringWithoutSpaces); // Output: "Thisisasamplestringwithspaces."
const originalString: string = "This is a sample string with spaces.";
const stringWithoutSpaces: string = originalString.split(' ').join('');

console.log(stringWithoutSpaces); // Output: "Thisisasamplestringwithspaces."
// Remove only space characters
const stringWithoutSpaces: string = originalString.replace(/ /g, '');

// Remove only tabs
const stringWithoutTabs: string = originalString.replace(/\t/g, '');

// Remove only newlines
const stringWithoutNewlines: string = originalString.replace(/\n/g, '');
function removeSpaces(input: string): string {
    // Using regex to remove all whitespace characters
    return input.replace(/\s+/g, '');
}

const testString: string = "Hello,   World!\nThis is a test.\tTabs and spaces removed.";
const result: string = removeSpaces(testString);

console.log(result); // Output: "Hello,World!Thisisatest.Tabsandspacesremoved."
