def compute_prefix(pattern):
    m = len(pattern)
    prefix = [0] * m
    prefix[0] = 0
    k = 0
    for q in range(1, m):
        while k > 0 and pattern[k] != pattern[q]:
            k = prefix[k - 1]
        if pattern[k] == pattern[q]:
            k += 1
        prefix[q] = k
    return prefix
def kmp_search(text, pattern):
    n = len(text)
    m = len(pattern)
    prefix = compute_prefix(pattern)
    q = 0
    matches = []
    for i in range(n):
        while q > 0 and pattern[q] != text[i]:
            q = prefix[q - 1]
        if pattern[q] == text[i]:
            q += 1
        if q == m:
            matches.append(i - m + 1)
            q = prefix[q - 1]
    return matches
