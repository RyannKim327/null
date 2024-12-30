def boyer_moore_horspool(text, pattern):
    skip = {}
    for i in range(len(pattern) - 1):
        skip[pattern[i]] = len(pattern) - i - 1

    i = 0
    while i <= len(text) - len(pattern):
        j = len(pattern) - 1
        while j >= 0 and pattern[j] == text[i + j]:
            j -= 1
        if j == -1:
            return i
        else:
            if text[i + len(pattern) - 1] in skip:
                i += skip[text[i + len(pattern) - 1]]
            else:
                i += len(pattern)
    return -1

text = "exampletextwithpattern"
pattern = "pattern"
result = boyer_moore_horspool(text, pattern)

if result != -1:
    print("Pattern found at index:", result)
else:
    print("Pattern not found in text")
