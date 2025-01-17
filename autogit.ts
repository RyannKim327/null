const decimalNumber: number = 12;
const binaryString: string = decimalNumber.toString(2);
console.log(binaryString); // Output: "1100"
const decimalNumber: number = 12;
const binaryString: string = decimalNumber.toBinaryString();
console.log(binaryString); // Output: "1100"
const binaryString: string = "1100";
const decimalNumber: number = parseInt(binaryString, 2);
console.log(decimalNumber); // Output: 12
