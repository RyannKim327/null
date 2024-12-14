def bubble_sort(arr):
    n = len(arr)

    for i in range(n):
        # Flag to check if any swapping is done in this pass
        swapped = False

        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                # Swap elements
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = True

        # If no two elements were swapped in this pass, array is sorted
        if not swapped:
            break

    return arr

# Test the bubble sort algorithm
arr = [64, 34, 25, 12, 22, 11, 90]
sorted_arr = bubble_sort(arr)
print("Sorted array:", sorted_arr)
