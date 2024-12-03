def find_majority_element(arr):
    count = {}
    for num in arr:
        if num in count:
            count[num] += 1
        else:
            count[num] = 1

    majority_element = max(count, key=count.get)
    if count[majority_element] > len(arr) // 2:
        return majority_element
    else:
        return None

# Test the function
arr = [2, 2, 3, 4, 2, 2, 5, 2, 2]
result = find_majority_element(arr)
if result:
    print("Majority element is:", result)
else:
    print("No majority element found")
