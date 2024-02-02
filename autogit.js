// Define a class for a single Node in the linked list
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Define a class for the LinkedList
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Add a new node at the end of the list
  addNode(value) {
    const newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Remove a node with the given value from the list
  removeNode(value) {
    if (!this.head) {
      return;
    }

    // Handle the case where the node to be removed is the head
    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let currentNode = this.head;
    while (currentNode && currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }

    // Handle the case where the node to be removed is the tail
    if (this.tail.value === value) {
      this.tail = currentNode;
    }
  }

  // Print the values of the linked list
  printList() {
    if (!this.head) {
      console.log("Linked list is empty");
      return;
    }

    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

// Usage:
const linkedList = new LinkedList();
linkedList.addNode(10);
linkedList.addNode(20);
linkedList.addNode(30);
linkedList.printList(); // Output: 10 20 30
linkedList.removeNode(20);
linkedList.printList(); // Output: 10 30
