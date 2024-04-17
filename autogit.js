function findMedianSortedArrays(nums1, nums2) {
    const mergedArray = mergeArrays(nums1, nums2);

    const length = mergedArray.length;
    const middleIndex = Math.floor(length / 2);

    if (length % 2 === 0) {
        return (mergedArray[middleIndex - 1] + mergedArray[middleIndex]) / 2;
    } else {
        return mergedArray[middleIndex];
    }
}

function mergeArrays(nums1, nums2) {
    const mergedArray = [];
    let i = 0;
    let j = 0;

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
const nums1 = [1, 3];
const nums2 = [2, 4];

const median = findMedianSortedArrays(nums1, nums2);
console.log(median); // Output: 2.5
