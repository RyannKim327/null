function isAnagram(str1, str2) {
    // Remove non-alphabetic characters and convert to lowercase
    str1 = str1.replace(/[^a-zA-Z]/g, "").toLowerCase();
    str2 = str2.replace(/[^a-zA-Z]/g, "").toLowerCase();

    // Sort the characters of both strings
    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');

    // Compare the two sorted strings
    if (str1 === str2) {
        return true;
    } else {
        return false;
    }
}

// Test the function
const string1 = "Listen";
const string2 = "Silent";
if (isAnagram(string1, string2)) {
    console.log(`${string1} and ${string2} are anagrams.`);
} else {
    console.log(`${string1} and ${string2} are not anagrams.`);
}
Listen and Silent are anagrams.
