def boyer_moore(text, pattern):
    n = len(text)
    m = len(pattern)

    # Preprocessing Phase
    bad_char = {}
    for i in range(m):
        bad_char[pattern[i]] = i

    shift = [m] * (m + 1)
    for i in range(m):
        shift[i] = m - i - 1
    for i in range(m - 1):
        shift[m - bad_char[pattern[i]] - 1] = m - i - 1

    # Search Phase
    i = m - 1
    while i < n:
        j = m - 1
        while j >= 0 and text[i] == pattern[j]:
            i -= 1
            j -= 1
        if j == -1:
            return i + 1

        i += max(shift[j + 1], j - bad_char.get(text[i], -1))

    return -1

# Test the algorithm
text = "AABAACAADAABAABA"
pattern = "AABA"
result = boyer_moore(text, pattern)
if result != -1:
    print(f"Pattern found at index {result}")
else:
    print("Pattern not found")
