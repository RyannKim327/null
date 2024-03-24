function calculateMean(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

let numbers = [1, 2, 3, 4, 5];
let mean = calculateMean(numbers);
console.log("Mean: ", mean);
