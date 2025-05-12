class SkipListNode<T> {
  value: T;
  forwards: Array<SkipListNode<T> | null>;

  constructor(value: T, level: number) {
    this.value = value;
    this.forwards = new Array(level).fill(null);
  }
}

class SkipList<T> {
  private readonly MAX_LEVEL = 16;
  private readonly P = 0.5; // Probability for random level generation
  private level: number = 0;
  private head: SkipListNode<T>;

  constructor() {
    // Use a dummy head node with null value
    this.head = new SkipListNode<T>(null as any, this.MAX_LEVEL);
  }

  private randomLevel(): number {
    let lvl = 1;
    while (Math.random() < this.P && lvl < this.MAX_LEVEL) {
      lvl++;
    }
    return lvl;
  }

  search(value: T): boolean {
    let current = this.head;
    for (let i = this.level - 1; i >= 0; i--) {
      while (current.forwards[i] !== null && (current.forwards[i]!.value as any) < value) {
        current = current.forwards[i]!;
      }
    }
    current = current.forwards[0]!;
    return current !== null && current.value === value;
  }

  insert(value: T): void {
    const update = new Array<SkipListNode<T>>(this.MAX_LEVEL).fill(this.head);
    let current = this.head;

    // Find place to insert
    for (let i = this.level - 1; i >= 0; i--) {
      while (
        current.forwards[i] !== null &&
        (current.forwards[i]!.value as any) < value
      ) {
        current = current.forwards[i]!;
      }
      update[i] = current;
    }

    current = current.forwards[0]!;

    if (current === null || current.value !== value) {
      const lvl = this.randomLevel();

      if (lvl > this.level) {
        // Update header levels if needed
        for (let i = this.level; i < lvl; i++) {
          update[i] = this.head;
        }
        this.level = lvl;
      }

      const newNode = new SkipListNode<T>(value, lvl);

      for (let i = 0; i < lvl; i++) {
        newNode.forwards[i] = update[i].forwards[i];
        update[i].forwards[i] = newNode;
      }
    }
  }

  delete(value: T): boolean {
    const update = new Array<SkipListNode<T>>(this.MAX_LEVEL).fill(this.head);
    let current = this.head;

    for (let i = this.level - 1; i >= 0; i--) {
      while (current.forwards[i] !== null && (current.forwards[i]!.value as any) < value) {
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

      // Decrease level if levels are empty
      while (this.level > 0 && this.head.forwards[this.level - 1] === null) {
        this.level--;
      }
      return true;
    }

    return false;
  }
}
