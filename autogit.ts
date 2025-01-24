class Node<T> {
  value: T;
  forward: Node<T>[]; // array of pointers to next nodes at different levels

  constructor(value: T, level: number) {
    this.value = value;
    this.forward = new Array(level);
  }
}

class SkipList<T> {
  private head: Node<T>;
  private maxLevel: number; // maximum level of the skip list
  private random: () => number; // random number generator

  constructor(maxLevel: number = 16, random?: () => number) {
    this.maxLevel = maxLevel;
    this.random = random || Math.random;
    this.head = new Node<T>(null, maxLevel);
  }

  insert(value: T): void {
    const newNode = new Node(value, this.randomLevel());
    let update: Node<T>[] = new Array(this.maxLevel);
    let x = this.head;

    for (let i = this.maxLevel - 1; i >= 0; i--) {
      while (x.forward[i] && x.forward[i].value < value) {
        x = x.forward[i];
      }
      update[i] = x;
    }

    for (let i = 0; i < newNode.forward.length; i++) {
      newNode.forward[i] = update[i].forward[i];
      update[i].forward[i] = newNode;
    }
  }

  search(value: T): boolean {
    let x = this.head;
    for (let i = this.maxLevel - 1; i >= 0; i--) {
      while (x.forward[i] && x.forward[i].value < value) {
        x = x.forward[i];
      }
    }
    return x.forward[0] && x.forward[0].value === value;
  }

  delete(value: T): boolean {
    let update: Node<T>[] = new Array(this.maxLevel);
    let x = this.head;

    for (let i = this.maxLevel - 1; i >= 0; i--) {
      while (x.forward[i] && x.forward[i].value < value) {
        x = x.forward[i];
      }
      update[i] = x;
    }

    if (x.forward[0] && x.forward[0].value === value) {
      for (let i = 0; i < this.maxLevel; i++) {
        if (update[i].forward[i] && update[i].forward[i].value === value) {
          update[i].forward[i] = update[i].forward[i].forward[i];
        }
      }
      return true;
    }

    return false;
  }

  private randomLevel(): number {
    let level = 1;
    while (this.random() < 0.5 && level < this.maxLevel) {
      level++;
    }
    return level;
  }
}
const skipList = new SkipList<number>();

skipList.insert(5);
skipList.insert(2);
skipList.insert(8);
skipList.insert(3);
skipList.insert(9);

console.log(skipList.search(2)); // true
console.log(skipList.search(6)); // false

skipList.delete(8);
console.log(skipList.search(8)); // false
