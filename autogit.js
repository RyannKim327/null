let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
}

console.log(arr); // Output: [5, 4, 3, 2, 1]
