class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Method to add a node to the end of the linked list
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Method to add a node to the beginning of the linked list
  prepend(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  // Method to insert a node at a specific index in the linked list
  insertAt(data, index) {
    if (index === 0) {
      this.prepend(data);
      return;
    }

    const newNode = new Node(data);
    let current = this.head;
    let previous = null;

    let currentIndex = 0;

    while (current && currentIndex < index) {
      previous = current;
      current = current.next;
      currentIndex++;
    }

    newNode.next = current;
    previous.next = newNode;
  }

  // Method to remove a node with a specific value from the linked list
  remove(data) {
    let current = this.head;
    let previous = null;

    while (current) {
      if (current.data === data) {
        if (!previous) {
          this.head = current.next;
        } else {
          previous.next = current.next;
        }

        if (!current.next) {
          this.tail = previous;
        }

        return;
      }

      previous = current;
      current = current.next;
    }
  }

  // Method to print the linked list
  print() {
    const nodes = [];
    let current = this.head;

    while (current) {
      nodes.push(current.data);
      current = current.next;
    }

    console.log(nodes.join(' -> '));
  }
}
const linkedList = new LinkedList();

linkedList.append(5);
linkedList.append(10);
linkedList.append(15);

linkedList.prepend(1);
linkedList.prepend(0);

linkedList.insertAt(7, 2);

linkedList.print(); // Output: 0 -> 1 -> 5 -> 7 -> 10 -> 15

linkedList.remove(5);

linkedList.print(); // Output: 0 -> 1 -> 7 -> 10 -> 15
