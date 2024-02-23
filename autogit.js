function generateRotations(input) {
    let rotations = [];
    for (let i = 0; i < input.length; i++) {
        let rotatedString = input.slice(i) + input.slice(0, i);
        rotations.push(rotatedString);
    }
    return rotations.sort();
}
function burrowsWheelerTransform(input) {
    let rotations = generateRotations(input);
    let bwt = rotations.map(rotatedString => rotatedString.slice(-1)).join("");
    return bwt;
}
function inverseBurrowsWheelerTransform(bwt) {
    let table = Array.from(bwt).map((char, index) => ({ char, index }));
    table.sort((a, b) => a.char.localeCompare(b.char));
    
    let current = table.find(entry => entry.index === 0);
    let result = "";
    
    for (let i = 0; i < bwt.length; i++) {
        current = table[current.index];
        result += current.char;
    }
    
    return result;
}
let input = "hello";
let bwtResult = burrowsWheelerTransform(input);
console.log("BWT Result: " + bwtResult);

let originalInput = inverseBurrowsWheelerTransform(bwtResult);
console.log("Original Input: " + originalInput);
