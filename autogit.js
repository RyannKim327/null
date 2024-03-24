var numbers = [10, 5, 8, 15, 3];
var max = Math.max.apply(null, numbers);

console.log("Maximum value in the array is: " + max);
var numbers = [10, 5, 8, 15, 3];
var max = numbers[0];

for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log("Maximum value in the array is: " + max);
