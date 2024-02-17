function isAnagram(str1, str2) {
    // Convert strings to lowercase and remove non-alphabetic characters
    str1 = str1.toLowerCase().replace(/[^a-z]/g, '');
    str2 = str2.toLowerCase().replace(/[^a-z]/g, '');

    // Sort the characters in each string
    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');

    // Compare the sorted strings
    return str1 === str2;
}

// Test the function with sample strings
const str1 = "listen";
const str2 = "silent";

if (isAnagram(str1, str2)) {
    console.log(`${str1} and ${str2} are anagrams.`);
} else {
    console.log(`${str1} and ${str2} are not anagrams.`);
}
