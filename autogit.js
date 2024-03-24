function areAnagrams(str1, str2) {
    // Remove non-alphabetic characters and convert to lowercase
    const cleanStr1 = str1.replace(/[^a-z]/ig, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^a-z]/ig, '').toLowerCase();

    // Sort the characters in the strings
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');

    // Compare the sorted strings
    return sortedStr1 === sortedStr2;
}

// Test the function
const string1 = "listen";
const string2 = "silent";

if (areAnagrams(string1, string2)) {
    console.log(`${string1} and ${string2} are anagrams.`);
} else {
    console.log(`${string1} and ${string2} are not anagrams.`);
}
