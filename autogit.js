class Node {
  constructor(data) {
    this.data = data;
    this.next = null; // Pointer to the next node
  }
}

class LinkedList {
  constructor() {
    this.head = null; // Pointer to the first node
    this.tail = null; // Pointer to the last node
    this.length = 0; // Number of nodes in the list
  }

  // Add a node to the end of the list
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  // Insert a node at a specific position in the list
  insert(position, data) {
    if (position < 0 || position > this.length) {
      return false; // Invalid position
    }

    const newNode = new Node(data);

    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
      if (!this.tail) {
        // If the list was initially empty
        this.tail = newNode;
      }
    } else if (position === this.length) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      let current = this.head;
      let previous = null;
      let index = 0;

      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }

      newNode.next = current;
      previous.next = newNode;
    }

    this.length++;
    return true;
  }

  // Remove a node at a specific position in the list
  removeAt(position) {
    if (position < 0 || position >= this.length) {
      return null; // Invalid position
    }

    let current = this.head;
    let previous = null;
    let index = 0;

    if (position === 0) {
      this.head = current.next;
      if (position === this.length - 1) {
        // If the head was the only node
        this.tail = null;
      }
    } else {
      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }

      previous.next = current.next;
      if (position === this.length - 1) {
        // If removing the last node, update tail
        this.tail = previous;
      }
    }

    this.length--;
    return current.data;
  }

  // Get the data at a specific position in the list
  get(position) {
    if (position < 0 || position >= this.length) {
      return null; // Invalid position
    }

    let current = this.head;
    let index = 0;

    while (index < position) {
      current = current.next;
      index++;
    }

    return current.data;
  }

  // Check if the list is empty
  isEmpty() {
    return this.length === 0;
  }

  // Get the number of nodes in the list
  size() {
    return this.length;
  }

  // Print the data of all nodes in the list
  print() {
    let current = this.head;
    let result = '';

    while (current) {
      result += current.data + ' ';
      current = current.next;
    }

    console.log(result.trim());
  }
}
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);

list.print(); // Output: 1 2 3

list.insert(1, 4);
list.print(); // Output: 1 4 2 3

list.removeAt(2);
list.print(); // Output: 1 4 3

console.log(list.get(1)); // Output: 4
console.log(list.size()); // Output: 3
console.log(list.isEmpty()); // Output: false
