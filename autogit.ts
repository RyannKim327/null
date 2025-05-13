class SkipListNode<T> {
  key: T;
  forward: Array<SkipListNode<T> | null>;

  constructor(key: T, level: number) {
    this.key = key;
    this.forward = new Array(level + 1).fill(null);
  }
}
class SkipList<T> {
  private MAX_LEVEL: number;
  private P: number; // Probability for random level
  private level: number; // Current maximum level in skip list
  private header: SkipListNode<T>;

  constructor(maxLevel: number = 16, p: number = 0.5) {
    this.MAX_LEVEL = maxLevel;
    this.P = p;
    this.level = 0;
    this.header = new SkipListNode<T>(null as any, this.MAX_LEVEL);
  }

  private randomLevel(): number {
    let lvl = 0;
    while (Math.random() < this.P && lvl < this.MAX_LEVEL) {
      lvl++;
    }
    return lvl;
  }

  search(key: T): SkipListNode<T> | null {
    let current = this.header;
    for (let i = this.level; i >= 0; i--) {
      while (
        current.forward[i] !== null &&
        current.forward[i]!.key < key
      ) {
        current = current.forward[i]!;
      }
    }
    current = current.forward[0]!;
    if (current !== null && current.key === key) {
      return current;
    } else {
      return null;
    }
  }

  insert(key: T): void {
    let update = new Array<SkipListNode<T>>(this.MAX_LEVEL + 1);
    let current = this.header;

    for (let i = this.level; i >= 0; i--) {
      while (
        current.forward[i] !== null &&
        current.forward[i]!.key < key
      ) {
        current = current.forward[i]!;
      }
      update[i] = current;
    }

    current = current.forward[0]!;

    if (current === null || current.key !== key) {
      let lvl = this.randomLevel();
      if (lvl > this.level) {
        for (let i = this.level + 1; i <= lvl; i++) {
          update[i] = this.header;
        }
        this.level = lvl;
      }

      let newNode = new SkipListNode<T>(key, lvl);

      for (let i = 0; i <= lvl; i++) {
        newNode.forward[i] = update[i].forward[i];
        update[i].forward[i] = newNode;
      }
    }
  }

  // Optional: Implement deletion similarly
}
const skipList = new SkipList<number>();

skipList.insert(3);
skipList.insert(6);
skipList.insert(7);
skipList.insert(9);

console.log(skipList.search(6)); // Should print the node holding 6
console.log(skipList.search(4)); // Should print null
