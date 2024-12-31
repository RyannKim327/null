def build_lps(pattern):
    lps = [0] * len(pattern)
    j = 0
    i = 1

    while i < len(pattern):
        if pattern[i] == pattern[j]:
            j += 1
            lps[i] = j
            i += 1
        else:
            if j != 0:
                j = lps[j-1]
            else:
                lps[i] = 0
                i += 1

    return lps

def kmp_search(text, pattern):
    n = len(text)
    m = len(pattern)
    
    if m == 0:
        return 0

    lps = build_lps(pattern)

    i = 0  # index for text[]
    j = 0  # index for pattern[]
    
    while i < n:
        if text[i] == pattern[j]:
            i += 1
            j += 1

            if j == m:
                return i - j
        else:
            if j != 0:
                j = lps[j-1]
            else:
                i += 1

    return -1

# Test the KMP algorithm
text = "ABABDABACDABABCABAB"
pattern = "ABABCABAB"

index = kmp_search(text, pattern)
if index != -1:
    print("Pattern found at index:", index)
else:
    print("Pattern not found in the text.")
