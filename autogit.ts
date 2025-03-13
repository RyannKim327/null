const str = "Hello World Example";
const noSpaces = str.replace(/\s/g, '');
const str = "Hello World Example";
const noSpaces = str.split(' ').join('');
const str = "Hello World Example";
const noSpaces = str.replaceAll(' ', '');
function removeSpaces(str: string): string {
    return str.replace(/\s/g, '');
}
