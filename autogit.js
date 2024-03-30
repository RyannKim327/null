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

// Example usage
const str1 = "racecar";
console.log(isPalindrome(str1)); // Output: true

const str2 = "hello";
console.log(isPalindrome(str2)); // Output: false
