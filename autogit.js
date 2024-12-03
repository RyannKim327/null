function longestCommonSubsequence(str1, str2):
    m = length(str1)
    n = length(str2)
    array = create a (m+1) x (n+1) array filled with zeros

    for i from 1 to m:
        for j from 1 to n:
            if str1[i-1] == str2[j-1]:
                array[i][j] = array[i-1][j-1] + 1
            else:
                array[i][j] = max(array[i-1][j], array[i][j-1])

    // Backtrack to find the longest common subsequence
    lcs = ""
    i = m
    j = n
    while i > 0 and j > 0:
        if str1[i-1] == str2[j-1]:
            lcs = str1[i-1] + lcs
            i = i - 1
            j = j - 1
        else:
            if array[i-1][j] > array[i][j-1]:
                i = i - 1
            else:
                j = j - 1

    return lcs
