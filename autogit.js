function areAnagrams(str1, str2) {
    // Remove any non-alphabetic characters and convert to lowercase
    const cleanStr1 = str1.replace(/[^\w]/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^\w]/g, '').toLowerCase();
    
    // Check if the sorted versions of the strings are equal
    return cleanStr1.split('').sort().join('') === cleanStr2.split('').sort().join('');
}

// Test the function
const string1 = "rail safety";
const string2 = "fairy tales";
if (areAnagrams(string1, string2)) {
    console.log(`${string1} and ${string2} are anagrams.`);
} else {
    console.log(`${string1} and ${string2} are not anagrams.`);
}
