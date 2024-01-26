function getGapSequence(length) {
  const sequence = [1];
  let gap = 1;
  while (gap < length / 3) {
    gap = 3 * gap + 1;
    sequence.unshift(gap);
  }
  return sequence;
}
function shellSort(arr) {
  const length = arr.length;
  const gapSequence = getGapSequence(length);

  for (const gap of gapSequence) {
    for (let i = gap; i < length; i++) {
      const temp = arr[i];
      let j;

      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        arr[j] = arr[j - gap];
      }
      arr[j] = temp;
    }
  }

  return arr;
}

function getGapSequence(length) {
  const sequence = [1];
  let gap = 1;
  while (gap < length / 3) {
    gap = 3 * gap + 1;
    sequence.unshift(gap);
  }
  return sequence;
}
const array = [9, 5, 7, 2, 1, 0, 6, 3, 8, 4];
const sortedArray = shellSort(array);
console.log(sortedArray);
