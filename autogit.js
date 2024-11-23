def boyer_moore(text, pattern):
    n = len(text)
    m = len(pattern)
    if m == 0:
        return 0
    
    bad_character = {}
    for i in range(m-1):
        bad_character[pattern[i]] = m - 1 - i

    def suffixes(pattern):
        n = len(pattern)
        suffix = [0] * n
        k = n - 1
        f = k
        for i in range(n-2, -1, -1):
            if i > f and suffix[n - k + i - 1] < i - f:
                suffix[i] = suffix[n - k + i - 1]
            else:
                if i < f:
                    f = i
                k = i
                while f >= 0 and pattern[f] == pattern[n - k + f - 1]:
                    f -= 1
                suffix[i] = k - f
        return suffix

    good_suffix = suffixes(pattern)
    
    i = 0
    while i <= n - m:
        j = m - 1
        while j >= 0 and pattern[j] == text[i + j]:
            j -= 1
        if j < 0:
            return i
        if text[i + j] in bad_character:
            i += max(good_suffix[j], bad_character[text[i+j]])
        else:
            i += max(good_suffix[j], j+1)
            
    return -1

text = "ABAAABCD"
pattern = "ABC"
index = boyer_moore(text, pattern)
if index != -1:
    print("Pattern found at index:", index)
else:
    print("Pattern not found")
