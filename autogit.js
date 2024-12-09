def preprocess_pattern(pattern):
    bad_char = {}
    for i in range(len(pattern)):
        bad_char[pattern[i]] = i
    return bad_char

def boyer_moore_search(text, pattern):
    m = len(pattern)
    n = len(text)
    bad_char = preprocess_pattern(pattern)
    shift = 0
    while shift <= n - m:
        j = m - 1
        while j >= 0 and pattern[j] == text[shift + j]:
            j -= 1
        if j < 0:
            print("Pattern found at index:", shift)
            shift += (m - bad_char.get(text[shift + m], -1))
        else:
            shift += max(1, j - bad_char.get(text[shift + j], -1))

# Example
text = "exampletextforsearchingboyermoorealgorithm"
pattern = "searching"
boyer_moore_search(text, pattern)
