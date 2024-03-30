function isPalindrome(str) {
    if (!str) {
        return false;
    }

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
const palindromeString = "racecar";
const nonPalindromeString = "hello";

console.log(isPalindrome(palindromeString)); // Output: true
console.log(isPalindrome(nonPalindromeString)); // Output: false
