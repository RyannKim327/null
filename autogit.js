function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

// Test the function
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
