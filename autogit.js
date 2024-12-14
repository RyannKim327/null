def find_majority_element(arr):
    counts = {}
    
    for num in arr:
        if num in counts:
            counts[num] += 1
        else:
            counts[num] = 1
    
    majority_element = None
    max_count = 0
    for key, value in counts.items():
        if value > len(arr) // 2:
            majority_element = key
            max_count = value
            break

    if majority_element is not None:
        return majority_element
    else:
        return None

# Example usage:
arr = [1, 2, 2, 2, 3, 2, 2, 1, 2]
result = find_majority_element(arr)
if result is not None:
    print(f"The majority element is: {result}")
else:
    print("No majority element found.")
