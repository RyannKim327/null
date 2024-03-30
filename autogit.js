function checkAnagrams(str1, str2) {
    // Remove spaces and punctuation, then convert to lowercase
    str1 = str1.replace(/[^\w]/g, '').toLowerCase();
    str2 = str2.replace(/[^\w]/g, '').toLowerCase();

    // Sort the characters of the strings
    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');

    // Compare the sorted strings
    return str1 === str2;
}

// Test the function
const string1 = "Listen";
const string2 = "Silent";
if (checkAnagrams(string1, string2)) {
    console.log(`${string1} and ${string2} are anagrams.`);
} else {
    console.log(`${string1} and ${string2} are not anagrams.`);
}
