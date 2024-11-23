def precompute_bad_character_table(pattern):
    table = {}
    for i in range(len(pattern) - 1):
        table[pattern[i]] = len(pattern) - 1 - i
    return table

def search(text, pattern):
    m = len(pattern)
    n = len(text)
    table = precompute_bad_character_table(pattern)

    i = 0
    while i <= n - m:
        j = m - 1
        while j >= 0 and pattern[j] == text[i + j]:
            j -= 1
        if j < 0:
            print("Pattern occurs at index", i)
            i += table.get(text[i + m - 1], m)
        else:
            i += table.get(text[i + m - 1], 1)

text = "abcbabcbabcabcbabcabc"
pattern = "abc"

search(text, pattern)
