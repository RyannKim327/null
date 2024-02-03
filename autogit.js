// Node class
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// LinkedList class
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add a node to the end of the list
  append(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }

  // Insert a node at a specific position
  insert(data, position) {
    const newNode = new Node(data);

    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let currentNode = this.head;
      let previousNode = null;
      let currentPosition = 0;

      while (currentPosition < position) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        currentPosition++;
      }

      newNode.next = currentNode;
      previousNode.next = newNode;
    }
  }

  // Remove a node at a specific position
  remove(position) {
    if (this.head === null) {
      return;
    }

    let currentNode = this.head;
    let previousNode = null;
    let currentPosition = 0;

    if (position === 0) {
      this.head = currentNode.next;
    } else {
      while (currentPosition < position) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        currentPosition++;
      }

      previousNode.next = currentNode.next;
    }
  }

  // Get the size of the linked list
  size() {
    let count = 0;
    let currentNode = this.head;

    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }

    return count;
  }

  // Print the linked list elements
  print() {
    let currentNode = this.head;
    let list = '';

    while (currentNode) {
      list += currentNode.data + ' -> ';
      currentNode = currentNode.next;
    }

    list += 'null';
    console.log(list);
  }
}

// Usage:
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.print(); // Output: 1 -> 2 -> 3 -> null

list.insert(4, 1);
list.print(); // Output: 1 -> 4 -> 2 -> 3 -> null

list.remove(2);
list.print(); // Output: 1 -> 4 -> 3 -> null

console.log(list.size()); // Output: 3
