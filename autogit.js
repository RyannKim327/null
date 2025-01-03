def precompute_bad_char_table(pattern):
    bad_char_table = {}
    for i in range(len(pattern) - 1):
        bad_char_table[pattern[i]] = len(pattern) - 1 - i
    return bad_char_table

def boyer_moore_horspool(text, pattern):
    m = len(pattern)
    n = len(text)
    bad_char_table = precompute_bad_char_table(pattern)
    
    i = m - 1
    while i < n:
        k = 0
        while k < m and pattern[m - 1 - k] == text[i - k]:
            k += 1
        if k == m:
            return i - m + 1
        if text[i] in bad_char_table:
            i += bad_char_table[text[i]]
        else:
            i += m
    return -1

text = "ABAAABCD"
pattern = "ABC"
index = boyer_moore_horspool(text, pattern)
if index != -1:
    print("Pattern found at index:", index)
else:
    print("Pattern not found")
