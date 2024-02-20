function areAnagrams(str1, str2) {
    // Remove any non-alphabetic characters and convert to lowercase
    str1 = str1.replace(/[\W_]/g, '').toLowerCase();
    str2 = str2.replace(/[\W_]/g, '').toLowerCase();

    // Check if the length of the strings is the same
    if (str1.length !== str2.length) {
        return false;
    }

    // Sort the characters of the strings and compare them
    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// Test the function
let string1 = "listen";
let string2 = "silent";
if (areAnagrams(string1, string2)) {
    console.log(`${string1} and ${string2} are anagrams.`);
} else {
    console.log(`${string1} and ${string2} are not anagrams.`);
}
