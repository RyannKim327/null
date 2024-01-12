function burrowsWheelerTransform(str) {
  function transform(str) {
    const transformedStrings = [];
    const len = str.length;
    let rotations = str;

    for (let i = 0; i < len; i++) {
      transformedStrings.push(rotations);
      rotations = rotations.substr(len - 1) + rotations.substr(0, len - 1);
    }

    transformedStrings.sort();
    const result = transformedStrings.map(str => str.charAt(len - 1)).join('');
    return result;
  }

  return transform(str);
}

// Example usage:
const inputString = 'banana';
const transformedString = burrowsWheelerTransform(inputString);
console.log(transformedString);
