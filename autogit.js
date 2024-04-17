function areAnagrams(str1, str2) {
    // remove white spaces and convert to lowercase
    str1 = str1.replace(/\s/g, '').toLowerCase();
    str2 = str2.replace(/\s/g, '').toLowerCase();

    // convert strings to arrays, then sort and join
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    // compare sorted strings
    return sortedStr1 === sortedStr2;
}

// Test the function
const string1 = 'listen';
const string2 = 'silent';
if (areAnagrams(string1, string2)) {
    console.log(`${string1} and ${string2} are anagrams.`);
} else {
    console.log(`${string1} and ${string2} are not anagrams.`);
}
