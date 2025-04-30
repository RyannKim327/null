class SkipListNode<T> {
  key: T;
  forward: Array<SkipListNode<T> | null>;

  constructor(key: T, level: number) {
    this.key = key;
    this.forward = new Array(level + 1).fill(null); // levels 0..level
  }
}

class SkipList<T> {
  private readonly MAX_LEVEL: number = 16;
  private readonly P: number = 0.5;  // probability to decide level
  private level: number = 0;
  private header: SkipListNode<T>;

  constructor() {
    this.header = new SkipListNode<T>(null as any, this.MAX_LEVEL);
  }

  private randomLevel(): number {
    let lvl = 0;
    while (Math.random() < this.P && lvl < this.MAX_LEVEL) {
      lvl++;
    }
    return lvl;
  }

  search(key: T): boolean {
    let current = this.header;
    for (let i = this.level; i >= 0; i--) {
      while (current.forward[i] !== null && current.forward[i]!.key! < key) {
        current = current.forward[i]!;
      }
    }
    current = current.forward[0]!;
    return current !== null && current.key === key;
  }

  insert(key: T): void {
    const update = new Array<SkipListNode<T> | null>(this.MAX_LEVEL + 1);
    let current = this.header;

    for (let i = this.level; i >= 0; i--) {
      while (current.forward[i] !== null && current.forward[i]!.key! < key) {
        current = current.forward[i]!;
      }
      update[i] = current;
    }

    current = current.forward[0]!;

    if (!current || current.key !== key) {
      let lvl = this.randomLevel();
      if (lvl > this.level) {
        for (let i = this.level + 1; i <= lvl; i++) {
          update[i] = this.header;
        }
        this.level = lvl;
      }

      const newNode = new SkipListNode<T>(key, lvl);
      for (let i = 0; i <= lvl; i++) {
        newNode.forward[i] = update[i]!.forward[i];
        update[i]!.forward[i] = newNode;
      }
    }
  }

  delete(key: T): void {
    const update = new Array<SkipListNode<T> | null>(this.MAX_LEVEL + 1);
    let current = this.header;

    for (let i = this.level; i >= 0; i--) {
      while (current.forward[i] !== null && current.forward[i]!.key! < key) {
        current = current.forward[i]!;
      }
      update[i] = current;
    }

    current = current.forward[0]!;

    if (current !== null && current.key === key) {
      for (let i = 0; i <= this.level; i++) {
        if (update[i]!.forward[i] !== current) break;
        update[i]!.forward[i] = current.forward[i];
      }

      // Adjust the level of the list
      while (this.level > 0 && this.header.forward[this.level] === null) {
        this.level--;
      }
    }
  }
}
const skipList = new SkipList<number>();
skipList.insert(3);
skipList.insert(6);
skipList.insert(7);
skipList.insert(9);

console.log(skipList.search(6));  // true
console.log(skipList.search(4));  // false

skipList.delete(6);
console.log(skipList.search(6));  // false
