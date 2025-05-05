class SkipListNode<T> {
  value: T | null;
  forwards: Array<SkipListNode<T> | null>;

  constructor(value: T | null, level: number) {
    this.value = value;
    this.forwards = new Array(level).fill(null);
  }
}

class SkipList<T> {
  private maxLevel: number;
  private P: number;
  private level: number;
  private header: SkipListNode<T>;

  constructor(maxLevel = 16, P = 0.5) {
    this.maxLevel = maxLevel;
    this.P = P;
    this.level = 0;
    this.header = new SkipListNode<T>(null, maxLevel);
  }

  private randomLevel(): number {
    let lvl = 1;
    while (Math.random() < this.P && lvl < this.maxLevel) {
      lvl++;
    }
    return lvl;
  }

  insert(value: T) {
    const update = new Array<SkipListNode<T>>(this.maxLevel).fill(this.header);
    let current = this.header;

    // Find where value fits on each level
    for (let i = this.level - 1; i >= 0; i--) {
      while (
        current.forwards[i] !== null &&
        (current.forwards[i]!.value as any) < (value as any)
      ) {
        current = current.forwards[i]!;
      }
      update[i] = current;
    }

    current = current.forwards[0]!;
    // Insert only if not found (optional, depends if duplicates allowed)
    if (!current || current.value !== value) {
      const newLevel = this.randomLevel();

      if (newLevel > this.level) {
        for (let i = this.level; i < newLevel; i++) {
          update[i] = this.header;
        }
        this.level = newLevel;
      }

      const newNode = new SkipListNode<T>(value, newLevel);
      for (let i = 0; i < newLevel; i++) {
        newNode.forwards[i] = update[i].forwards[i];
        update[i].forwards[i] = newNode;
      }
    }
  }

  search(value: T): boolean {
    let current = this.header;

    for (let i = this.level - 1; i >= 0; i--) {
      while (
        current.forwards[i] !== null &&
        (current.forwards[i]!.value as any) < (value as any)
      ) {
        current = current.forwards[i]!;
      }
    }

    current = current.forwards[0]!;

    return current !== null && current.value === value;
  }

  delete(value: T): boolean {
    const update = new Array<SkipListNode<T>>(this.maxLevel).fill(this.header);
    let current = this.header;

    for (let i = this.level - 1; i >= 0; i--) {
      while (
        current.forwards[i] !== null &&
        (current.forwards[i]!.value as any) < (value as any)
      ) {
        current = current.forwards[i]!;
      }
      update[i] = current;
    }

    current = current.forwards[0]!;
    if (current !== null && current.value === value) {
      for (let i = 0; i < this.level; i++) {
        if (update[i].forwards[i] !== current) {
          break;
        }
        update[i].forwards[i] = current.forwards[i];
      }

      // Adjust the level of the skip list
      while (this.level > 0 && this.header.forwards[this.level - 1] === null) {
        this.level--;
      }

      return true;
    }
    return false;
  }
}
const list = new SkipList<number>();
list.insert(10);
list.insert(20);
list.insert(15);

console.log(list.search(15)); // true
console.log(list.search(5));  // false

list.delete(10);
console.log(list.search(10)); // false
