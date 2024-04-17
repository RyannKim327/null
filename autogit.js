function isValidPalindrome(str) {
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }

    return true;
}

const string1 = "racecar";
const string2 = "hello";

console.log(isValidPalindrome(string1)); // Output: true
console.log(isValidPalindrome(string2)); // Output: false
