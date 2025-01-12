#include <stdio.h>
#include <string.h>

void build_bad_char_table(char *pattern, int m, int bad_char[256]) {
    int i;
    for (i = 0; i < 256; i++)
        bad_char[i] = m;
    for (i = 0; i < m - 1; i++)
        bad_char[(int)pattern[i]] = m - 1 - i;
}

void boyer_moore(char *text, char *pattern) {
    int m = strlen(pattern);
    int n = strlen(text);
    int bad_char[256];

    build_bad_char_table(pattern, m, bad_char);

    int i = 0;
    while (i <= n - m) {
        int j = m - 1;

        while (j >= 0 && pattern[j] == text[i + j])
            j--;

        if (j < 0) {
            printf("Pattern found at shift = %d\n", i);
            i += m - 1 - bad_char[text[i + m - 1]];
        } else
            i += max(1, j - bad_char[text[i + j]]);
    }
}

int main() {
    char text[] = "ABABDABACDABABCABAB";
    char pattern[] = "ABABCABAB";
    boyer_moore(text, pattern);
    return 0;
}
public class BoyerMoore {
    private static void buildBadCharTable(char[] pattern, int m, int R, int badChar[]) {
        for (int i = 0; i < R; i++)
            badChar[i] = m;
        for (int j = 0; j < m - 1; j++)
            badChar[pattern[j]] = m - 1 - j;
    }

    public static void boyerMoore(char[] text, char[] pattern) {
        int m = pattern.length;
        int n = text.length;
        int badChar[] = new int[256];

        buildBadCharTable(pattern, m, 256, badChar);

        int i = 0;
        while (i <= n - m) {
            int j = m - 1;

            while (j >= 0 && pattern[j] == text[i + j])
                j--;

            if (j < 0) {
                System.out.println("Pattern found at shift = " + i);
                i += (m - 1 - badChar[text[i + m - 1]] > 0 ? m - 1 - badChar[text[i + m - 1]] : 1);
            } else
                i += Math.max(1, j - badChar[text[i + j]]);
        }
    }

    public static void main(String[] args) {
        String text = "ABABDABACDABABCABAB";
        String pattern = "ABABCABAB";
        boyerMoore(text.toCharArray(), pattern.toCharArray());
    }
}
def build_bad_char_table(pattern, m):
    bad_char = [-1] * 256
    for i in range(m - 1):
        bad_char[ord(pattern[i])] = i
    return bad_char

def boyer_moore(text, pattern):
    m = len(pattern)
    n = len(text)
    bad_char = build_bad_char_table(pattern, m)

    i = 0
    while i <= n - m:
        j = m - 1

        while j >= 0 and pattern[j] == text[i + j]:
            j -= 1

        if j < 0:
            print("Pattern found at shift = ", i)
            i += max(1, m - 1 - bad_char[ord(text[i + m - 1])])
        else:
            i += max(1, j - bad_char[ord(text[i + j])])

text = "ABABDABACDABABCABAB"
pattern = "ABABCABAB"
boyer_moore(text, pattern)
#include <iostream>
#include <string>
#include <vector>

using namespace std;

void buildBadCharTable(string pattern, int m, vector<int>& badChar) {
    badChar.assign(256, -1);
    for (int i = 0; i < m - 1; i++)
        badChar[pattern[i]] = i;
}

void boyerMoore(string text, string pattern) {
    int m = pattern.size();
    int n = text.size();
    vector<int> badChar
