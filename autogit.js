function burrowsWheelerTransform(input) {
    var matrix = [];
    var rotated = input;
    
    // Create a matrix of rotated strings
    for (var i = 0; i < input.length; i++) {
        matrix.push(rotated);
        rotated = rotated[rotated.length - 1] + rotated.substring(0, rotated.length - 1);
    }
    
    // Sort the matrix lexicographically
    matrix.sort();
    
    // Extract the last characters of each rotated string
    var result = '';
    for (var j = 0; j < matrix.length; j++) {
        result += matrix[j][matrix[j].length - 1];
    }
    
    return result;
}

function burrowsWheelerInverseTransform(input) {
    var table = [];
    
    // Create a table with index
    for (var i = 0; i < input.length; i++) {
        table.push({ char: input[i], index: i });
    }
    
    // Sort the table
    table.sort((a, b) => {
        if (a.char === b.char) {
            return a.index - b.index;
        }
        return a.char.localeCompare(b.char);
    });
    
    // Follow the chain to get the original string
    var result = '';
    var currentIndex = 0;
    for (var j = 0; j < input.length; j++) {
        var currentChar = table[currentIndex].char;
        result = currentChar + result;
        currentIndex = table[currentIndex].index;
    }
    
    return result;
}

// Example usage
var inputString = "hello world";
var bwt = burrowsWheelerTransform(inputString);
console.log("Burrows-Wheeler Transform: " + bwt);
var inverseBwt = burrowsWheelerInverseTransform(bwt);
console.log("Inverse Burrows-Wheeler Transform: " + inverseBwt);
