const str: string = "abc"; // Example of a non-numeric string

const num: number = parseInt(str, 10);
if (isNaN(num)) {
    console.error("The string cannot be converted to an integer.");
} else {
    console.log(num);
}
