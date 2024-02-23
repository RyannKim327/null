function burrowsWheelerTransform(str) {
    // Create the cyclic permutations of the input string
    let permutations = [str];
    for (let i = 1; i < str.length; i++) {
        permutations.push(str.slice(i) + str.slice(0, i));
    }

    // Sort the cyclic permutations
    permutations.sort();

    // Extract the last characters of each permutation to create the transformed string
    let transformedStr = '';
    for (let i = 0; i < permutations.length; i++) {
        transformedStr += permutations[i].charAt(permutations[i].length - 1);
    }

    // Find the original string by looking for the transformed string in the sorted permutations
    let originalStr = '';
    let index = permutations.indexOf(str);
    if (index !== -1) {
        for (let i = 0; i < permutations.length; i++) {
            originalStr += permutations[i].charAt(0);
        }
    }

    return {
        transformedStr: transformedStr,
        originalStr: originalStr
    };
}

// Test the Burrows-Wheeler Transform algorithm
let inputStr = 'hello world';
let result = burrowsWheelerTransform(inputStr);

console.log('Original String:', inputStr);
console.log('Transformed String:', result.transformedStr);
console.log('Decoded String:', result.originalStr);
