def boyer_moore(text, pattern):
    m = len(pattern)
    n = len(text)

    if m == 0:
        return -1

    skip = []
    for _ in range(256):
        skip.append(m)
    
    for i in range(m - 1):
        skip[ord(pattern[i])] = m - 1 - i

    i = m - 1
    while i < n:
        j = m - 1
        while text[i] == pattern[j]:
            if j == 0:
                return i
            i -= 1
            j -= 1
        i += max(skip[ord(text[i])], 1)

    return -1

# Example usage
text = "ABAAABCD"
pattern = "ABC"
result = boyer_moore(text, pattern)

if result != -1:
    print("Pattern found at index:", result)
else:
    print("Pattern not found")
