def kmp_search(text, pattern):
    L = len(pattern)
    table = [0] * L
    j = 0

    compute_prefix_table(pattern, L, table)

    i = 0
    while i < len(text):
        if pattern[j] == text[i]:
            i += 1
            j += 1

            if j == L:
                print("Pattern found at index " + str(i - j))
                j = table[j - 1]
        else:
            if j != 0:
                j = table[j - 1]
            else:
                i += 1

def compute_prefix_table(pattern, L, table):
    length = 0
    table[0] = 0
    i = 1

    while i < L:
        if pattern[length] == pattern[i]:
            length += 1
            table[i] = length
            i += 1
        else:
            if length != 0:
                length = table[length - 1]
            else:
                table[i] = 0
                i += 1

text = "ABABDABACDABABCABAB"
pattern = "ABABCABAB"
kmp_search(text, pattern)
