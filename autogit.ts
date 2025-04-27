function triangleAreaBaseHeight(base: number, height: number): number {
  return (base * height) / 2;
}
const area = triangleAreaBaseHeight(10, 5); // 25
console.log(`Triangle area: ${area}`);
function triangleAreaHeron(a: number, b: number, c: number): number {
  const s = (a + b + c) / 2;
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}
const areaHeron = triangleAreaHeron(3, 4, 5); // 6
console.log(`Heron's triangle area: ${areaHeron}`);
