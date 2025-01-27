function randomInt(min: number, max: number): number {
  return min + Math.floor(Math.random() * (max - min + 1));
}

const randomNumber = randomInt(1, 10); // generates a random number between 1 and 10
function randomFloat(min: number, max: number): number {
  return min + Math.random() * (max - min);
}

const randomNumber = randomFloat(0, 10); // generates a random floating-point number between 0 and 10
import crypto from 'crypto';

function randomInt(min: number, max: number): number {
  const randomBuffer = crypto.randomBytes(4);
  const randomValue = parseInt(randomBuffer.toString('hex'), 16);
  return min + (randomValue % (max - min + 1));
}
