def boyer_moore(text, pattern):
    m = len(pattern)
    n = len(text)
    if m == 0:
        return 0
    skip = []
    for _ in range(256):
        skip.append(m)
    for i in range(m - 1):
        skip[ord(pattern[i])] = m - 1 - i
    i = m - 1
    while i < n:
        j = m - 1
        k = i
        while j >= 0 and text[k] == pattern[j]:
            j -= 1
            k -= 1
        if j == -1:
            return k + 1
        i += skip[ord(text[i])]
    return -1

text = "AABAACAADAABAABA"
pattern = "AABA"
index = boyer_moore(text, pattern)
if index != -1:
    print("Pattern found at index:", index)
else:
    print("Pattern not found")
