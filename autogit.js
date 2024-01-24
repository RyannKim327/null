// Node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// LinkedList class
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add a node to the end of the list
  append(value) {
    const newNode = new Node(value);

    // If the list is empty, make the new node the head
    if (!this.head) {
      this.head = newNode;
      return;
    }

    // Traverse to the end of the list and add the new node there
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Insert a node at a specific position
  insert(value, position) {
    const newNode = new Node(value);

    // If the list is empty, make the new node the head
    if (!this.head) {
      this.head = newNode;
      return;
    }

    // If position is 0, insert the new node at the beginning of the list
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    // Traverse to the desired position and insert the new node there
    let current = this.head;
    let previous = null;
    let count = 0;
    while (count < position) {
      previous = current;
      current = current.next;
      count++;
    }
    newNode.next = current;
    previous.next = newNode;
  }

  // Remove a node at a specific position
  remove(position) {
    // If the list is empty, there is nothing to remove
    if (!this.head) {
      return;
    }

    // If position is 0, remove the head node
    if (position === 0) {
      this.head = this.head.next;
      return;
    }

    // Traverse to the desired position and remove the node
    let current = this.head;
    let previous = null;
    let count = 0;
    while (count < position) {
      previous = current;
      current = current.next;
      count++;
    }
    previous.next = current.next;
  }

  // Print the linked list
  print() {
    let current = this.head;
    const values = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(' -> '));
  }
}

// Usage example
const list = new LinkedList();
list.append(5);
list.append(10);
list.append(15);
list.print(); // Output: 5 -> 10 -> 15

list.insert(12, 2);
list.print(); // Output: 5 -> 10 -> 12 -> 15

list.remove(1);
list.print(); // Output: 5 -> 12 -> 15
