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

  // Method to add a node at the end of the linked list
  append(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Method to insert a node at a given position
  insertAt(data, position) {
    const newNode = new Node(data);

    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let previous = null;
      let count = 0;

      while (count < position && current !== null) {
        previous = current;
        current = current.next;
        count++;
      }

      previous.next = newNode;
      newNode.next = current;
    }
  }

  // Method to remove a node at a given position
  removeAt(position) {
    if (this.head === null) {
      return;
    }

    let current = this.head;
    let previous = null;
    let count = 0;

    if (position === 0) {
      this.head = current.next;
    } else {
      while (count < position && current !== null) {
        previous = current;
        current = current.next;
        count++;
      }
      previous.next = current.next;
    }
  }

  // Method to get the length of the linked list
  getLength() {
    let count = 0;
    let current = this.head;

    while (current !== null) {
      count++;
      current = current.next;
    }

    return count;
  }

  // Method to print the linked list
  print() {
    let current = this.head;
    let result = '';

    while (current !== null) {
      result += current.data + ' -> ';
      current = current.next;
    }

    result += 'null';

    console.log(result);
  }
}

// Usage example:
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.print(); // Output: 1 -> 2 -> 3 -> 4 -> null

linkedList.insertAt(5, 2);
linkedList.print(); // Output: 1 -> 2 -> 5 -> 3 -> 4 -> null

linkedList.removeAt(3);
linkedList.print(); // Output: 1 -> 2 -> 5 -> 4 -> null

console.log(linkedList.getLength()); // Output: 4
