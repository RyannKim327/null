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

  // Add a new node to the end of the list
  append(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  // Insert a new node at a specific position
  insert(position, value) {
    if (position < 0 || position > this.length) {
      return false;
    }

    const newNode = new Node(value);

    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
      if (this.length === 0) {
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

  // Remove a node at a specific position
  removeAt(position) {
    if (position < 0 || position >= this.length) {
      return null;
    }

    let current = this.head;
    let previous = null;
    let index = 0;

    if (position === 0) {
      this.head = current.next;
      if (this.length === 1) {
        this.tail = null;
      }
    } else if (position === this.length - 1) {
      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }

      this.tail = previous;
      this.tail.next = null;
    } else {
      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }

      previous.next = current.next;
    }

    this.length--;
    return current.value;
  }

  // Get the value at a specific position
  get(position) {
    if (position < 0 || position >= this.length) {
      return null;
    }

    let current = this.head;
    let index = 0;

    while (index < position) {
      current = current.next;
      index++;
    }

    return current.value;
  }

  // Check if the list is empty
  isEmpty() {
    return this.length === 0;
  }

  // Get the size of the list
  size() {
    return this.length;
  }

  // Print the list as an array
  print() {
    const result = [];
    let current = this.head;

    while (current) {
      result.push(current.value);
      current = current.next;
    }

    console.log(result);
  }
}
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);

list.print(); // Output: [10, 20, 30]

console.log(list.get(1)); // Output: 20

list.insert(1, 15);
list.print(); // Output: [10, 15, 20, 30]

list.removeAt(2);
list.print(); // Output: [10, 15, 30]

console.log(list.isEmpty()); // Output: false

console.log(list.size()); // Output: 3
