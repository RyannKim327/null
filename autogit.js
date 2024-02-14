class SkipListNode {
  constructor(val, level) {
    this.val = val;
    this.next = Array(level).fill(null);
  }
}

class SkipList {
  constructor() {
    this.head = new SkipListNode(-Infinity, 32); // Maximum level is 32
    this.level = 1;
  }

  randomLevel() {
    let level = 1;
    while (Math.random() < 0.5 && level < this.head.next.length) {
      level++;
    }
    return level;
  }

  insert(val) {
    const newNode = new SkipListNode(val, this.randomLevel());
    const update = Array(newNode.next.length).fill(this.head);

    // Find the right position to insert the new node
    let current = this.head;
    for (let i = newNode.next.length - 1; i >= 0; i--) {
      while (current.next[i] && current.next[i].val < val) {
        current = current.next[i];
      }
      update[i] = current;
    }

    // Update pointers to insert the new node
    for (let i = 0; i < newNode.next.length; i++) {
      newNode.next[i] = update[i].next[i];
      update[i].next[i] = newNode;
    }

    if (newNode.next.length > this.level) {
      this.level = newNode.next.length;
    }
  }

  search(target) {
    let current = this.head;
    for (let i = this.level - 1; i >= 0; i--) {
      while (current.next[i] && current.next[i].val < target) {
        current = current.next[i];
      }
    }
    current = current.next[0];
    if (current && current.val === target) {
      return current;
    }
    return null;
  }

  delete(val) {
    const update = Array(this.level).fill(this.head);
    
    let current = this.head;
    for (let i = this.level - 1; i >= 0; i--) {
      while (current.next[i] && current.next[i].val < val) {
        current = current.next[i];
      }
      update[i] = current;
    }

    current = current.next[0];
    if (current && current.val === val) {
      for (let i = 0; i < current.next.length; i++) {
        update[i].next[i] = current.next[i];
      }
      while (this.level > 1 && this.head.next[this.level - 1] === null) {
        this.level--;
      }
      return true;
    }
    return false;
  }
}
// Create a new skip list
const list = new SkipList();

// Insert elements
list.insert(3);
list.insert(9);
list.insert(1);
list.insert(5);

// Search for an element
console.log(list.search(9)); // Output: SkipListNode { val: 9 }

// Delete an element
console.log(list.delete(1)); // Output: true
console.log(list.delete(10)); // Output: false
