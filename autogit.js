function areAnagrams(str1, str2) {
  // Remove non-alphabetic characters and convert to lowercase
  str1 = str1.replace(/[^A-Za-z]/g, "").toLowerCase();
  str2 = str2.replace(/[^A-Za-z]/g, "").toLowerCase();

  // Convert strings to arrays and sort them
  const arr1 = str1.split("").sort();
  const arr2 = str2.split("").sort();

  // Compare the sorted arrays
  return arr1.join("") === arr2.join("");
}

// Example usage:
const string1 = "debit card";
const string2 = "bad credit";
console.log(areAnagrams(string1, string2)); // Output: true
