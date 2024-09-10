def build_bad_character_table(pattern):
    bad_char_table = [-1] * 256
    for i in range(len(pattern)):
        bad_char_table[ord(pattern[i])] = i
    return bad_char_table

def boyer_moore_horspool(text, pattern):
    m = len(pattern)
    n = len(text)

    if m > n:
        return -1

    bad_char_table = build_bad_character_table(pattern)
    shift = 0

    while shift <= n - m:
        j = m - 1

        while j >= 0 and pattern[j] == text[shift + j]:
            j -= 1

        if j < 0:
            return shift

        shift += max(1, j - bad_char_table[ord(text[shift + j])])

    return -1

# Example usage
text = "ABAAABCD"
pattern = "ABC"
result = boyer_moore_horspool(text, pattern)
if result != -1:
    print("Pattern found at index:", result)
else:
    print("Pattern not found")
