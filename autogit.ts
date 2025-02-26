const str: string = "123";
const num: number = parseInt(str, 10); // 10 is the radix for decimal
console.log(num); // Output: 123
const str: string = "456";
const num: number = +str;
console.log(num); // Output: 456
const str: string = "789";
const num: number = Number(str);
console.log(num); // Output: 789
const str: string = "102.5";
const num: number = Math.floor(Number(str));
console.log(num); // Output: 102
function convertStringToInt(input: string): number {
    return parseInt(input, 10); // or use any of the above methods
}

const myString: string = "42";
const myNumber: number = convertStringToInt(myString);
console.log(myNumber); // Output: 42
