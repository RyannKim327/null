// Function to compute the failure function
function computeFailureFunction(pattern):
    failure = new integer array with length equal to the length of pattern
    failure[0] = 0
    m = length of pattern
    j = 0

    for i from 1 to m-1:
        while j > 0 and pattern[i] != pattern[j]:
            j = failure[j-1]
        
        if pattern[i] == pattern[j]:
            j = j + 1
        
        failure[i] = j
    
    return failure

// Function to perform string matching using KMP algorithm
function KMP(text, pattern):
    n = length of text
    m = length of pattern
    failure = computeFailureFunction(pattern)
    
    j = 0
    for i from 0 to n-1:
        while j > 0 and text[i] != pattern[j]:
            j = failure[j-1]
        
        if text[i] == pattern[j]:
            if j == m-1:
                // Match found at position i - (m-1)
                return i - (m-1)
            j = j + 1
    
    return -1  // No match found
