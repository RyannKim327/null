def counting_sort(arr):
    max_val = max(arr)
    counts = [0] * (max_val + 1)

    # Count occurrences of each element
    for num in arr:
        counts[num] += 1

    # Calculate cumulative counts
    for i in range(1, len(counts)):
        counts[i] += counts[i - 1]

    output = [0] * len(arr)

    # Build the output array
    for num in arr:
        output[counts[num] - 1] = num
        counts[num] -= 1

    return output

# Example usage
arr = [4, 2, 2, 8, 3, 3, 1]
sorted_arr = counting_sort(arr)
print(sorted_arr)
