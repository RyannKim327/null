def find_second_largest(arr):
    sorted_arr = sorted(arr, reverse=True)
    return sorted_arr[1] if len(sorted_arr) > 1 else None

arr = [5, 2, 8, 10, 3]
second_largest = find_second_largest(arr)
print("The second largest element in the array is:", second_largest)
