function burrowsWheelerTransform(input) {
    // Generate all cyclic rotations of the input string
    let rotations = [];
    for (let i = 0; i < input.length; i++) {
        rotations.push(input.slice(i) + input.slice(0, i));
    }

    // Sort the rotations lexicographically
    rotations.sort();

    // Extract the last characters of each rotation
    let bwt = rotations.map(rotation => rotation.slice(-1)).join('');

    return bwt;
}

function reverseBurrowsWheelerTransform(bwt) {
    // Create a table of all rotations of the BWT
    let table = new Array(bwt.length);
    for (let i = 0; i < bwt.length; i++) {
        table[i] = bwt;
        bwt = sortString(bwt);
    }

    // Find the original string by searching for the string that ends with a '\0' character
    let original = table.find(row => row.endsWith('\0'));

    return original.slice(0, -1);
}

function sortString(str) {
    return str.split('').sort().join('');
}

// Example Usage
let input = "hello";
let bwt = burrowsWheelerTransform(input);
console.log("Burrows-Wheeler Transform of 'hello':", bwt);

let original = reverseBurrowsWheelerTransform(bwt);
console.log("Original string:", original);
