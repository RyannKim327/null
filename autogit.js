# Create an array
arr = [1, 2, 3, 4, 5]

# Element to be removed
element_to_remove = 3

# Find the index of the element to be removed
index_to_remove = arr.index(element_to_remove)

# Remove the element at the index
arr.pop(index_to_remove)

print(arr)  # Output: [1, 2, 4, 5]
