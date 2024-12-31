// Define two arrays
array1 = [1, 2, 3, 4, 5]
array2 = [3, 4, 5, 6, 7]

// Initialize an empty list to hold common elements
common_elements = []

// Loop through array1 and check for common elements with array2
for element in array1:
    if element in array2:
        common_elements.append(element)

// Print the common elements
print("Common elements:", common_elements)
