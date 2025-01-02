function computeLPSArray(pattern):
    length = 0
    lps[0] = 0
    i = 1
    while i < length(pattern):
        if pattern[i] is equal to pattern[length]:
            length = length + 1
            lps[i] = length
            i = i + 1
        else:
            if length is not equal to 0:
                length = lps[length - 1]
            else:
                lps[i] = 0
                i = i + 1

function KMPSearch(text, pattern):
    n = length(text)
    m = length(pattern)
    lps = computeLPSArray(pattern)
    i = 0
    j = 0
    while i < n:
        if text[i] is equal to pattern[j]:
            i = i + 1
            j = j + 1
        if j is equal to m:
            print "Pattern found at index " + str(i - j)
            j = lps[j - 1]
        else if i < n and text[i] is not equal to pattern[j]:
            if j is not equal to 0:
                j = lps[j - 1]
            else:
                i = i + 1
