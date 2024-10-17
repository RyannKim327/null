def preprocess(pattern):
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
    
    table = preprocess(pattern)
    i = m - 1
    while i < n:
        k = 0
        while k < m and text[i - k] == pattern[m - 1 - k]:
            k += 1
        if k == m:
            return i - m + 1
        else:
            i += table.get(text[i], m)
    return -1

text = "hello world"
pattern = "world"
index = boyer_moore_horspool(text, pattern)
if index != -1:
    print("Pattern found at index:", index)
else:
    print("Pattern not found")
