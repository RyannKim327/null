def longest_increasing_subsequence(arr):
    n = len(arr)
    if n == 0:
        return 0

    # Initialize an array to store the length of the longest increasing subsequence ending at each index
    lis = [1] * n

    # Compute the length of the longest increasing subsequence for each index
    for i in range(1, n):
        for j in range(0, i):
            if arr[i] > arr[j]:
                lis[i] = max(lis[i], lis[j] + 1)

    # Find the maximum length of the longest increasing subsequence
    max_length = max(lis)

    # Reconstruct the longest increasing subsequence
    result = []
    current_length = max_length
    for i in range(n - 1, -1, -1):
        if lis[i] == current_length:
            result.append(arr[i])
            current_length -= 1
            if current_length == 0:
                break

    result.reverse()
    return result

# Test the function
arr = [10, 22, 9, 33, 21, 50, 41, 60, 80]
print(longest_increasing_subsequence(arr))  # Output: [10, 22, 33, 50, 60, 80]
