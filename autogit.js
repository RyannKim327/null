function isAnagram(str1, str2) {
    // Remove special characters and convert to lowercase
    str1 = str1.replace(/[^\w]/g, "").toLowerCase();
    str2 = str2.replace(/[^\w]/g, "").toLowerCase();

    // Sort the characters of both strings
    const sortedStr1 = str1.split("").sort().join("");
    const sortedStr2 = str2.split("").sort().join("");

    // Compare the sorted strings
    return sortedStr1 === sortedStr2;
}

// Test the function
const string1 = "listen";
const string2 = "silent";
if (isAnagram(string1, string2)) {
    console.log(`${string1} and ${string2} are anagrams.`);
} else {
    console.log(`${string1} and ${string2} are not anagrams.`);
}
