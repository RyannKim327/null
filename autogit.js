function findMedianSortedArrays(nums1, nums2) {
    const mergedArray = mergeArrays(nums1, nums2);
    const len = mergedArray.length;
    
    if (len % 2 === 0) {
        const mid = len / 2;
        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
        const mid = Math.floor(len / 2);
        return mergedArray[mid];
    }
}

function mergeArrays(nums1, nums2) {
    let merged = [];
    let i = 0, j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            merged.push(nums1[i]);
            i++;
        } else {
            merged.push(nums2[j]);
            j++;
        }
    }

    while (i < nums1.length) {
        merged.push(nums1[i]);
        i++;
    }

    while (j < nums2.length) {
        merged.push(nums2[j]);
        j++;
    }

    return merged;
}

// Test the function
const nums1 = [1, 3];
const nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2.0
