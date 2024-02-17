function findMedianSortedArrays(nums1, nums2) {
    let mergedArray = mergeArrays(nums1, nums2);
    let length = mergedArray.length;
    
    if (length % 2 === 0) {
        let middleIndex = length / 2;
        return (mergedArray[middleIndex - 1] + mergedArray[middleIndex]) / 2;
    } else {
        let middleIndex = Math.floor(length / 2);
        return mergedArray[middleIndex];
    }
}

function mergeArrays(nums1, nums2) {
    let mergedArray = [];
    let i = 0, j = 0;
    
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            mergedArray.push(nums1[i]);
            i++;
        } else {
            mergedArray.push(nums2[j]);
            j++;
        }
    }
    
    while (i < nums1.length) {
        mergedArray.push(nums1[i]);
        i++;
    }
    
    while (j < nums2.length) {
        mergedArray.push(nums2[j]);
        j++;
    }
    
    return mergedArray;
}

// Test the function with sample inputs
const nums1 = [1, 3];
const nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2

const nums3 = [1, 2];
const nums4 = [3, 4];
console.log(findMedianSortedArrays(nums3, nums4)); // Output: 2.5
