function areAnagrams(str1, str2) {
    // Remove non-alphabetic characters and convert to lowercase
    str1 = str1.replace(/[^a-zA-Z]/g, '').toLowerCase();
    str2 = str2.replace(/[^a-zA-Z]/g, '').toLowerCase();

    // Convert strings to arrays, sort them, then convert them back to strings
    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');

    // Compare the sorted strings
    return sortedStr1 === sortedStr2;
}

// Test the function
const str1 = "listen";
const str2 = "silent";

if (areAnagrams(str1, str2)) {
    console.log(`${str1} and ${str2} are anagrams.`);
} else {
    console.log(`${str1} and ${str2} are not anagrams.`);
}
