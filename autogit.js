class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add a new node to the end of the linked list
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Insert a new node at a specified index
  insertAt(index, value) {
    if (index < 0 || index > this.size()) {
      throw new Error("Index out of bounds");
    }

    const newNode = new Node(value);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let i = 0;
      while (i < index - 1) {
        current = current.next;
        i++;
      }
      newNode.next = current.next;
      current.next = newNode;
    }
  }

  // Remove a node at a specified index
  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      throw new Error("Index out of bounds");
    }

    if (index === 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      let i = 0;
      while (i < index - 1) {
        current = current.next;
        i++;
      }
      current.next = current.next.next;
    }
  }

  // Get the size of the linked list
  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  // Convert the linked list to an array
  toArray() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
}

// Example usage

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);

console.log(list.toArray()); // Output: [1, 2, 3]

list.insertAt(1, 4);
console.log(list.toArray()); // Output: [1, 4, 2, 3]

list.removeAt(2);
console.log(list.toArray()); // Output: [1, 4, 3]
