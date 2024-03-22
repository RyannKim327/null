function isPalindrome(str) {
    let i = 0;
    let j = str.length - 1;

    while (i < j) {
        // Ignore non-alphanumeric characters
        while (!isAlphanumeric(str[i]) && i < j) {
            i++;
        }
        while (!isAlphanumeric(str[j]) && i < j) {
            j--;
        }

        if (str[i].toLowerCase() !== str[j].toLowerCase()) {
            return false;
        }

        i++;
        j--;
    }

    return true;
}

function isAlphanumeric(char) {
    return /[a-zA-Z0-9]/.test(char);
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("race a car")); // false
