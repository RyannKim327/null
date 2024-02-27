function isAnagram(str1, str2) {
    // Remove non-alphabetic characters and convert to lowercase
    str1 = str1.replace(/[^\w]/g, '').toLowerCase();
    str2 = str2.replace(/[^\w]/g, '').toLowerCase();

    // Convert strings to arrays, sort and join them back
    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');

    // Check if the sorted strings are equal
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
