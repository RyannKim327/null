def bubble_sort(arr):
    n = len(arr)

    for i in range(n):
        # Flag to check if any swapping is done in this iteration
        swapped = False

        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]  # Swap the elements
                swapped = True

        # If no swapping is done in this iteration, the array is already sorted
        if not swapped:
            break

    return arr

# Test the bubble sort function
arr = [64, 34, 25, 12, 22, 11, 90]
sorted_arr = bubble_sort(arr)
print("Sorted array is:", sorted_arr)
