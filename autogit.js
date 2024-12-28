def partition(arr, low, high):
    i = (low - 1)         
    pivot = arr[high]    
  
    for j in range(low, high):
        if arr[j] <= pivot:
            i = i + 1
            arr[i], arr[j] = arr[j], arr[i]
  
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1
  
def quick_sort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
  
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)
  
arr = [10, 7, 8, 9, 1, 5]
n = len(arr)
quick_sort(arr, 0, n - 1)
print("Sorted array is:")
for i in range(n):
    print("%d" % arr[i])
