function isPalindrome(str) {
    str = str.toLowerCase();
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

// Testing the function
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
