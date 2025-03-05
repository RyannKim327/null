const mainString: string = "Hello, welcome to TypeScript!";
const substring: string = "welcome";

const containsSubstring: boolean = mainString.includes(substring);

if (containsSubstring) {
    console.log(`The string contains the substring: "${substring}"`);
} else {
    console.log(`The string does not contain the substring: "${substring}"`);
}
