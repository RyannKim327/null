def boyer_moore(text, pattern):
    m = len(pattern)
    n = len(text)
    if m == 0:
        return -1

    # Construct bad character heuristic table
    bad_char = {}
    for i in range(m-1):
        bad_char[pattern[i]] = i

    # Boyer-Moore algorithm
    i = 0
    while i <= n - m:
        j = m - 1

        while j >= 0 and pattern[j] == text[i+j]:
            j -= 1

        if j < 0:
            return i

        # Shift based on bad character heuristic table
        if text[i+j] in bad_char:
            i += max(1, j - bad_char[text[i+j]])
        else:
            i += j + 1

    return -1

# Usage
text = "ABAAABCD"
pattern = "ABC"
result = boyer_moore(text, pattern)

if result != -1:
    print("Pattern found at index:", result)
else:
    print("Pattern not found")
