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

    let pointer1 = this.head;
    let pointer2 = this.head;

    // Move the second pointer to the nth node from the beginning
    for (let i = 0; i < n; i++) {
      if (pointer2 === null) {
        return null; // The list is too short
      }
      pointer2 = pointer2.next;
    }

    // Move both pointers until the second pointer reaches the end
    while (pointer2.next) {
      pointer1 = pointer1.next;
      pointer2 = pointer2.next;
    }

    return pointer1;
  }
}

// Example Usage
const linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.addNode(4);
linkedList.addNode(5);

console.log(linkedList.findNthNodeFromEnd(2)); // This will log the node with value 4
