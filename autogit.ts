class SkipNode<T> {
  value: T | null;
  forwards: Array<SkipNode<T> | null>;

  constructor(level: number, value: T | null = null) {
    this.value = value;
    this.forwards = new Array(level + 1).fill(null);
  }
}
class SkipList<T> {
  private MAX_LEVEL = 16;
  private P = 0.5;

  private header: SkipNode<T>;
  private level: number;

  constructor() {
    this.level = 0;
    this.header = new SkipNode<T>(this.MAX_LEVEL);
  }

  private randomLevel(): number {
    let lvl = 0;
    while (Math.random() < this.P && lvl < this.MAX_LEVEL) {
      lvl++;
    }
    return lvl;
  }

  public search(value: T): boolean {
    let current = this.header;
    for (let i = this.level; i >= 0; i--) {
      while (current.forwards[i] && current.forwards[i]!.value! < value) {
        current = current.forwards[i]!;
      }
    }
    current = current.forwards[0]!;
    return current !== null && current.value === value;
  }

  public insert(value: T): void {
    const update = new Array<SkipNode<T> | null>(this.MAX_LEVEL + 1);
    let current = this.header;

    for (let i = this.level; i >= 0; i--) {
      while (current.forwards[i] && current.forwards[i]!.value! < value) {
        current = current.forwards[i]!;
      }
      update[i] = current;
    }

    current = current.forwards[0]!;

    if (current === null || current.value !== value) {
      const lvl = this.randomLevel();

      if (lvl > this.level) {
        for (let i = this.level + 1; i <= lvl; i++) {
          update[i] = this.header;
        }
        this.level = lvl;
      }

      const newNode = new SkipNode<T>(lvl, value);
      for (let i = 0; i <= lvl; i++) {
        newNode.forwards[i] = update[i]!.forwards[i];
        update[i]!.forwards[i] = newNode;
      }
    }
  }

  public delete(value: T): void {
    const update = new Array<SkipNode<T> | null>(this.MAX_LEVEL + 1);
    let current = this.header;

    for (let i = this.level; i >= 0; i--) {
      while (current.forwards[i] && current.forwards[i]!.value! < value) {
        current = current.forwards[i]!;
      }
      update[i] = current;
    }

    current = current.forwards[0]!;

    if (current !== null && current.value === value) {
      for (let i = 0; i <= this.level; i++) {
        if (update[i]!.forwards[i] !== current) break;
        update[i]!.forwards[i] = current.forwards[i];
      }

      while (this.level > 0 && this.header.forwards[this.level] === null) {
        this.level--;
      }
    }
  }

  public print(): void {
    for (let i = this.level; i >= 0; i--) {
      let line = `Level ${i}: header`;
      let node = this.header.forwards[i];
      while (node !== null) {
        line += ` -> ${node.value}`;
        node = node.forwards[i];
      }
      console.log(line);
    }
  }
}
const skipList = new SkipList<number>();

skipList.insert(10);
skipList.insert(20);
skipList.insert(30);

console.log(skipList.search(20)); // true
console.log(skipList.search(40)); // false

skipList.delete(20);
console.log(skipList.search(20)); // false

skipList.print();
