const str: string = "abc";
const num: number = parseInt(str, 10);

if (isNaN(num)) {
    console.log("The string cannot be converted to an integer.");
} else {
    console.log(num);
}
