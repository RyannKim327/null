const decimalNumber: number = 42; // Replace with your decimal number
const binaryString: string = decimalNumber.toString(2);

console.log(binaryString); // Outputs: "101010"
function decimalToBinary(num: number): string {
  if (isNaN(num) || !Number.isInteger(num) || num < 0) {
    throw new Error("Please provide a non-negative integer.");
  }
  return num.toString(2);
}

const userInput: string = "45"; // Example input as string
const decimalNum: number = parseInt(userInput, 10);
try {
  const binaryRepresentation = decimalToBinary(decimalNum);
  console.log(`Binary of ${decimalNum} is ${binaryRepresentation}`);
} catch (error) {
  console.error(error);
}
