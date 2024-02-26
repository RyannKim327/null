function burrowsWheelerTransform(input) {
    var table = [];
    
    // Generate all rotations of the input string
    for (var i = 0; i < input.length; i++) {
        var rotated = input.slice(i) + input.slice(0, i);
        table.push(rotated);
    }
    
    // Sort the rotations
    table.sort();
    
    // Extract the last character of each rotation to get the transformed string
    var transformed = '';
    for (var i = 0; i < table.length; i++) {
        transformed += table[i][input.length - 1];
    }
    
    return transformed;
}

function inverseBurrowsWheelerTransform(input) {
    var table = [];
    
    // Generate all rotations of the transformed string
    for (var i = 0; i < input.length; i++) {
        table.push(input);
        input = input.slice(1) + input.slice(0, 1);
    }
    
    // Sort the rotations
    table.sort();
    
    // Find the original string
    var original = table.find(rotation => rotation.endsWith('$'));
    return original.slice(0, -1); // Remove the special character at the end
}

// Example
var originalString = "banana$";
var transformedString = burrowsWheelerTransform(originalString);
var reversedString = inverseBurrowsWheelerTransform(transformedString);

console.log("Original String: " + originalString);
console.log("Transformed String: " + transformedString);
console.log("Reversed String: " + reversedString);
