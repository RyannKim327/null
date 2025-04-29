let arr: number[] = [1, 2, 3, 4, 5];
console.log("Original array:", arr);

// Reverse the array
arr.reverse();
console.log("Reversed array:", arr);
Original array: [1, 2, 3, 4, 5]
Reversed array: [5, 4, 3, 2, 1]
let originalArr: number[] = [1, 2, 3, 4, 5];
console.log("Original array:", originalArr);

// Create a new reversed array
let reversedArr: number[] = originalArr.slice().reverse();
console.log("New reversed array:", reversedArr);
console.log("Original array after reverse:", originalArr);
Original array: [1, 2, 3, 4, 5]
New reversed array: [5, 4, 3, 2, 1]
Original array after reverse: [1, 2, 3, 4, 5]
