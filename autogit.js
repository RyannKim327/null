def findMedianSortedArrays(nums1, nums2):
    merged_array = sorted(nums1 + nums2)
    n = len(merged_array)
    
    if n % 2 == 0:
        return (merged_array[n // 2 - 1] + merged_array[n // 2]) / 2
    else:
        return merged_array[n // 2]

# Example
nums1 = [1, 3]
nums2 = [2]
print(findMedianSortedArrays(nums1, nums2))  # Output: 2.0
