function calculateMean(list) {
    let sum = 0;

    for (let i = 0; i < list.length; i++) {
        sum += list[i];
    }

    return sum / list.length;
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
const mean = calculateMean(numbers);

console.log("Mean:", mean);
