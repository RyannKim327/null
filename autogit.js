def precompute_table(pattern):
    table = {}
    skip = len(pattern) - 1
    for i in range(len(pattern) - 1):
        table[pattern[i]] = skip
    return table

def boyer_moore_horspool(text, pattern):
    n = len(text)
    m = len(pattern)
    if m == 0:
        return 0

    table = precompute_table(pattern)
    i = m - 1
    while i < n:
        k = 0
        while k < m and pattern[m - 1 - k] == text[i - k]:
            k += 1
        if k == m:
            return i - m + 1
        if text[i] in table:
            i += table[text[i]]
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
