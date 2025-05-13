const str = "Hello world, how are you?";
const noSpaces = str.replace(/\s+/g, '');
console.log(noSpaces); // "Helloworld,howareyou?"
const noSpaces = str.replace(/ /g, '');
function removeSpaces(input: string): string {
  return input.replace(/\s+/g, '');
}
