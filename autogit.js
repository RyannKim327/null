def precompute_shifts(pattern):
    shifts = [len(pattern) for _ in range(256)]
    for i in range(len(pattern) - 1):
        shifts[ord(pattern[i])] = len(pattern) - 1 - i
    return shifts

def boyer_moore_horspool(text, pattern):
    m = len(pattern)
    n = len(text)
    if m == 0:
        return 0

    shifts = precompute_shifts(pattern)
    i = 0
    while i <= n - m:
        j = m - 1
        while j >= 0 and pattern[j] == text[i + j]:
            j -= 1
        if j < 0:
            return i
        i += shifts[ord(text[i + m - 1])]
    return -1

# Example usage
text = "the quick brown fox jumps over the lazy dog"
pattern = "fox"
result = boyer_moore_horspool(text, pattern)
if result != -1:
    print(f"Pattern found at index {result}")
else:
    print("Pattern not found")
