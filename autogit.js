def longest_increasing_subsequence(arr):
    n = len(arr)
    lis = [1]*n

    for i in range(1, n):
        for j in range(0, i):
            if arr[i] > arr[j]:
                lis[i] = max(lis[i], lis[j] + 1)

    max_length = max(lis)
    subsequence = []
    idx = lis.index(max_length)
    subsequence.append(arr[idx])
    max_length -= 1

    for i in range(idx-1, -1, -1):
        if lis[i] == max_length and arr[i] < subsequence[-1]:
            subsequence.append(arr[i])
            max_length -= 1

    subsequence.reverse()
    return subsequence

# Example usage
arr = [10, 22, 9, 33, 21, 50, 41, 60, 80]
result = longest_increasing_subsequence(arr)
print("Longest increasing subsequence:", result)
