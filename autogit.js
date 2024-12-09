def findMedianSortedArrays(nums1, nums2):
    # Merge the two sorted arrays
    merged = sorted(nums1 + nums2)
    
    # Calculate the total number of elements
    total_elements = len(merged)
    
    # Calculate the index of the middle element
    mid = total_elements // 2
    
    if total_elements % 2 == 1:
        # Odd number of elements
        return merged[mid]
    else:
        # Even number of elements
        return (merged[mid - 1] + merged[mid]) / 2

# Example usage
nums1 = [1, 3]
nums2 = [2]
print(findMedianSortedArrays(nums1, nums2))  # Output: 2.0
