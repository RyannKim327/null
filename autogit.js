def majority_element(arr):
    counts = {}
    majority_threshold = len(arr) // 2

    for num in arr:
        counts[num] = counts.get(num, 0) + 1
        if counts[num] > majority_threshold:
            return num

    return None

# Example usage:
arr = [1, 2, 3, 2, 2, 2, 5, 4, 2]
majority_elem = majority_element(arr)

if majority_elem is not None:
    print(f"The majority element is: {majority_elem}")
else:
    print("There is no majority element in the array.")
