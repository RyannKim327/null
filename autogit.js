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
    this.length = 0;
  }

  // Add a new node to the end of the linked list
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // Add a new node to the beginning of the linked list
  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  // Insert a new node at a specific position in the linked list
  insert(index, value) {
    if (index < 0 || index > this.length) {
      throw new Error('Index out of range');
    }
    if (index === 0) {
      this.prepend(value);
    } else if (index === this.length) {
      this.append(value);
    } else {
      const newNode = new Node(value);
      let currentNode = this.head;
      for (let i = 1; i < index; i++) {
        currentNode = currentNode.next;
      }
      newNode.next = currentNode.next;
      currentNode.next = newNode;
      this.length++;
    }
  }

  // Remove a node at a specific position in the linked list
  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index out of range');
    }
    if (index === 0) {
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
    } else {
      let currentNode = this.head;
      let previousNode = null;
      for (let i = 0; i < index; i++) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
      if (index === this.length - 1) {
        this.tail = previousNode;
      }
    }
    this.length--;
  }

  // Get the value at a specific position in the linked list
  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index out of range');
    }
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode.value;
  }

  // Convert the linked list to an array
  toArray() {
    const result = [];
    let currentNode = this.head;
    while (currentNode) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return result;
  }

  // Get the size of the linked list
  size() {
    return this.length;
  }

  // Check if the linked list is empty
  isEmpty() {
    return this.length === 0;
  }
}
const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
list.insert(2, 2.5);
list.remove(1);

console.log(list.toArray()); // [0, 1, 2.5, 3]
console.log(list.size());   // 4
console.log(list.isEmpty()); // false
