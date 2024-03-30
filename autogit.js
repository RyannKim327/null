let array = [1, 2, 3, 4, 1, 2, 5, 6, 3];

let uniqueArray = array.filter((item, index) => {
    return array.indexOf(item) === index;
});

console.log(uniqueArray);
