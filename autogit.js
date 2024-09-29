def reverse_array(arr):
    start_index = 0
    end_index = len(arr) - 1

    while start_index < end_index:
        arr[start_index], arr[end_index] = arr[end_index], arr[start_index]
        start_index += 1
        end_index -= 1

# Example usage
arr = [1, 2, 3, 4, 5]
reverse_array(arr)
print(arr)  # Output: [5, 4, 3, 2, 1]
