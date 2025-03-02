const str: string = "abc"; // Invalid number
const intValue: number = parseInt(str, 10);
if (isNaN(intValue)) {
    console.log("Conversion to integer failed.");
} else {
    console.log(intValue);
}
