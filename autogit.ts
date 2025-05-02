class SkipListNode<T> {
  value: T | null;
  forwards: Array<SkipListNode<T> | null>;

  constructor(level: number, value: T | null = null) {
    this.value = value;
    this.forwards = new Array(level).fill(null);
  }
}

export class SkipList<T> {
  private readonly MAX_LEVEL: number;
  private readonly P: number;

  private level: number;
  private header: SkipListNode<T>;
  private size: number;

  constructor(maxLevel = 16, p = 0.5) {
    this.MAX_LEVEL = maxLevel;
    this.P = p;
    this.level = 0;
    this.header = new SkipListNode<T>(this.MAX_LEVEL);
    this.size = 0;
  }

  private randomLevel(): number {
    let lvl = 1;
    while (Math.random() < this.P && lvl < this.MAX_LEVEL) {
      lvl++;
    }
    return lvl;
  }

  // Search for a value, returns boolean if found
  contains(value: T, compareFn: (a: T, b: T) => number): boolean {
    let current = this.header;

    for (let i = this.level - 1; i >= 0; i--) {
      while (
        current.forwards[i] !== null &&
        compareFn(current.forwards[i]!.value!, value) < 0
      ) {
        current = current.forwards[i]!;
      }
    }

    current = current.forwards[0]!;

    return current !== null && compareFn(current.value!, value) === 0;
  }

  insert(value: T, compareFn: (a: T, b: T) => number): void {
    const update: Array<SkipListNode<T> | null> = new Array(this.MAX_LEVEL);
    let current = this.header;

    for (let i = this.level - 1; i >= 0; i--) {
      while (
        current.forwards[i] !== null &&
        compareFn(current.forwards[i]!.value!, value) < 0
      ) {
        current = current.forwards[i]!;
      }
      update[i] = current;
    }

    current = current.forwards[0]!;

    if (current === null || compareFn(current.value!, value) !== 0) {
      const newLevel = this.randomLevel();

      if (newLevel > this.level) {
        for (let i = this.level; i < newLevel; i++) {
          update[i] = this.header;
        }
        this.level = newLevel;
      }

      const newNode = new SkipListNode<T>(newLevel, value);

      for (let i = 0; i < newLevel; i++) {
        newNode.forwards[i] = update[i]!.forwards[i];
        update[i]!.forwards[i] = newNode;
      }
      this.size++;
    } else {
      // Value already exists; do nothing or update as needed
    }
  }

  delete(value: T, compareFn: (a: T, b: T) => number): boolean {
    const update: Array<SkipListNode<T> | null> = new Array(this.MAX_LEVEL);
    let current = this.header;

    for (let i = this.level - 1; i >= 0; i--) {
      while (
        current.forwards[i] !== null &&
        compareFn(current.forwards[i]!.value!, value) < 0
      ) {
        current = current.forwards[i]!;
      }
      update[i] = current;
    }

    current = current.forwards[0]!;

    if (current !== null && compareFn(current.value!, value) === 0) {
      for (let i = 0; i < this.level; i++) {
        if (update[i]!.forwards[i] !== current) break;
        update[i]!.forwards[i] = current.forwards[i];
      }

      while (this.level > 0 && this.header.forwards[this.level - 1] === null) {
        this.level--;
      }
      this.size--;
      return true;
    }
    return false;
  }

  getSize(): number {
    return this.size;
  }

  // For testing/debugging: print list levels
  printList(): void {
    for (let i = this.level - 1; i >= 0; i--) {
      let line = `Level ${i}: `;
      let node = this.header.forwards[i];
      while (node !== null) {
        line += `${node.value} -> `;
        node = node.forwards[i];
      }
      line += 'null';
      console.log(line);
    }
  }
}
const compareNumbers = (a: number, b: number) => a - b;
const skipList = new SkipList<number>();

skipList.insert(10, compareNumbers);
skipList.insert(20, compareNumbers);
skipList.insert(15, compareNumbers);

console.log(skipList.contains(15, compareNumbers)); // true
console.log(skipList.contains(30, compareNumbers)); // false

skipList.delete(20, compareNumbers);
skipList.printList();
