class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNode(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  findNthNodeFromEnd(n) {
    if (!this.head || n <= 0) {
      return null;
    }

    let slow = this.head;
    let fast = this.head;

    for (let i = 0; i < n; i++) {
      if (!fast) {
        return null; // List length shorter than n
      }
      fast = fast.next;
    }

    while (fast) {
      slow = slow.next;
      fast = fast.next;
    }

    return slow.data;
  }
}

// Example usage:
const linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.addNode(4);
linkedList.addNode(5);

const n = 2;
const nthNodeFromEnd = linkedList.findNthNodeFromEnd(n);
console.log(`The ${n}th node from the end: ${nthNodeFromEnd}`);
