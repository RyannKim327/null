const str: string = "123";

const num1: number = parseInt(str, 10);
const num2: number = +str;
const num3: number = Number(str);
const num4: number = Number.parseInt(str, 10);

console.log(num1, num2, num3, num4); // Output: 123 123 123 123
