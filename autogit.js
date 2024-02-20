function burrowsWheelerTransform(input) {
    // Generate all rotations of the input string
    let rotations = [];
    input += "$"; // Add a sentinel character
    for (let i = 0; i < input.length; i++) {
        rotations.push(input.slice(i) + input.slice(0, i));
    }
    
    // Sort the rotations lexicographically
    rotations.sort();
    
    // Extract the last characters of the sorted rotations to get the BWT result
    let bwt = rotations.map(rotation => rotation.slice(-1)).join("");
    
    // Find the original string index in the sorted rotations
    let originalIndex = rotations.indexOf(input);
    
    return { bwt, originalIndex };
}

function reverseBurrowsWheelerTransform(bwt, originalIndex) {
    let table = [];
    for (let i = 0; i < bwt.length; i++) {
        table.push({ bwtChar: bwt[i], originalIndex: i });
    }
    
    // Sort the table by the bwtChar column
    table.sort((a, b) => a.bwtChar.localeCompare(b.bwtChar));
    
    let result = "";
    let index = originalIndex;
    for (let i = 0; i < bwt.length; i++) {
        result = table[index].bwtChar + result;
        index = table[index].originalIndex;
    }
    
    // Remove sentinel character
    result = result.slice(0, -1);
    
    return result;
}

// Example usage
let inputString = "hello world";
let { bwt, originalIndex } = burrowsWheelerTransform(inputString);
console.log("Burrows-Wheeler Transform:", bwt);

let originalString = reverseBurrowsWheelerTransform(bwt, originalIndex);
console.log("Original String:", originalString);
