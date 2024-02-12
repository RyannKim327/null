// Create a node class
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Create a linked list class
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add a new node to the head of the list
  addToHead(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Add a new node to the tail of the list
  addToTail(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
  }

  // Remove a node from the list based on the data
  removeNode(data) {
    if (!this.head) {
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let currentNode = this.head;
    let previousNode = null;

    while (currentNode && currentNode.data !== data) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (currentNode) {
      previousNode.next = currentNode.next;
    }
  }

  // Print the list
  printList() {
    let currentNode = this.head;
    let result = "";

    while (currentNode) {
      result += currentNode.data + " -> ";
      currentNode = currentNode.next;
    }

    result += "null";
    console.log(result);
  }
}

// Usage example
const myList = new LinkedList();

myList.addToHead(3);
myList.addToHead(2);
myList.addToHead(1);

myList.addToTail(4);

myList.printList(); // Output: 1 -> 2 -> 3 -> 4 -> null

myList.removeNode(2);

myList.printList(); // Output: 1 -> 3 -> 4 -> null
