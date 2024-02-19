function areAnagrams(str1, str2) {
    // Remove non-alphabetic characters and convert to lowercase
    str1 = str1.replace(/[^a-zA-Z]/g, '').toLowerCase();
    str2 = str2.replace(/[^a-zA-Z]/g, '').toLowerCase();

    // Convert strings to arrays of characters
    let arr1 = str1.split('');
    let arr2 = str2.split('');

    // Sort arrays
    arr1.sort();
    arr2.sort();

    // Compare sorted arrays
    return arr1.join('') === arr2.join('');
}

// Example usage
const string1 = "listen";
const string2 = "silent";

if (areAnagrams(string1, string2)) {
    console.log(`${string1} and ${string2} are anagrams.`);
} else {
    console.log(`${string1} and ${string2} are not anagrams.`);
}
