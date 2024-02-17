function isAnagram(str1, str2) {
    // Remove non-alphabetic characters and convert to lowercase
    str1 = str1.replace(/[^a-z]/gi, '').toLowerCase();
    str2 = str2.replace(/[^a-z]/gi, '').toLowerCase();

    // Sort the characters in the strings
    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');

    // Compare the sorted strings
    return str1 === str2;
}

// Test the function
const string1 = "listen";
const string2 = "silent";

if (isAnagram(string1, string2)) {
    console.log(`${string1} and ${string2} are anagrams.`);
} else {
    console.log(`${string1} and ${string2} are not anagrams.`);
}
