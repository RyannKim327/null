def findMedianSortedArrays(nums1, nums2):
    merged = []
    i, j = 0, 0

    while i < len(nums1) and j < len(nums2):
        if nums1[i] < nums2[j]:
            merged.append(nums1[i])
            i += 1
        else:
            merged.append(nums2[j])
            j += 1

    merged += nums1[i:]
    merged += nums2[j:]

    n = len(merged)
    if n % 2 == 0:
        return (merged[n//2 - 1] + merged[n//2]) / 2
    else:
        return merged[n//2]

nums1 = [1, 3]
nums2 = [2]
print(findMedianSortedArrays(nums1, nums2))  # Output: 2.0
