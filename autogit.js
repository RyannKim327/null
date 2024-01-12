class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Add a new node to the end of the list
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

  // Insert a new node at a specified index
  insertAt(index, data) {
    if (index === 0) {
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let counter = 0;
      let currentNode = this.head;
      let prevNode = null;

      while (counter < index) {
        counter++;
        prevNode = currentNode;
        currentNode = currentNode.next;
      }

      const newNode = new Node(data);
      newNode.next = currentNode;
      prevNode.next = newNode;
    }
  }

  // Remove a node at a specified index
  removeAt(index) {
    if (!this.head) {
      return;
    }

    let counter = 0;
    let currentNode = this.head;
    let prevNode = null;

    if (index === 0) {
      this.head = currentNode.next;
      if (!this.head) {
        this.tail = null;
      }
    } else {
      while (counter < index) {
        counter++;
        prevNode = currentNode;
        currentNode = currentNode.next;
      }

      prevNode.next = currentNode.next;

      if (index === this.size() - 1) {
        this.tail = prevNode;
      }
    }
  }

  // Get the size (number of nodes) in the list
  size() {
    let count = 0;
    let currentNode = this.head;

    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }

    return count;
  }

  // Print all nodes in the list
  print() {
    let currentNode = this.head;
    let output = '';

    while (currentNode) {
      output += currentNode.data + ' -> ';
      currentNode = currentNode.next;
    }

    output += 'null';
    console.log(output);
  }
}
const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
list.print(); // Output: 10 -> 20 -> 30 -> null

list.insertAt(1, 15);
list.print(); // Output: 10 -> 15 -> 20 -> 30 -> null

list.removeAt(2);
list.print(); // Output: 10 -> 15 -> 30 -> null

console.log(list.size()); // Output: 3
