const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7];
const commonElements = [];

for (let i = 0; i < array1.length; i++) {
  if (array2.includes(array1[i])) {
    commonElements.push(array1[i]);
  }
}

console.log(commonElements);
