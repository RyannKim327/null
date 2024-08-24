def are_anagrams(str1, str2):
    return sorted(str1) == sorted(str2)

str1 = "listen"
str2 = "silent"
if are_anagrams(str1, str2):
    print("These strings are anagrams")
else:
    print("These strings are not anagrams")
import java.util.Arrays;

public class AnagramChecker {

    public static boolean areAnagrams(String str1, String str2) {
        char[] charArray1 = str1.toCharArray();
        char[] charArray2 = str2.toCharArray();
        Arrays.sort(charArray1);
        Arrays.sort(charArray2);
        return Arrays.equals(charArray1, charArray2);
    }

    public static void main(String[] args) {
        String str1 = "listen";
        String str2 = "silent";
        if (areAnagrams(str1, str2)) {
            System.out.println("These strings are anagrams");
        } else {
            System.out.println("These strings are not anagrams");
        }
    }
}
#include <iostream>
#include <algorithm>
#include <string>

bool areAnagrams(std::string str1, std::string str2) {
    std::sort(str1.begin(), str1.end());
    std::sort(str2.begin(), str2.end());
    return str1 == str2;
}

int main() {
    std::string str1 = "listen";
    std::string str2 = "silent";
    if (areAnagrams(str1, str2)) {
        std::cout << "These strings are anagrams" << std::endl;
    } else {
        std::cout << "These strings are not anagrams" << std::endl;
    }
    return 0;
}
