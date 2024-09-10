def findMedianSortedArrays(nums1, nums2):
    m = len(nums1)
    n = len(nums2)
    nums = sorted(nums1 + nums2)

    if (m + n) % 2 == 0:
        return (nums[(m + n) // 2 - 1] + nums[(m + n) // 2]) / 2
    else:
        return nums[(m + n) // 2]

# Test the function
nums1 = [1, 3]
nums2 = [2]
print(findMedianSortedArrays(nums1, nums2))  # Output: 2.0
