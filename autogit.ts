const str: string = "abc"; // Non-numeric string
const num: number = parseInt(str, 10);

if (isNaN(num)) {
    console.log("Conversion failed: not a valid number.");
} else {
    console.log(num);
}
