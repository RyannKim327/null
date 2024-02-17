function burrowsWheelerTransform(input) {
    input += '$'; // Add a special end-of-string character
    let matrix = [];

    // Generate all rotations of input string
    for (let i = 0; i < input.length; i++) {
        let rotation = input.slice(i) + input.slice(0, i);
        matrix.push(rotation);
    }

    // Sort the matrix lexicographically
    matrix.sort();

    // Extract the last characters of each row
    let result = matrix.map(row => row.slice(-1)).join('');

    return result;
}

function inverseBurrowsWheelerTransform(input) {
    let table = [];
    for (let i = 0; i < input.length; i++) {
        table.push({ 'index': i, 'suffix': input[i] });
    }

    table = table.sort((a, b) => a.suffix.localeCompare(b.suffix));

    let result = '';
    let index = table[0].index;
    for (let i = 0; i < input.length; i++) {
        result += table[index].suffix;
        index = table[index].index;
    }

    return result.slice(0, -1); // Remove the added end-of-string character
}

// Usage example
let originalString = 'hello world';
let bwtResult = burrowsWheelerTransform(originalString);
let invertedString = inverseBurrowsWheelerTransform(bwtResult);

console.log('Original String:', originalString);
console.log('Burrows-Wheeler Transform Result:', bwtResult);
console.log('Inverted String:', invertedString);
