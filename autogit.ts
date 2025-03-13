let array = [1, 2, 3, 4, 5];
// Remove the first occurrence of a specific value
array = array.filter(item => item !== 3);
let array = [1, 2, 3, 4, 5];
const indexToRemove = array.indexOf(3);
if (indexToRemove > -1) {
    array.splice(indexToRemove, 1);
}
let array = [1, 2, 3, 3, 4, 5];
array = array.filter(item => item !== 3);
let array = [1, 2, 3, 4, 5];
array = [...array.slice(0, indexToRemove), ...array.slice(indexToRemove + 1)];
let array = [1, 2, 3, 4, 5];
const elementsToRemove = [2, 4];
array = array.filter(item => !elementsToRemove.includes(item));
