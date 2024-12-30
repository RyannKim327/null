def preprocess_bad_character_table(pattern):
    table = {}

    for i in range(len(pattern) - 1):
        table[pattern[i]] = len(pattern) - 1 - i

    return table

def boyer_moore_horspool(text, pattern):
    m = len(pattern)
    n = len(text)
    
    if m > n:
        return -1

    bc_table = preprocess_bad_character_table(pattern)

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
            i += bc_table.get(text[i], m)
            j = m - 1

    return -1

text = "exampletext"
pattern = "text"
result = boyer_moore_horspool(text, pattern)

if result != -1:
    print("Pattern found at index:", result)
else:
    print("Pattern not found")
