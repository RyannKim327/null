const array = [1, 2, 3, 4, 5];
const elementToRemove = 3;

const index = array.indexOf(elementToRemove);
if (index > -1) {
  array.splice(index, 1);
}
const array = [1, 2, 3, 4, 5];
const elementToRemove = 3;

const newArray = array.filter((element) => element !== elementToRemove);
