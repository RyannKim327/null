def preprocess(pattern):
    M = len(pattern)
    lps = [0] * M
    i, j = 1, 0

    while i < M:
        if pattern[i] == pattern[j]:
            j += 1
            lps[i] = j
            i += 1
        else:
            if j != 0:
                j = lps[j - 1]
            else:
                lps[i] = 0
                i += 1

    return lps

def kmp_search(text, pattern):
    N, M = len(text), len(pattern)
    lps = preprocess(pattern)
    i, j = 0, 0

    while i < N:
        if text[i] == pattern[j]:
            i += 1
            j += 1

            if j == M:
                print("Pattern found at index", i - j)
                j = lps[j - 1]
        else:
            if j != 0:
                j = lps[j - 1]
            else:
                i += 1

# Test the KMP algorithm
text = "ABABDABACDABABCABAB"
pattern = "ABABCABAB"
kmp_search(text, pattern)
