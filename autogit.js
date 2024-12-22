function buildPrefixArray(pattern):
    n = length(pattern)
    prefixArray = createArray of size n
    
    len = 0
    i = 1
    prefixArray[0] = 0
    
    while i < n:
        if pattern[i] == pattern[len]:
            len = len + 1
            prefixArray[i] = len
            i = i + 1
        else:
            if len != 0:
                len = prefixArray[len - 1]
            else:
                prefixArray[i] = 0
                i = i + 1
    
    return prefixArray

function KMPSearch(text, pattern):
    n = length(text)
    m = length(pattern)
    prefixArray = buildPrefixArray(pattern)
    
    i = 0
    j = 0

    while i < n:
        if pattern[j] == text[i]:
            i = i + 1
            j = j + 1

        if j == m:
            print("Pattern found at index " + (i - j))
            j = prefixArray[j - 1]

        else if i < n and pattern[j] != text[i]:
            if j != 0:
                j = prefixArray[j - 1]
            else:
                i = i + 1
