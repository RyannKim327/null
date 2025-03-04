const array: number[] = [1, 2, 3, 4, 5];
console.log("Original array:", array);

array.reverse();

console.log("Reversed array:", array);
const originalArray: number[] = [1, 2, 3, 4, 5];
const reversedArray: number[] = originalArray.slice().reverse();

console.log("Original array:", originalArray);
console.log("Reversed array:", reversedArray);
