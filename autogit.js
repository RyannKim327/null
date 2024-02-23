function burrowsWheelerTransform(input) {
    let table = [];

    // Generate all cyclic permutations of the input string
    for (let i = 0; i < input.length; i++) {
        table.push(input.slice(i) + input.slice(0, i));
    }

    // Sort the cyclic permutations lexicographically
    table.sort();

    // Get the last characters of each cyclic permutation to construct the transformed string
    let transformedString = table.map(entry => entry.charAt(input.length - 1)).join('');

    // Find the index of the original input in the sorted table
    let originalIndex = table.indexOf(input);

    return { transformedString, originalIndex };
}

function inverseBurrowsWheelerTransform(transformedString, originalIndex) {
    let table = [];
    let length = transformedString.length;

    // Construct the initial table
    for (let i = 0; i < length; i++) {
        table.push([]);
    }

    // Fill the table with the transformed string at each step
    for (let i = 0; i < length; i++) {
        table = table.map((entry, index) => {
            return { first: transformedString.charAt(index), second: entry };
        });

        table.sort((a, b) => {
            if (a.first === b.first) return a.second < b.second ? -1 : 1;
            return a.first < b.first ? -1 : 1;
        });
    }

    // Find the original input by starting at the original index
    let originalString = "";
    let current = table[originalIndex];
    for (let i = 0; i < length; i++) {
        originalString = current.first + originalString;
        current = table[current.second];
    }

    return originalString;
}

// Example usage
let input = "hello";
let { transformedString, originalIndex } = burrowsWheelerTransform(input);
console.log('Transformed string:', transformedString);
console.log('Original index:', originalIndex);

let originalString = inverseBurrowsWheelerTransform(transformedString, originalIndex);
console.log('Original string:', originalString);
