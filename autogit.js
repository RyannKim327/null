def longest_increasing_subsequence(arr):
    n = len(arr)
    lis = [1] * n

    for i in range(1, n):
        for j in range(i):
            if arr[i] > arr[j] and lis[i] < lis[j] + 1:
                lis[i] = lis[j] + 1

    max_length = 0
    for length in lis:
        max_length = max(max_length, length)

    return max_length

# Example usage
arr = [10, 22, 9, 33, 21, 50, 41, 60, 80]
print("Length of longest increasing subsequence:", longest_increasing_subsequence(arr))
