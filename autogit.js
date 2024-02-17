function burrowsWheelerTransform(input) {
    // Generate cyclic permutations of the input string
    let permutations = [];
    for (let i = 0; i < input.length; i++) {
        let rotation = input.slice(i) + input.slice(0, i);
        permutations.push(rotation);
    }

    // Sort the permutations lexicographically
    permutations.sort();

    // Extract the last characters of each permutation
    let transformed = permutations.map((str) => str.slice(-1));

    // Return the transformed string
    return transformed.join("");
}

// Test the BWT algorithm
let input = "banana";
let bwt = burrowsWheelerTransform(input);
console.log("Input: ", input);
console.log("BWT: ", bwt);
