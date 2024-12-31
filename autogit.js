def majority_element(arr):
    counts = {}
    for num in arr:
        if num in counts:
            counts[num] += 1
        else:
            counts[num] = 1

    majority_count = len(arr) // 2 + 1
    for num, count in counts.items():
        if count >= majority_count:
            return num

    return None

# Example Usage
arr = [2, 2, 1, 1, 1, 2, 2]
result = majority_element(arr)
if result:
    print(f"The majority element is: {result}")
else:
    print("No majority element found.")
