def generate_bad_character_table(pattern):
    table = {}
    for i in range(len(pattern) - 1):
        table[pattern[i]] = len(pattern) - 1 - i
    return table

def boyer_moore_horspool(text, pattern):
    m = len(pattern)
    n = len(text)
    if m > n:
        return -1

    skip_table = generate_bad_character_table(pattern)

    i = 0
    while i <= n - m:
        j = m - 1
        while j >= 0 and pattern[j] == text[i + j]:
            j -= 1
        if j < 0:
            return i
        else:
            i += skip_table.get(text[i + m - 1], m)

    return -1

text = "ABAAABCD"
pattern = "ABC"
result = boyer_moore_horspool(text, pattern)
if result != -1:
    print(f"Pattern found at index {result}")
else:
    print("Pattern not found")
