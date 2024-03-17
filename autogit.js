function isAnagram(str1, str2) {
    // Clean and lowercase both strings
    str1 = str1.toLowerCase().replace(/[^a-z]+/g, '');
    str2 = str2.toLowerCase().replace(/[^a-z]+/g, '');

    // Sort the characters of both strings
    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');

    // Compare the sorted strings
    return str1 === str2;
}

// Test the function
const string1 = "Listen";
const string2 = "Silent";

if (isAnagram(string1, string2)) {
    console.log(`${string1} and ${string2} are anagrams.`);
} else {
    console.log(`${string1} and ${string2} are not anagrams.`);
}
