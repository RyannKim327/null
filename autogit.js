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
    let firstPointer = this.head;
    let secondPointer = this.head;
    
    // Move the first pointer ahead by n nodes
    for (let i = 0; i < n; i++) {
      if (!firstPointer) {
        return null; // If n is greater than the length of the list, return null
      }
      firstPointer = firstPointer.next;
    }

    while (firstPointer) {
      firstPointer = firstPointer.next;
      secondPointer = secondPointer.next;
    }

    return secondPointer;
  }
}

// Example Usage
const list = new LinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(4);
list.addNode(5);

const n = 2;
const nthNodeFromEnd = list.findNthNodeFromEnd(n);
console.log(`${n}th node from the end of the list is: ${nthNodeFromEnd.data}`);
