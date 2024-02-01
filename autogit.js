function areAnagrams(str1, str2) {
    // Remove non-alphabetic characters and convert to lowercase
    str1 = str1.replace(/[^a-z]/gi, '').toLowerCase();
    str2 = str2.replace(/[^a-z]/gi, '').toLowerCase();

    // Sort the characters in alphabetical order
    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');

    // Compare the two resulting strings
    return str1 === str2;
}

// Example usage
const string1 = "listen";
const string2 = "silent";

if (areAnagrams(string1, string2)) {
    console.log(`${string1} and ${string2} are anagrams.`);
} else {
    console.log(`${string1} and ${string2} are not anagrams.`);
}
