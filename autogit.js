#include <iostream>
#include <string>
#include <vector>

using namespace std;

void rabinKarp(string text, string pattern) {
    int n = text.length();
    int m = pattern.length();
    int d = 256; // number of characters in input alphabet
    int q = 101; // prime number
    int patternHash = 0;
    int textHash = 0;
    int h = 1;

    // Calculate h value, h = d^(m-1) % q
    for (int i = 0; i < m - 1; i++)
        h = (h * d) % q;

    // Calculate hash value of pattern and initial window of text
    for (int i = 0; i < m; i++) {
        patternHash = (d * patternHash + pattern[i]) % q;
        textHash = (d * textHash + text[i]) % q;
    }

    // Slide the pattern over text one by one
    for (int i = 0; i <= n - m; i++) {
        // Check for hash values of current window of text and pattern
        if (patternHash == textHash) {
            /* Check for characters one by one */
            for (int j = 0; j < m; j++) {
                if (text[i + j] != pattern[j])
                    break;
                else if (j == m - 1)
                    cout << "Pattern found at index " << i << endl;
            }
        }

        // Calculate hash value for next window of text
        if (i < n - m) {
            textHash = (d * (textHash - text[i] * h) + text[i + m]) % q;

            // We might get negative value of textHash, converting it to positive
            if (textHash < 0)
                textHash = textHash + q;
        }
    }
}

int main() {
    string text = "GEEKS FOR GEEKS";
    string pattern = "GEEK";
    rabinKarp(text, pattern);
    return 0;
}
public class RabinKarp {
    public static void main(String[] args) {
        String text = "GEEKS FOR GEEKS";
        String pattern = "GEEK";
        rabinKarp(text, pattern);
    }

    public static void rabinKarp(String text, String pattern) {
        int n = text.length();
        int m = pattern.length();
        int d = 256; // number of characters in input alphabet
        int q = 101; // prime number
        int patternHash = 0;
        int textHash = 0;
        int h = 1;

        // Calculate h value, h = d^(m-1) % q
        for (int i = 0; i < m - 1; i++)
            h = (h * d) % q;

        // Calculate hash value of pattern and initial window of text
        for (int i = 0; i < m; i++) {
            patternHash = (d * patternHash + pattern.charAt(i)) % q;
            textHash = (d * textHash + text.charAt(i)) % q;
        }

        // Slide the pattern over text one by one
        for (int i = 0; i <= n - m; i++) {
            // Check for hash values of current window of text and pattern
            if (patternHash == textHash) {
                /* Check for characters one by one */
                for (int j = 0; j < m; j++) {
                    if (text.charAt(i + j) != pattern.charAt(j))
                        break;
                    else if (j == m - 1)
                        System.out.println("Pattern found at index " + i);
                }
            }

            // Calculate hash value for next window of text
            if (i < n - m) {
                textHash = (d * (textHash - text.charAt(i) * h) + text.charAt(i + m)) % q;

                // We might get negative value of textHash, converting it to positive
                if (textHash < 0)
                    textHash = textHash + q;
            }
        }
    }
}
def rabinKarp(text, pattern):
    n = len(text)
    m = len(pattern)
    d = 256  # number of characters in input alphabet
    q = 101  # prime number
    patternHash = 0
    textHash =
