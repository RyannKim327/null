#include <iostream>
#include <string>

bool isPalindrome(const std::string& s) {
    int i = 0;
    int j = s.length() - 1;

    while (i < j) {
        if (s[i] != s[j]) {
            return false;
        }
        i++;
        j--;
    }

    return true;
}

int main() {
    std::string str = "racecar";
    
    if (isPalindrome(str)) {
        std::cout << "The string is a palindrome.";
    } else {
        std::cout << "The string is not a palindrome.";
    }

    return 0;
}
