class SkipListNode<T> {
  value: T | null;
  forwards: SkipListNode<T>[];

  constructor(value: T | null, level: number) {
    this.value = value;
    this.forwards = new Array(level + 1).fill(null);
  }
}

class SkipList<T> {
  private static readonly MAX_LEVEL = 16;
  private static readonly P = 0.5;

  private header: SkipListNode<T>;
  private level: number;

  constructor() {
    this.level = 0;
    this.header = new SkipListNode<T>(null, SkipList.MAX_LEVEL);
  }

  private randomLevel(): number {
    let lvl = 0;
    while (Math.random() < SkipList.P && lvl < SkipList.MAX_LEVEL) {
      lvl++;
    }
    return lvl;
  }

  public insert(value: T): void {
    const update: SkipListNode<T>[] = new Array(SkipList.MAX_LEVEL + 1);
    let current = this.header;

    // Start from the highest level and move forward while next node value < value
    for (let i = this.level; i >= 0; i--) {
      while (
        current.forwards[i] !== null &&
        current.forwards[i].value !== null &&
        current.forwards[i].value < value
      ) {
        current = current.forwards[i];
      }
      update[i] = current;
    }

    current = current.forwards[0];

    if (current === null || current.value !== value) {
      const newLevel = this.randomLevel();

      if (newLevel > this.level) {
        for (let i = this.level + 1; i <= newLevel; i++) {
          update[i] = this.header;
        }
        this.level = newLevel;
      }

      const newNode = new SkipListNode<T>(value, newLevel);

      for (let i = 0; i <= newLevel; i++) {
        newNode.forwards[i] = update[i].forwards[i];
        update[i].forwards[i] = newNode;
      }
    }
  }

  public search(value: T): boolean {
    let current = this.header;

    for (let i = this.level; i >= 0; i--) {
      while (
        current.forwards[i] !== null &&
        current.forwards[i].value !== null &&
        current.forwards[i].value < value
      ) {
        current = current.forwards[i];
      }
    }

    current = current.forwards[0];

    return current !== null && current.value === value;
  }

  public delete(value: T): boolean {
    const update: SkipListNode<T>[] = new Array(SkipList.MAX_LEVEL + 1);
    let current = this.header;

    for (let i = this.level; i >= 0; i--) {
      while (
        current.forwards[i] !== null &&
        current.forwards[i].value !== null &&
        current.forwards[i].value < value
      ) {
        current = current.forwards[i];
      }
      update[i] = current;
    }

    current = current.forwards[0];

    if (current !== null && current.value === value) {
      for (let i = 0; i <= this.level; i++) {
        if (update[i].forwards[i] !== current) {
          break;
        }
        update[i].forwards[i] = current.forwards[i];
      }

      while (this.level > 0 && this.header.forwards[this.level] === null) {
        this.level--;
      }
      return true;
    }

    return false;
  }

  // Optional: print for debugging
  public print(): void {
    for (let i = this.level; i >= 0; i--) {
      let current = this.header.forwards[i];
      let levelStr = `Level ${i}: `;
      while (current !== null) {
        levelStr += current.value + " -> ";
        current = current.forwards[i];
      }
      levelStr += "null";
      console.log(levelStr);
    }
  }
}
const list = new SkipList<number>();

list.insert(3);
list.insert(6);
list.insert(7);
list.insert(9);
list.insert(12);
list.insert(19);
list.insert(17);

console.log(list.search(9)); // true
console.log(list.search(5)); // false

list.delete(3);
list.print();
