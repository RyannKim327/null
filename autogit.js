for i = 0 to len(text) - len(pattern)
    if text[i:i+len(pattern)] == pattern
        return i  // match found at index i
return -1  // no match found
hash_pattern = hash(pattern)
for i = 0 to len(text) - len(pattern)
    hash_text = hash(text[i:i+len(pattern)])
    if hash_text == hash_pattern
        if text[i:i+len(pattern)] == pattern
            return i  // match found at index i
return -1  // no match found
lps = [0] * len(pattern)  // longest prefix suffix table
j = 0
for i = 1 to len(pattern) - 1
    while j > 0 and pattern[i] != pattern[j]
        j = lps[j - 1]
    if pattern[i] == pattern[j]
        lps[i] = j + 1
        j += 1
i = j = 0
while i < len(text)
    if text[i] == pattern[j]
        i += 1
        j += 1
        if j == len(pattern)
            return i - len(pattern)  // match found
    else
        if j > 0
            j = lps[j - 1]
        else
            i += 1
return -1  // no match found
bad_char = [-1] * 256  // bad character table
for i = 0 to len(pattern) - 1
    bad_char[pattern[i]] = i
i = len(pattern) - 1
while i < len(text)
    j = len(pattern) - 1
    while text[i] == pattern[j]
        i -= 1
        j -= 1
        if j == -1
            return i + 1  // match found
    i = i + len(pattern) - j - 1 - bad_char[text[i + len(pattern) - j - 1]]
return -1  // no match found
