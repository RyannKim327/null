def bad_character_table(pattern):
    table = {}
    for i in range(len(pattern)-1):
        table[pattern[i]] = i
    return table

def good_suffix_table(pattern):
    table = [-1] * len(pattern)
    for i in range(len(pattern) - 1):
        j = i
        while j >= 0 and pattern[j:] == pattern[len(pattern) - 1 - i:len(pattern) - 1]:
            table[len(pattern) - 1 - i] = j
            j -= 1
    return table

def boyer_moore(text, pattern):
    bad_char = bad_character_table(pattern)
    good_suff = good_suffix_table(pattern)
    n, m = len(text), len(pattern)
    i = 0
    while i <= n - m:
        j = m - 1
        while j >= 0 and pattern[j] == text[i + j]:
            j -= 1
        if j < 0:
            print("Pattern found at index", i)
            i += (m - good_suff[0] if i + m < n else 1)
        else:
            char_offset = j - bad_char.get(text[i + j], -1)
            i += max(1, char_offset, m - good_suff[j])

text = "AABAACAADAABAAABAA"
pattern = "AABA"
boyer_moore(text, pattern)
