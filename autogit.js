function isAnagram(str1, str2) {
    const sanitizeString = function (str) {
        return str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
    }

    return sanitizeString(str1) === sanitizeString(str2);
}

// Test the function
const string1 = "listen";
const string2 = "silent";
const string3 = "hello";
const string4 = "world";

console.log(isAnagram(string1, string2)); // Output: true
console.log(isAnagram(string1, string3)); // Output: false
console.log(isAnagram(string3, string4)); // Output: false
