function isAnagram(str1, str2) {
    // Remove non-alphabetic characters and convert to lowercase
    str1 = str1.replace(/[^a-zA-Z]/g, "").toLowerCase();
    str2 = str2.replace(/[^a-zA-Z]/g, "").toLowerCase();

    // Sort the characters of the strings
    str1 = str1.split("").sort().join("");
    str2 = str2.split("").sort().join("");

    // Compare the sorted strings
    return str1 === str2;
}

// Test the function
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
