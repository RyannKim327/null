def findMedianSortedArrays(nums1, nums2):
    m, n = len(nums1), len(nums2)
    total_length = m + n

    if total_length % 2 == 1:
        return findKthElement(nums1, nums2, total_length // 2)
    else:
        return (findKthElement(nums1, nums2, total_length // 2 - 1) + findKthElement(nums1, nums2, total_length // 2)) / 2.0

def findKthElement(nums1, nums2, k):
    if not nums1:
        return nums2[k]
    if not nums2:
        return nums1[k]
        
    if k == 0:
        return min(nums1[0], nums2[0])

    mid1, mid2 = len(nums1) // 2, len(nums2) // 2
    if mid1 + mid2 < k:
        if nums1[mid1] > nums2[mid2]:
            return findKthElement(nums1, nums2[mid2 + 1:], k - mid2 - 1)
        else:
            return findKthElement(nums1[mid1 + 1:], nums2, k - mid1 - 1)
    else:
        if nums1[mid1] > nums2[mid2]:
            return findKthElement(nums1[:mid1], nums2, k)
        else:
            return findKthElement(nums1, nums2[:mid2], k)

# Example arrays
nums1 = [1, 3]
nums2 = [2]
print(findMedianSortedArrays(nums1, nums2))  # Output: 2.0
