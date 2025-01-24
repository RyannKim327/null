interface BadCharacterTable {
  [char: string]: number;
}

class BoyerMoore {
  private badCharacterTable: BadCharacterTable;

  constructor(private pattern: string) {
    this.badCharacterTable = this.buildBadCharacterTable(pattern);
  }

  public search(text: string): number[] {
    const patternLength = this.pattern.length;
    const textLength = text.length;
    const occurrences: number[] = [];

    let i = 0;
    while (i <= textLength - patternLength) {
      let j = patternLength - 1;
      while (j >= 0 && this.pattern[j] === text[i + j]) {
        j--;
      }
      if (j < 0) {
        occurrences.push(i);
        i += patternLength - this.badCharacterTable[text[i + patternLength - 1]];
      } else {
        i += Math.max(1, j - this.badCharacterTable[text[i + j]]);
      }
    }

    return occurrences;
  }

  private buildBadCharacterTable(pattern: string): BadCharacterTable {
    const table: BadCharacterTable = {};
    for (let i = 0; i < pattern.length; i++) {
      table[pattern[i]] = pattern.length - i - 1;
    }
    return table;
  }
}

const boyerMoore = new BoyerMoore("abc");
const text = "abdabcabcabcabcdabc";
const occurrences = boyerMoore.search(text);
console.log(occurrences); // [3, 6, 9, 12]
