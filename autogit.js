def find_majority_element(arr):
    majority_element = None
    count = 0

    for num in arr:
        if count == 0:
            majority_element = num
        if num == majority_element:
            count += 1
        else:
            count -= 1

    # Verify if majority_element is the majority element
    count = sum(1 for num in arr if num == majority_element)
    if count > len(arr) // 2:
        return majority_element
    else:
        return -1

# Example usage
arr = [3, 3, 4, 2, 4, 4, 2, 4, 4]
result = find_majority_element(arr)
if result != -1:
    print("Majority element: ", result)
else:
    print("No majority element found.")
