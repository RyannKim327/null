function areAnagrams(stringA, stringB) {
    // Remove whitespace and convert to lowercase
    stringA = stringA.replace(/\s/g, '').toLowerCase();
    stringB = stringB.replace(/\s/g, '').toLowerCase();

    // Sort the characters in both strings
    const sortedA = stringA.split('').sort().join('');
    const sortedB = stringB.split('').sort().join('');

    // Compare the sorted strings
    return sortedA === sortedB;
}

// Examples
console.log(areAnagrams('LISTEN', 'SILENT')); // true
console.log(areAnagrams('hello', 'lloeh')); // true
console.log(areAnagrams('abc', 'def')); // false
