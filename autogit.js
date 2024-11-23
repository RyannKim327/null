def boyer_moore_horspool(text, pattern):
    m = len(pattern)
    n = len(text)
    if m == 0:
        return -1

    skip = [m] * 256
    for i in range(m - 1):
        skip[ord(pattern[i])] = m - i - 1

    j = 0
    while j <= n - m:
        i = m - 1
        while i >= 0 and pattern[i] == text[i + j]:
            i -= 1
        if i == -1:
            return j
        j += skip[ord(text[j + m - 1])]

    return -1

# Test the implementation
text = "exampletextforexample"
pattern = "example"
result = boyer_moore_horspool(text, pattern)
if result != -1:
    print("Pattern found at index:", result)
else:
    print("Pattern not found")
