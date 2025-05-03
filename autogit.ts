function getRandomInt(min: number, max: number): number {
  const lower = Math.ceil(min);
  const upper = Math.floor(max);
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}
const randomNum = getRandomInt(5, 15);
console.log(randomNum); // could be any integer 5 through 15, inclusive
function getRandomFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}
