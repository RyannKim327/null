function burrowsWheelerTransform(input) {
    // Generate all cyclic rotations of the input string
    let rotations = [];
    for (let i = 0; i < input.length; i++) {
        rotations.push(input.slice(i) + input.slice(0, i));
    }

    // Sort the rotations lexicographically
    rotations = rotations.sort();

    // Extract the last characters of each rotation to form the BWT output
    let bwt = rotations.map(rotation => rotation.slice(-1)).join('');

    // Find the index of the original input string in the sorted rotations
    let originalIndex = rotations.indexOf(input);

    return { bwt, originalIndex };
}

function burrowsWheelerInverse(bwt, originalIndex) {
    let table = [];
    for (let i = 0; i < bwt.length; i++) {
        table.push({ char: bwt[i], index: i });
    }

    table.sort((a, b) => {
        if (a.char < b.char) {
            return -1;
        } else if (a.char > b.char) {
            return 1;
        } else {
            return 0;
        }
    });

    let index = originalIndex;
    let result = '';
    for (let i = 0; i < bwt.length; i++) {
        result = table[index].char + result;
        index = table[index].index;
    }

    return result;
}

// Test the implementation
let input = 'banana';
let { bwt, originalIndex } = burrowsWheelerTransform(input);
console.log('BWT:', bwt);

let originalInput = burrowsWheelerInverse(bwt, originalIndex);
console.log('Original Input:', originalInput);

