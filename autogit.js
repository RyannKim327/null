def bad_character_table(pattern):
    table = {}
    for i in range(len(pattern)-1):
        table[pattern[i]] = len(pattern) - 1 - i
    return table

def good_suffix_table(pattern):
    table = [0] * (len(pattern) + 1)
    last_prefix_position = len(pattern)
    
    for i in reversed(range(len(pattern) + 1)):
        if is_prefix(pattern, i):
            last_prefix_position = i
        table[len(pattern) - i] = last_prefix_position - i + len(pattern)
    
    for i in range(len(pattern) - 1):
        suffix_len = longest_suffix_length(pattern, i)
        table[suffix_len] = len(pattern) - 1 - i + suffix_len
        
    return table

def is_prefix(pattern, i):
    j = 0
    while i < len(pattern):
        if pattern[i] != pattern[j]:
            return False
        i += 1
        j += 1
    return True

def longest_suffix_length(pattern, i):
    length = 0
    j = i
    k = len(pattern) - 1
    while j >= 0 and pattern[j] == pattern[k]:
        length += 1
        j -= 1
        k -= 1
    return length

def boyer_moore_search(text, pattern):
    bad_char = bad_character_table(pattern)
    good_suffix = good_suffix_table(pattern)
    n = len(text)
    m = len(pattern)
    i = 0
    
    while i <= n - m:
        j = m - 1
        while j >= 0 and pattern[j] == text[i + j]:
            j -= 1
        if j < 0:
            print("Pattern occurs at index", i)
            i += good_suffix[0]
        else:
            shift = max(good_suffix[j + 1], j - bad_char.get(text[i + j], -1))
            i += shift

# Test the algorithm
text = "ABAAABCD"
pattern = "ABC"
boyer_moore_search(text, pattern)
