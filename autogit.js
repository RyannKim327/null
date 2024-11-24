def findMedianSortedArrays(nums1, nums2):
    merged_array = []
    i, j = 0, 0

    while i < len(nums1) and j < len(nums2):
        if nums1[i] < nums2[j]:
            merged_array.append(nums1[i])
            i += 1
        else:
            merged_array.append(nums2[j])
            j += 1

    merged_array += nums1[i:]
    merged_array += nums2[j:]

    total_length = len(merged_array)
    if total_length % 2 == 0:
        mid = total_length // 2
        return (merged_array[mid - 1] + merged_array[mid]) / 2
    else:
        return merged_array[total_length // 2]

# Example usage
nums1 = [1, 3]
nums2 = [2]
result = findMedianSortedArrays(nums1, nums2)
print(result)
