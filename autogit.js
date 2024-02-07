// Create a Node class to represent each node in the linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Create a LinkedList class to manage the linked list
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add a new node at the end of the linked list
  append(data) {
    const newNode = new Node(data);

    // If linked list is empty, make the new node the head
    if (!this.head) {
      this.head = newNode;
      return;
    }

    // Traverse to the last node
    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    // Append the new node to the last node
    current.next = newNode;
  }

  // Insert a new node at a specific position in the linked list
  insertAt(data, position) {
    const newNode = new Node(data);

    // If position is 0, make the new node the head
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    // Traverse to the node at position-1
    let current = this.head;
    let prev = null;
    let count = 0;

    while (current && count < position) {
      prev = current;
      current = current.next;
      count++;
    }

    // Insert the new node at the specified position
    prev.next = newNode;
    newNode.next = current;
  }

  // Remove a node at a specific position from the linked list
  removeAt(position) {
    // If position is 0, remove the head node
    if (position === 0 && this.head) {
      this.head = this.head.next;
      return;
    }

    // Traverse to the node at position-1
    let current = this.head;
    let prev = null;
    let count = 0;

    while (current && count < position) {
      prev = current;
      current = current.next;
      count++;
    }

    // Remove the node at the specified position
    if (current) {
      prev.next = current.next;
    }
  }

  // Print the linked list
  print() {
    let current = this.head;
    const result = [];

    while (current) {
      result.push(current.data);
      current = current.next;
    }

    console.log(result.join(" -> "));
  }
}

// Usage example
const linkedList = new LinkedList();

linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.append(40);

linkedList.insertAt(15, 1);
linkedList.insertAt(25, 3);

linkedList.removeAt(2);

linkedList.print(); // Output: 10 -> 15 -> 30 -> 40
