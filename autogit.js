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
    let firstPointer = this.head;
    let secondPointer = this.head;
    
    for (let i = 0; i < n; i++) {
      if (secondPointer === null) {
        return null; // n is greater than the number of nodes in the list
      }
      secondPointer = secondPointer.next;
    }
    
    while (secondPointer !== null) {
      firstPointer = firstPointer.next;
      secondPointer = secondPointer.next;
    }
    
    return firstPointer;
  }
}

// Example usage:
const list = new LinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(4);
list.addNode(5);

console.log(list.findNthNodeFromEnd(2)); // Output: Node { value: 4, next: Node { value: 5, next: null } }
