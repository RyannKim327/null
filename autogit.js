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

  // Add a new node to the end of the linked list
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  // Insert a new node at a specific position in the linked list
  insertAt(data, position) {
    const newNode = new Node(data);

    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    let prev = null;
    let count = 0;

    while (current && count < position) {
      prev = current;
      current = current.next;
      count++;
    }

    prev.next = newNode;
    newNode.next = current;
  }

  // Remove a node from the linked list
  remove(data) {
    if (!this.head) {
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let prev = null;

    while (current && current.data !== data) {
      prev = current;
      current = current.next;
    }

    if (!current) {
      return;
    }

    prev.next = current.next;
  }

  // Print the linked list
  print() {
    let current = this.head;
    let list = '';

    while (current) {
      list += `${current.data} -> `;
      current = current.next;
    }

    list += 'null';
    console.log(list);
  }
}
const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
list.print(); // Output: 10 -> 20 -> 30 -> null

list.insertAt(15, 1);
list.print(); // Output: 10 -> 15 -> 20 -> 30 -> null

list.remove(20);
list.print(); // Output: 10 -> 15 -> 30 -> null
