def bmh_search(text, pattern):
    m = len(pattern)
    n = len(text)
    
    if m == 0:
        return 0

    skip = {}
    for i in range(m):
        skip[pattern[i]] = m - i - 1
    
    i = m - 1
    while i < n:
        k = 0
        while k < m and pattern[m-1-k] == text[i-k]:
            k += 1
        if k == m:
            return i - m + 1
        else:
            skip_val = skip.get(text[i], m)
            i += skip_val

    return -1

text = "Hello, how are you doing today?"
pattern = "doing"
index = bmh_search(text, pattern)

if index != -1:
    print(f"Pattern found at index {index}")
else:
    print("Pattern not found")
