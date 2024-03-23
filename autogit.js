function findMedianSortedArrays(nums1, nums2) {
    const mergedArray = mergeArrays(nums1, nums2);

    const totalLength = mergedArray.length;
    const mid = Math.floor(totalLength / 2);

    if (totalLength % 2 === 0) {
        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
        return mergedArray[mid];
    }
}

function mergeArrays(nums1, nums2) {
    let i = 0;
    let j = 0;
    const merged = [];

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

const nums1 = [1, 3];
const nums2 = [2];

console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2.0
