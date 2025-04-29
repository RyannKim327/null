let str: string = "  Hello, TypeScript!  ";
let trimmedStr: string = str.trim();
console.log(trimmedStr); // Output: "Hello, TypeScript!"
let str: string = "  Hello,   TypeScript! \n Welcome to   \t TypeScript. ";
let noWhitespaceStr: string = str.replace(/\s+/g, ''); // Removes all whitespace
console.log(noWhitespaceStr); // Output: "Hello,TypeScript!WelcometoTypeScript."
let str: string = "  Hello,   TypeScript! \n Welcome to   \t TypeScript. ";
let noSpacesStr: string = str.replace(/ +/g, ''); // Removes only spaces
console.log(noSpacesStr); // Output: "Hello,TypeScript!\nWelcometo\tTypeScript."
