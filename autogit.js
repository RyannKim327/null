class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Add a node to the end of the list
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  // Insert a node at a given position
  insert(value, index) {
    if (index < 0 || index > this.size) {
      throw new Error('Invalid index');
    }

    const newNode = new Node(value);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let prev = null;
      let i = 0;

      while (i < index) {
        prev = current;
        current = current.next;
        i++;
      }

      prev.next = newNode;
      newNode.next = current;

      if (index === this.size) {
        this.tail = newNode;
      }
    }
    this.size++;
  }

  // Remove a node at a given position
  removeAt(index) {
    if (index < 0 || index >= this.size) {
      throw new Error('Invalid index');
    }

    let current = this.head;
    let prev = null;
    let i = 0;

    while (i < index) {
      prev = current;
      current = current.next;
      i++;
    }

    if (prev) {
      prev.next = current.next;
      if (index === this.size - 1) {
        this.tail = prev;
      }
    } else {
      this.head = current.next;
      if (index === this.size - 1) {
        this.tail = null;
      }
    }

    this.size--;
    return current.value;
  }

  // Get the value at a given position
  get(index) {
    if (index < 0 || index >= this.size) {
      throw new Error('Invalid index');
    }

    let current = this.head;
    let i = 0;

    while (i < index) {
      current = current.next;
      i++;
    }

    return current.value;
  }

  // Check if the linked list is empty
  isEmpty() {
    return this.size === 0;
  }

  // Get the size of the linked list
  getSize() {
    return this.size;
  }

  // Print the linked list values
  print() {
    let current = this.head;
    let values = [];

    while (current) {
      values.push(current.value);
      current = current.next;
    }

    console.log(values.join(' -> '));
  }
}

// Usage:
const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);

linkedList.insert(15, 1);
linkedList.removeAt(2);

console.log(linkedList.get(1)); // Output: 15
console.log(linkedList.isEmpty()); // Output: false
console.log(linkedList.getSize()); // Output: 3

linkedList.print(); // Output: 10 -> 15 -> 30
