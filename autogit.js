function isAnagram(str1, str2) {
  // Remove non-alphanumeric characters and convert to lowercase
  str1 = str1.replace(/[^\w]/g, "").toLowerCase();
  str2 = str2.replace(/[^\w]/g, "").toLowerCase();
  
  // Convert strings to arrays, sort them, and convert back to strings
  const sortedStr1 = Array.from(str1).sort().join("");
  const sortedStr2 = Array.from(str2).sort().join("");

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

// Test the function
const string1 = "listen";
const string2 = "silent";
console.log(isAnagram(string1, string2)); // Output: true

const string3 = "hello";
const string4 = "world";
console.log(isAnagram(string3, string4)); // Output: false
