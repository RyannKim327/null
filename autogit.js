function fibonacciSearch(array, target) {
  const fibonacci = [0, 1];
  
  while (fibonacci[fibonacci.length - 1] < array.length) {
    fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
  }

  let offset = 0;
  let index = fibonacci.length - 1;
  let prev = 0;

  while (array.length > 0) {
    const current = offset + index;

    if (target === array[current]) {
      return current;
    } else if (target < array[current]) {
      offset = offset;
      index = prev;
      prev = index - prev;
    } else {
      offset = current + 1;
      index = prev;
      prev = index - prev;
    }
  }

  return -1;
}
