function burrowsWheelerTransform(input) {
    let matrix = [];
    
    for (let i = 0; i < input.length; i++) {
        matrix.push(input.slice(i) + input.slice(0, i));
    }
    
    matrix.sort();
    
    let transformedString = "";
    let index = 0;
    
    for (let i = 0; i < matrix.length; i++) {
        transformedString += matrix[i][matrix[i].length - 1];
        if (matrix[i] === input) {
            index = i;
        }
    }
    
    return {transformedString, index};
}

function burrowsWheelerInverseTransform(transformedString, index) {
    let matrix = [];
    
    for (let i = 0; i < transformedString.length; i++) {
        let temp = [];
        for (let j = 0; j < transformedString.length; j++) {
            temp[j] = transformedString[j];
        }
        matrix.push(temp);
        transformedString = temp[0] + transformedString.slice(0, -1);
    }
    
    matrix.sort();
    
    let originalString = "";
    
    for (let i = 0; i < matrix.length; i++) {
        originalString += matrix[i][index];
    }
    
    return originalString;
}

// Example
let inputString = "hello world";
let {transformedString, index} = burrowsWheelerTransform(inputString);
let originalString = burrowsWheelerInverseTransform(transformedString, index);

console.log("Input String:", inputString);
console.log("Transformed String:", transformedString);
console.log("Original String:", originalString);
