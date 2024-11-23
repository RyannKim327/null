# Original array with duplicate elements
original_array = [1, 2, 2, 3, 4, 4, 5]

# Create a new empty array to hold unique elements
unique_array = []

# Iterate through each element in the original array
for element in original_array:
    # Check if the element is not already in the new array
    if element not in unique_array:
        unique_array.append(element)

# Print the unique elements
print(unique_array)
[1, 2, 3, 4, 5]
