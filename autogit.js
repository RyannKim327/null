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
  }

  // Add a value to the end of the list
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Add a value to the beginning of the list
  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  // Insert a value at a specific index
  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return;
    }

    const newNode = new Node(value);
    let currentNode = this.head;
    let currentIndex = 0;

    while (currentNode && currentIndex < index - 1) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    if (!currentNode) {
      this.append(value);
      return;
    }

    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  // Delete the node at a specific index
  delete(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;

      if (!this.head) {
        this.tail = null;
      }

      return;
    }

    let currentNode = this.head;
    let previousNode = null;
    let currentIndex = 0;

    while (currentNode && currentIndex < index) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }

    if (!currentNode) {
      return;
    }

    previousNode.next = currentNode.next;

    if (currentNode === this.tail) {
      this.tail = previousNode;
    }
  }

  // Print the list values
  values() {
    const result = [];
    let currentNode = this.head;

    while (currentNode) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return result;
  }
}

// Usage example:
const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.prepend(4);
list.insert(2, 5);
list.delete(1);

console.log(list.values()); // Output: [4, 1, 5, 3]
