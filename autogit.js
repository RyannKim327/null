def build_bad_char_table(pattern):
    table = {}
    for i in range(len(pattern)):
        table[pattern[i]] = len(pattern) - i - 1
    return table

def build_good_suffix_table(pattern):
    table = [0] * len(pattern)
    i = len(pattern)
    j = len(pattern) + 1
    k = j
    while i > 0:
        while j <= len(pattern) and pattern[i - 1] != pattern[j - 1]:
            if table[j - 1] == 0:
                table[j - 1] = j - i
            j = table[j - 1] + j
        i -= 1
        j = k - 1
        k = j
    j = 0
    for i in range(len(pattern) - 1, -1, -1):
        if table[i] == 0:
            table[i] = j
        if i == j:
            j = j + 1
    return table

def boyer_moore(text, pattern):
    bad_char_table = build_bad_char_table(pattern)
    good_suffix_table = build_good_suffix_table(pattern)
    i = len(pattern) - 1
    while i < len(text):
        j = len(pattern) - 1
        while j >= 0 and text[i] == pattern[j]:
            i -= 1
            j -= 1
        if j == -1:
            return i + 1
        bc = bad_char_table.get(text[i], len(pattern))
        gs = good_suffix_table[j]

        i += max(bc, gs)
        
    return -1

# Test the implementation
text = "THIS IS A TEST TEXT"
pattern = "TEST"
result = boyer_moore(text, pattern)
if result != -1:
    print(f"Pattern found at index {result}")
else:
    print("Pattern not found in the text")
