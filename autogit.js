def findMedianSortedArrays(nums1, nums2):
    new_array = sorted(nums1 + nums2)
    length = len(new_array)
    if length % 2 == 0:
        median = (new_array[length // 2 - 1] + new_array[length // 2]) / 2
    else:
        median = new_array[length // 2]
    return median

# Example
nums1 = [1, 3]
nums2 = [2]
print(findMedianSortedArrays(nums1, nums2))  # Output: 2.0
