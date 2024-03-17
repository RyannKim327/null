function areAnagrams(str1, str2) {
    // Convert strings to lowercase and remove non-alphabetic characters
    str1 = str1.toLowerCase().replace(/[^a-z]/g, '');
    str2 = str2.toLowerCase().replace(/[^a-z]/g, '');

    // Sort the characters in the strings alphabetically
    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');

    // Check if the sorted strings are equal
    return str1 === str2;
}

// Test the function
const string1 = "Listen";
const string2 = "Silent";

if (areAnagrams(string1, string2)) {
    console.log(`"${string1}" and "${string2}" are anagrams.`);
} else {
    console.log(`"${string1}" and "${string2}" are not anagrams.`);
}
