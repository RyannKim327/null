int is_palindrome(char *s) {
    int start = 0;
    int end = strlen(s) - 1;

    while (start < end) {
        if (s[start] != s[end]) {
            return 0; // not a palindrome
        }
        start++;
        end--;
    }
    return 1; // is a palindrome
}
public boolean isPalindrome(String s) {
    int start = 0;
    int end = s.length() - 1;

    while (start < end) {
        if (s.charAt(start) != s.charAt(end)) {
            return false; // not a palindrome
        }
        start++;
        end--;
    }
    return true; // is a palindrome
}
def is_palindrome(s):
    start = 0
    end = len(s) - 1

    while start < end:
        if s[start] != s[end]:
            return False  # not a palindrome
        start += 1
        end -= 1
    return True  # is a palindrome
bool isPalindrome(string s) {
    int start = 0;
    int end = s.length() - 1;

    while (start < end) {
        if (s[start] != s[end]) {
            return false; // not a palindrome
        }
        start++;
        end--;
    }
    return true; // is a palindrome
}
function isPalindrome(s) {
    let start = 0;
    let end = s.length - 1;

    while (start < end) {
        if (s[start] !== s[end]) {
            return false; // not a palindrome
        }
        start++;
        end--;
    }
    return true; // is a palindrome
}
