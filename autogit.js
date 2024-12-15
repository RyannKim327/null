def boyer_moore(text, pattern):
    def pre_process(pattern):
        m = len(pattern)
        bad_char = [-1] * 256  # Initialize bad character array
        for i in range(m):
            bad_char[ord(pattern[i])] = i
        return bad_char

    def good_suffix_table(pattern):
        m = len(pattern)
        table = [0] * m
        table[m - 1] = m
        length = suffix_length(pattern)

        for i in range(m - 2, -1, -1):
            if length[i] == i + 1:
                table[m - 1] = i + 1

        for i in range(m - 1):
            table[m - length[i] - 1] = m - 1 - i

        return table

    def suffix_length(pattern):
        m = len(pattern)
        length = [0] * m
        length[m - 1] = m
        g = m - 1
        f = 0

        for i in range(m - 2, -1, -1):
            if i > g and length[i + m - 1 - f] < i - g:
                length[i] = length[i + m - 1 - f]
            else:
                if i < g:
                    g = i
                f = i
                while g >= 0 and pattern[g] == pattern[g + m - 1 - f]:
                    g -= 1
                length[i] = f - g

        return length

    n = len(text)
    m = len(pattern)
    bc_table = pre_process(pattern)
    gs_table = good_suffix_table(pattern)

    i = 0
    while i <= n - m:
        j = m - 1
        while j >= 0 and pattern[j] == text[i + j]:
            j -= 1
        if j < 0:
            print("Pattern found at index", i)
            i += gs_table[0]
        else:
            bc_shift = j - bc_table[ord(text[i + j])]
            gs_shift = gs_table[j]
            i += max(bc_shift, gs_shift)

text = "ABAAABCD"
pattern = "ABC"
boyer_moore(text, pattern)
