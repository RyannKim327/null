function buildShiftTable(pattern: string): Record<string, number> {
  const length = pattern.length;
  const table: Record<string, number> = {};

  // Default shift for characters not in the pattern
  const defaultShift = length;

  for (let i = 0; i < length - 1; i++) {
    // Set shift distance based on distance from end
    table[pattern[i]] = length - 1 - i;
  }

  // Characters not in pattern will default to length
  return new Proxy(table, {
    get: (target, prop: string) => (prop in target ? target[prop] : defaultShift),
  });
}

function boyerMooreHorspool(text: string, pattern: string): number {
  const n = text.length;
  const m = pattern.length;

  if (m === 0) return 0; // immediate match for empty pattern
  if (m > n) return -1;  // pattern longer than text means no match

  const shiftTable = buildShiftTable(pattern);

  let index = 0;
  while (index <= n - m) {
    let j = m - 1;
    while (j >= 0 && pattern[j] === text[index + j]) {
      j--;
    }
    if (j < 0) {
      // All characters matched
      return index;
    } else {
      // Shift by the amount defined in the shift table for the char after the current mismatch
      const mismatchedChar = text[index + m - 1];
      index += shiftTable[mismatchedChar];
    }
  }

  // No match found
  return -1;
}

// Example:
const text = "here is a simple example";
const pattern = "simple";

const result = boyerMooreHorspool(text, pattern);
console.log(result); // Prints 10 (start index of "simple")
