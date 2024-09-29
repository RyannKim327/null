def build_bad_char_table(pattern):
    table = {}
    for i in range(len(pattern) - 1):
        table[pattern[i]] = len(pattern) - i - 1
    return table

def horspool_search(text, pattern):
    m = len(pattern)
    n = len(text)
    if m > n:
        return -1  # Pattern is longer than the text

    skip_table = build_bad_char_table(pattern)
    i = m - 1
    while i < n:
        k = 0
        while k < m and pattern[m - 1 - k] == text[i - k]:
            k += 1
        if k == m:
            return i - m + 1  # Pattern found
        if text[i] in skip_table:
            i += skip_table[text[i]]
        else:
            i += m

    return -1  # Pattern not found

# Example usage
text = "hello world"
pattern = "world"
index = horspool_search(text, pattern)
if index != -1:
    print("Pattern found at index:", index)
else:
    print("Pattern not found")
