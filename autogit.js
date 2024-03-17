function checkAnagram(str1, str2) {
    // Remove spaces and punctuation, convert to lowercase, and split into arrays
    const cleanStr1 = str1.replace(/[^\w]/g, "").toLowerCase().split("");
    const cleanStr2 = str2.replace(/[^\w]/g, "").toLowerCase().split("");

    // Sort both arrays alphabetically and convert back to strings
    const sortedStr1 = cleanStr1.sort().join("");
    const sortedStr2 = cleanStr2.sort().join("");

    // Compare the sorted strings
    if (sortedStr1 === sortedStr2) {
        return true;
    } else {
        return false;
    }
}

// Test the function
const string1 = "Listen";
const string2 = "Silent";

if (checkAnagram(string1, string2)) {
    console.log(`${string1} and ${string2} are anagrams.`);
} else {
    console.log(`${string1} and ${string2} are not anagrams.`);
}
