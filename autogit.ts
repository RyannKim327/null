const str = "T h i s  i s  a  t e s t";
const noSpaces = str.replace(/\s+/g, '');
console.log(noSpaces); // Outputs: "Thisisatest"
const noSpaces = str.replace(/ /g, '');
