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
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  findNthNodeFromEnd(n) {
    let firstPointer = this.head;
    let secondPointer = this.head;

    // Move the first pointer to the nth node from the beginning
    for (let i = 0; i < n; i++) {
      if (firstPointer === null) {
        return null;
      }
      firstPointer = firstPointer.next;
    }

    // Move the first and second pointers simultaneously until the first pointer reaches the end
    while (firstPointer !== null) {
      firstPointer = firstPointer.next;
      secondPointer = secondPointer.next;
    }

    return secondPointer;
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
if (nthNodeFromEnd !== null) {
  console.log(`The ${n}th node from the end of the linked list is: ${nthNodeFromEnd.value}`);
} else {
  console.log(`The linked list does not have ${n} nodes from the end.`);
}
