let array = [1, 2, 3, 4, 5];
let element = 3;  // element to remove

let index = array.indexOf(element);
if (index !== -1) {
  array.splice(index, 1);
}

console.log(array);  // [1, 2, 4, 5]
