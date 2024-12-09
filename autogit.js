def boyer_moore_horspool(text, pattern):
    m = len(pattern)
    n = len(text)
    if m > n:
        return -1
    skip = []
    for k in range(256):
        skip.append(m)
    for k in range(m - 1):
        skip[ord(pattern[k])] = m - k - 1
    k = m - 1
    while k < n:
        j = m - 1
        i = k
        while j >= 0 and text[i] == pattern[j]:
            j -= 1
            i -= 1
        if j == -1:
            return i + 1
        k += skip[ord(text[k])]
    return -1

text = "hello world, how are you?"
pattern = "world"
result = boyer_moore_horspool(text, pattern)
if result != -1:
    print("Pattern found at index", result)
else:
    print("Pattern not found")
