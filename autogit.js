def compute_lps_array(pattern):
    M = len(pattern)
    lps = [0] * M
    j = 0

    for i in range(1, M):
        if pattern[i] == pattern[j]:
            j += 1
            lps[i] = j
        else:
            if j != 0:
                j = lps[j - 1]
                i -= 1

    return lps


def kmp_search(text, pattern):
    N = len(text)
    M = len(pattern)
    lps = compute_lps_array(pattern)
    i = 0
    j = 0

    while i < N:
        if pattern[j] == text[i]:
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


text = "ABABDABACDABABCABAB"
pattern = "ABABCABAB"
kmp_search(text, pattern)
