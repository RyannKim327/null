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
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }

  findNthNodeFromEnd(n) {
    if (!this.head || n <= 0) {
      return null;
    }

    let slow = this.head;
    let fast = this.head;

    for (let i = 0; i < n; i++) {
      if (fast === null) {
        return null; // if n is greater than the length of the list
      }
      fast = fast.next;
    }

    while (fast !== null) {
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

console.log(linkedList.findNthNodeFromEnd(2)); // Output: 4
