class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Add an element to the list
  add(value) {
    const newNode = new Node(value);

    // If the list is empty, make the new node the head
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;

      // Traverse to the last node
      while (current.next !== null) {
        current = current.next;
      }

      // Append the new node
      current.next = newNode;
    }

    this.size++;
  }

  // Insert an element at a specific index
  insertAt(value, index) {
    if (index < 0 || index > this.size) {
      return false;
    }

    const newNode = new Node(value);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let prev = null;
      let currentIndex = 0;

      // Traverse to the specified index
      while (currentIndex < index) {
        prev = current;
        current = current.next;
        currentIndex++;
      }

      // Insert the new node at the specified index
      newNode.next = current;
      prev.next = newNode;
    }

    this.size++;
    return true;
  }

  // Remove an element at a specific index
  removeAt(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let current = this.head;

    if (index === 0) {
      this.head = current.next;
    } else {
      let prev = null;
      let currentIndex = 0;

      // Traverse to the specified index
      while (currentIndex < index) {
        prev = current;
        current = current.next;
        currentIndex++;
      }

      // Remove the node at the specified index
      prev.next = current.next;
    }

    this.size--;
    return current.value;
  }

  // Get the element at a specific index
  getAt(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let current = this.head;
    let currentIndex = 0;

    // Traverse to the specified index
    while (currentIndex < index) {
      current = current.next;
      currentIndex++;
    }

    return current.value;
  }

  // Check if the list is empty
  isEmpty() {
    return this.size === 0;
  }

  // Get the size of the list
  getSize() {
    return this.size;
  }

  // Print the linked list
  print() {
    let current = this.head;
    let list = '';

    while (current !== null) {
      list += current.value + ' -> ';
      current = current.next;
    }

    list += 'null';
    console.log(list);
  }
}

// Example usage
const list = new LinkedList();
list.add(10);
list.add(20);
list.add(30);
list.print(); // Output: 10 -> 20 -> 30 -> null

list.insertAt(25, 2);
list.print(); // Output: 10 -> 20 -> 25 -> 30 -> null

list.removeAt(1);
list.print(); // Output: 10 -> 25 -> 30 -> null

console.log(list.getAt(2)); // Output: 30

console.log(list.isEmpty()); // Output: false

console.log(list.getSize()); // Output: 3
