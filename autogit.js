const uniqueArray = Array.from(new Set(myArray));
const uniqueArray = myArray.filter((item, index) => myArray.indexOf(item) === index);
const uniqueArray = myArray.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);
const uniqueArray = [];
myArray.forEach((item) => {
  if (uniqueArray.indexOf(item) === -1) {
    uniqueArray.push(item);
  }
});
