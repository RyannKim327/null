def compute_lps_array(pattern):
    lps = [0] * len(pattern)
    j = 0
    i = 1
    
    while i < len(pattern):
        if pattern[i] == pattern[j]:
            j += 1
            lps[i] = j
            i += 1
        else:
            if j != 0:
                j = lps[j-1]
            else:
                lps[i] = 0
                i += 1
    
    return lps

def kmp_search(text, pattern):
    n = len(text)
    m = len(pattern)
    
    lps = compute_lps_array(pattern)
    
    i = 0
    j = 0
    positions = []
    
    while i < n:
        if text[i] == pattern[j]:
            i += 1
            j += 1
            
            if j == m:
                positions.append(i - j)
                j = lps[j - 1]
        else:
            if j != 0:
                j = lps[j - 1]
            else:
                i += 1

    return positions

# Example
text = "ABABDABACDABABCABAB"
pattern = "ABABCABAB"
positions = kmp_search(text, pattern)
print("Pattern found at positions:", positions)
