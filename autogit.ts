function isPalindrome(s: string): boolean {
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
function isPalindromeIgnoreNonAlnum(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        while (left < right && !isAlphanumeric(s[left])) left++;
        while (left < right && !isAlphanumeric(s[right])) right--;

        if (left < right && s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

function isAlphanumeric(ch: string): boolean {
    const code = ch.charCodeAt(0);
    return (
        (code >= 48 && code <= 57) ||    // 0-9
        (code >= 65 && code <= 90) ||    // A-Z
        (code >= 97 && code <= 122)      // a-z
    );
}
