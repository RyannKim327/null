function burrowsWheelerTransform(input) {
    var suffixes = [];
    var inputLength = input.length;

    for (var i = 0; i < inputLength; i++) {
        var rotation = input.slice(i) + input.slice(0, i);
        suffixes.push(rotation);
    }

    suffixes.sort();

    var transformedString = '';
    
    for (var j = 0; j < inputLength; j++) {
        transformedString += suffixes[j][inputLength - 1];
    }

    return transformedString;
}

function inverseBurrowsWheelerTransform(input) {
    var table = [];
    for (var i = 0; i < input.length; i++) {
        table[i] = input.charAt(i);
    }

    table.sort();

    var firstColumn = table.slice();
    table = table.map(function (value) {
        return { value: value, index: 0, count: 0 };
    });

    table.forEach(function (element, index) {
        element.index = firstColumn.indexOf(element.value);
        element.count = firstColumn.slice(0, index).filter(function (char) {
            return char === element.value;
        }).length;
    });

    var current = table[0];
    var inverse = [];
    for (var i = 0; i < input.length; i++) {
        inverse.push(current.value);
        current = table[current.index];
        current.count++;
        current = table.find(function (element) {
            return element.value === current.value && element.count === current.count;
        });
    }

    return inverse.slice(1).join('');
}

var input = "hello world";
var bwtResult = burrowsWheelerTransform(input);
var originalString = inverseBurrowsWheelerTransform(bwtResult);

console.log("Input: " + input);
console.log("BWT Result: " + bwtResult);
console.log("Original String: " + originalString);

