function countCharOccurrence(str: string, char: string): number {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}
function countCharOccurrence(str: string, char: string): number {
  return str.split(char).length - 1;
}
function countCharOccurrence(str: string, char: string): number {
  return (str.match(new RegExp(char, 'g')) || []).length;
}
function countCharOccurrence(str: string, char: string): number {
  return str.replace(new RegExp(char, 'g'), "").length - str.length;
}
