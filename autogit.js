function isPalindrome(str) {
    let i = 0;
    let j = str.length - 1;

    while (i < j) {
        if (str[i] !== str[j]) {
            return false;
        }
        i++;
        j--;
    }

    return true;
}

// Test the function
const str1 = "radar";
const str2 = "hello";

console.log(isPalindrome(str1)); // Output: true
console.log(isPalindrome(str2)); // Output: false
