function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
var randomNumber = getRandomNumber(1, 10);
console.log(randomNumber);
