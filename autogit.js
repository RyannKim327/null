class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNode(value) {
    const newNode = new Node(value);
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
    if (!this.head) {
      return null;
    }

    let fast = this.head;
    let slow = this.head;

    for (let i = 0; i < n; i++) {
      if (fast === null) {
        return null; // n is greater than the size of the list
      }
      fast = fast.next;
    }

    while (fast !== null) {
      fast = fast.next;
      slow = slow.next;
    }

    return slow;
  }
}

// Example usage
const list = new LinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(4);
list.addNode(5);

const n = 2;
const nthNodeFromEnd = list.findNthNodeFromEnd(n);
if (nthNodeFromEnd) {
  console.log(`The ${n}th node from the end of the list is: ${nthNodeFromEnd.value}`);
} else {
  console.log(`The list does not have ${n} nodes.`);
}
