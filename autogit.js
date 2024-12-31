// Array to be reversed
var originalArray = [1, 2, 3, 4, 5];

// Reversing the array
var reversedArray = [];
for (var i = originalArray.length - 1; i >= 0; i--) {
    reversedArray.push(originalArray[i]);
}

// Printing the reversed array
console.log("Reversed Array: " + reversedArray);
