def compute_lps_array(pattern):
    length = len(pattern)
    lps = [0] * length
    j = 0

    for i in range(1, length):
        while j > 0 and pattern[i] != pattern[j]:
            j = lps[j - 1]

        if pattern[i] == pattern[j]:
            j += 1

        lps[i] = j

    return lps

def kmp_search(text, pattern):
    lps = compute_lps_array(pattern)
    m = len(text)
    n = len(pattern)
    i = 0
    j = 0

    while i < m:
        if text[i] == pattern[j]:
            i += 1
            j += 1

            if j == n:
                return i - j
        
        else:
            if j != 0:
                j = lps[j - 1]
            else:
                i += 1

    return -1

text = "ABABDABACDABABCABAB"
pattern = "ABABCABAB"
result = kmp_search(text, pattern)
if result != -1:
    print("Pattern found at index:", result)
else:
    print("Pattern not found in the text.")
