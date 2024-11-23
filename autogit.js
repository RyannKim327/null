def boyer_moore(text, pattern):
    def bad_character_table(pattern):
        table = {}
        for i in range(len(pattern) - 1):
            table[pattern[i]] = len(pattern) - 1 - i
        return table

    def good_suffix_table(pattern):
        table = [0] * (len(pattern) + 1)
        i = len(pattern)
        j = len(pattern) + 1
        table[i] = j

        while i > 0:
            while j <= len(pattern) and pattern[i - 1] != pattern[j - 1]:
                if table[j] == 0:
                    table[j] = j - i
                j = table[j]

            i -= 1
            j -= 1
            table[i] = j

        return table

    bad_char = bad_character_table(pattern)
    good_suffix = good_suffix_table(pattern)
    i = 0

    while i <= len(text) - len(pattern):
        j = len(pattern) - 1

        while j >= 0 and pattern[j] == text[i + j]:
            j -= 1

        if j < 0:
            print("Pattern found at index", i)
            i += good_suffix[0]
        else:
            if text[i + j] in bad_char:
                i += max(good_suffix[j+1], j - bad_char[text[i + j]])
            else:
                i += good_suffix[j]

    return -1

# Usage
text = "ABAAABCD"
pattern = "ABC"
boyer_moore(text, pattern)
