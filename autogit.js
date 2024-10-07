FUNCTION findMaxSumSubarray(arr):
    max_so_far = arr[0]
    max_ending_here = arr[0]
    
    FOR i = 1 TO arr.length - 1:
        max_ending_here = MAX(arr[i], max_ending_here + arr[i])
        max_so_far = MAX(max_so_far, max_ending_here)
    
    RETURN max_so_far
