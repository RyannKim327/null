def build_bad_table(pattern):
    table = {}
    m = len(pattern)
    for i in range(m - 1):
        table[pattern[i]] = m - 1 - i
    return table

def boyer_moore_horspool(text, pattern):
    n = len(text)
    m = len(pattern)
    if m == 0:
        return 0

    bad_table = build_bad_table(pattern)
    i = m - 1
    while i < n:
        k = 0
        while k < m and text[i - k] == pattern[m - 1 - k]:
            k += 1
        if k == m:
            return i - m + 1
        else:
            bad_char = text[i - k]
            if bad_char in bad_table:
                i += bad_table[bad_char]
            else:
                i += m
    return -1

# Example usage
text = "ABAAABCD"
pattern = "ABC"
result = boyer_moore_horspool(text, pattern)
if result != -1:
    print("Pattern found at index:", result)
else:
    print("Pattern not found in the text.")
