const str: string = "abc";
const num: number = parseInt(str, 10);

if (isNaN(num)) {
    console.log("Invalid number");
} else {
    console.log(num);
}
