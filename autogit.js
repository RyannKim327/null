#include <iostream>
#include <vector>

void computeLPSArray(std::string pattern, std::vector<int>& lps) {
    int len = 0; // length of the previous longest prefix suffix
    
    lps[0] = 0; // lps of the first element is always 0
    int i = 1;
    
    while (i < pattern.length()) {
        if (pattern[i] == pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len != 0) {
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
}

void KMP(std::string text, std::string pattern) {
    std::vector<int> lps(pattern.length());
    computeLPSArray(pattern, lps);
    
    int i = 0; // index for text[]
    int j = 0; // index for pattern[]
    
    while (i < text.length()) {
        if (pattern[j] == text[i]) {
            j++;
            i++;
        }
        
        if (j == pattern.length()) {
            std::cout << "Pattern found at index " << i - j << std::endl;
            j = lps[j - 1];
        } else if (i < text.length() && pattern[j] != text[i]) {
            if (j != 0) {
                j = lps[j - 1];
            } else {
                i = i + 1;
            }
        }
    }
}

int main() {
    std::string text = "ABABDABACDABABCABAB";
    std::string pattern = "ABABCABAB";
    
    KMP(text, pattern);
    
    return 0;
}
