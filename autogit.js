function randomSort(arr) {
  var currentIndex = arr.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle
  while (currentIndex !== 0) {

    // Pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // Swap it with the current element
    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }

  return arr;
}

// Usage example
var numbers = [1, 2, 3, 4, 5];
console.log("Before:", numbers);

var shuffledNumbers = randomSort(numbers);
console.log("After:", shuffledNumbers);
