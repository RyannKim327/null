class SkipListNode<T> {
  value: T | null;
  forwards: SkipListNode<T>[];

  constructor(level: number, value: T | null) {
    this.value = value;
    this.forwards = new Array(level).fill(null);
  }
}

class SkipList<T> {
  private maxLevel: number;
  private p: number;
  private level: number;
  private header: SkipListNode<T>;
  private compare: (a: T, b: T) => number;

  constructor(maxLevel = 16, p = 0.5, compareFn?: (a: T, b: T) => number) {
    this.maxLevel = maxLevel;   // maximum number of levels
    this.p = p;                 // probability of promoting node to higher level
    this.level = 1;             // current highest level in the list
    this.header = new SkipListNode<T>(maxLevel, null);
    this.compare = compareFn || ((a, b) => (a < b ? -1 : a > b ? 1 : 0));
  }

  private randomLevel(): number {
    let lvl = 1;
    // keep increasing level with probability p up to maxLevel
    while (Math.random() < this.p && lvl < this.maxLevel) {
      lvl++;
    }
    return lvl;
  }

  insert(value: T): void {
    const update = new Array<SkipListNode<T>>(this.maxLevel);
    let current = this.header;

    // Start from top level, move down to level 0 to find position
    for (let i = this.level - 1; i >= 0; i--) {
      while (
        current.forwards[i] !== null &&
        this.compare(current.forwards[i].value!, value) < 0
      ) {
        current = current.forwards[i];
      }
      update[i] = current;
    }
    current = current.forwards[0];

    if (current === null || this.compare(current.value!, value) !== 0) {
      // Insert new node
      const newLevel = this.randomLevel();

      if (newLevel > this.level) {
        for (let i = this.level; i < newLevel; i++) {
          update[i] = this.header;
        }
        this.level = newLevel;
      }

      const newNode = new SkipListNode<T>(newLevel, value);
      for (let i = 0; i < newLevel; i++) {
        newNode.forwards[i] = update[i].forwards[i];
        update[i].forwards[i] = newNode;
      }
    }
  }

  search(value: T): T | null {
    let current = this.header;

    for (let i = this.level - 1; i >= 0; i--) {
      while (
        current.forwards[i] !== null &&
        this.compare(current.forwards[i].value!, value) < 0
      ) {
        current = current.forwards[i];
      }
    }

    current = current.forwards[0];
    if (current !== null && this.compare(current.value!, value) === 0) {
      return current.value;
    }
    return null;
  }

  delete(value: T): boolean {
    const update = new Array<SkipListNode<T>>(this.maxLevel);
    let current = this.header;

    for (let i = this.level - 1; i >= 0; i--) {
      while (
        current.forwards[i] !== null &&
        this.compare(current.forwards[i].value!, value) < 0
      ) {
        current = current.forwards[i];
      }
      update[i] = current;
    }

    current = current.forwards[0];

    if (current !== null && this.compare(current.value!, value) === 0) {
      // Found the node, remove it by updating pointers
      for (let i = 0; i < this.level; i++) {
        if (update[i].forwards[i] !== current) {
          break;
        }
        update[i].forwards[i] = current.forwards[i];
      }

      // Decrease level if highest levels are empty
      while (this.level > 1 && this.header.forwards[this.level - 1] === null) {
        this.level--;
      }
      return true;
    }
    return false;
  }

  // Optional: For debugging, print list levels
  print(): void {
    console.log("SkipList Levels:");
    for (let i = this.level - 1; i >= 0; i--) {
      let current = this.header.forwards[i];
      const elems: string[] = [];
      while (current !== null) {
        elems.push(`${current.value}`);
        current = current.forwards[i];
      }
      console.log(`Level ${i}: ${elems.join(" -> ")}`);
    }
  }
}
const skiplist = new SkipList<number>();

skiplist.insert(3);
skiplist.insert(6);
skiplist.insert(7);
skiplist.insert(9);
skiplist.insert(12);
skiplist.insert(19);
skiplist.insert(17);

console.log(skiplist.search(9));   // 9
console.log(skiplist.search(15));  // null

skiplist.delete(7);
skiplist.print();
