const str: string = "abc";
const num: number = parseInt(str, 10);

if (isNaN(num)) {
    console.log("The string is not a valid number.");
} else {
    console.log(num);
}
