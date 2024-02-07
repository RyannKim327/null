function findMedianSortedArrays(nums1, nums2) {
    // Merge the two arrays
    const merged = merge(nums1, nums2);
    
    // Calculate the total length of the merged array
    const totalLength = merged.length;
    
    // Check if the total length is even or odd
    if (totalLength % 2 === 0) {
        // If it's even, return the average of the middle two elements
        const midIndex1 = totalLength / 2 - 1;
        const midIndex2 = totalLength / 2;
        return (merged[midIndex1] + merged[midIndex2]) / 2;
    } else {
        // If it's odd, return the middle element
        const midIndex = Math.floor(totalLength / 2);
        return merged[midIndex];
    }
}

// Helper function to merge two arrays
function merge(arr1, arr2) {
    const merged = [];
    let i = 0, j = 0;
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }
    
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }
    
    return merged;
}

// Example usage
const nums1 = [1, 3, 5];
const nums2 = [2, 4, 6];
const median = findMedianSortedArrays(nums1, nums2);
console.log(median); // Output: 3.5
