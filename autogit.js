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

  // Add a new node at the end of the list
  append(data) {
    const newNode = new Node(data);
    
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Insert a new node at a specific position in the list
  insert(position, data) {
    if (position < 0 || (position > 0 && !this.head)) {
      throw new Error('Invalid position');
    }

    const newNode = new Node(data);

    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let previous = null;
      let count = 0;

      while (count < position) {
        previous = current;
        current = current.next;
        count++;
      }

      previous.next = newNode;
      newNode.next = current;
    }
  }

  // Remove a node at a specific position from the list
  removeAt(position) {
    if (position < 0 || !this.head) {
      throw new Error('Invalid position');
    }

    if (position === 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      let previous = null;
      let count = 0;

      while (count < position) {
        previous = current;
        current = current.next;
        count++;
      }

      previous.next = current.next;
    }
  }

  // Get the index of a node with the given data
  indexOf(data) {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.data === data) {
        return index;
      }
      current = current.next;
      index++;
    }

    return -1;
  }

  // Get the size of the list
  size() {
    let current = this.head;
    let count = 0;

    while (current !== null) {
      current = current.next;
      count++;
    }

    return count;
  }

  // Check if the list is empty
  isEmpty() {
    return this.head === null;
  }

  // Clear the list
  clear() {
    this.head = null;
  }

  // Print the list
  print() {
    let current = this.head;
    let result = "";

    while (current !== null) {
      result += current.data + " -> ";
      current = current.next;
    }

    result += "null";
    console.log(result);
  }
}
const list = new LinkedList();
list.append(5);
list.append(10);
list.insert(1, 7);
list.print(); // Output: 5 -> 7 -> 10 -> null
console.log(list.indexOf(7)); // Output: 1
console.log(list.size()); // Output: 3
console.log(list.isEmpty()); // Output: false
list.removeAt(0);
list.clear();
console.log(list.isEmpty()); // Output: true
