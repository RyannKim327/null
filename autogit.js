class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Add a node to the end of the linked list
  addNode(value) {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Remove the first node with a given value
  removeNode(value) {
    if (!this.head) {
      return;
    }

    // If the head node is the one to remove
    if (this.head.value === value) {
      this.head = this.head.next;

      // If the list becomes empty, update the tail
      if (!this.head) {
        this.tail = null;
      }

      return;
    }

    let currentNode = this.head;
    let prevNode = null;

    // Traverse the list to find the node to remove
    while (currentNode !== null && currentNode.value !== value) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    // If the node is found, remove it
    if (currentNode !== null && currentNode.value === value) {
      prevNode.next = currentNode.next;

      // If the tail node is removed, update the tail
      if (currentNode === this.tail) {
        this.tail = prevNode;
      }
    }
  }

  // Print the values of all nodes in the linked list
  printList() {
    let currentNode = this.head;
    const values = [];

    while (currentNode !== null) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(values.join(' -> '));
  }
}

// Example usage:
const linkedList = new LinkedList();

linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);

linkedList.printList(); // 1 -> 2 -> 3

linkedList.removeNode(2);

linkedList.printList(); // 1 -> 3
