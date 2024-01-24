function interpolationSearch(array, target) {
  // ...
}
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    // ...
  }
    let pos = Math.floor(start + (((target - array[start]) * (end - start)) / (array[end] - array[start]))));
    if (array[pos] === target) {
      return pos;
    }
    if (array[pos] > target) {
      end = pos - 1;
    }
    if (array[pos] < target) {
      start = pos + 1;
    }
  return -1;
function interpolationSearch(array, target) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let pos = Math.floor(
      start + (((target - array[start]) * (end - start)) / (array[end] - array[start]))
    );

    if (array[pos] === target) {
      return pos;
    }

    if (array[pos] > target) {
      end = pos - 1;
    }

    if (array[pos] < target) {
      start = pos + 1;
    }
  }

  return -1;
}
