function mean(numbers) {
    let sum = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    
    return sum / numbers.length;
}

// Example
const numbers = [1, 2, 3, 4, 5];
const average = mean(numbers);
console.log("Mean:", average);
