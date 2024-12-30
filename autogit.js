def boyer_moore_search(text, pattern):
    m = len(pattern)
    n = len(text)
    if m == 0:
        return 0
    
    last_occurrence = {}
    for i in range(m):
        last_occurrence[pattern[i]] = i
    
    i = m - 1
    j = m - 1
    while i < n:
        if text[i] == pattern[j]:
            if j == 0:
                return i
            else:
                i -= 1
                j -= 1
        else:
            if text[i] in last_occurrence:
                lo = last_occurrence[text[i]]
            else:
                lo = -1
            i = i + m - min(j, 1 + lo)
            j = m - 1
    
    return -1

text = "hello world"
pattern = "world"
result = boyer_moore_search(text, pattern)
if result != -1:
    print(f"Pattern found at index {result}")
else:
    print("Pattern not found")
