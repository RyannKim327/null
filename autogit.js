function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

// Test the function
const testString1 = "madam";
const testString2 = "hello";

console.log(isPalindrome(testString1)); // Output: true
console.log(isPalindrome(testString2)); // Output: false
