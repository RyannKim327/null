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
    let newNode = new Node(value);
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
    let slow = this.head;
    let fast = this.head;

    // Move the fast pointer to the nth node from the beginning
    for (let i = 0; i < n; i++) {
      if (fast === null) {
        return null; // Not enough nodes
      }
      fast = fast.next;
    }

    // Move both pointers until the fast pointer reaches the end
    while (fast !== null) {
      slow = slow.next;
      fast = fast.next;
    }

    return slow;
  }
}

// Test the function
let linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.addNode(4);
linkedList.addNode(5);

let nthNodeFromEnd = linkedList.findNthNodeFromEnd(2);
console.log(nthNodeFromEnd.value); // Output: 4
