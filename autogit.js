original_array = [1, 2, 2, 3, 4, 4, 5]
unique_array = []

for element in original_array:
    if element not in unique_array:
        unique_array.append(element)

print(unique_array)
[1, 2, 3, 4, 5]
