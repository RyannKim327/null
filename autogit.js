// Create a Node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Create a LinkedList class
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
    let previousNode = null;
    let currentIndex = 0;

    while (currentIndex < index && currentNode) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }

    if (currentIndex === index) {
      newNode.next = currentNode;
      previousNode.next = newNode;

      if (newNode.next === null) {
        this.tail = newNode;
      }
    } else {
      throw new Error('Index out of bounds');
    }
  }

  // Remove a value at a specific index
  remove(index) {
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

    while (currentIndex < index && currentNode) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }

    if (currentIndex === index && currentNode) {
      previousNode.next = currentNode.next;

      if (previousNode.next === null) {
        this.tail = previousNode;
      }
    } else {
      throw new Error('Index out of bounds');
    }
  }

  // Get the value at a specific index
  get(index) {
    let currentNode = this.head;
    let currentIndex = 0;

    while (currentIndex < index && currentNode) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    if (currentIndex === index && currentNode) {
      return currentNode.value;
    } else {
      throw new Error('Index out of bounds');
    }
  }

  // Check if the list contains a value
  contains(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }

      currentNode = currentNode.next;
    }

    return false;
  }

  // Get the number of items in the list
  size() {
    let count = 0;
    let currentNode = this.head;

    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }

    return count;
  }

  // Print the list
  print() {
    const values = [];
    let currentNode = this.head;

    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(values.join(' -> '));
  }
}

// Example usage:
const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
list.insert(2, 2.5);
list.remove(1);
console.log(list.get(2)); // Output: 2.5
console.log(list.contains(3)); // Output: true
console.log(list.size()); // Output: 4
list.print(); // Output: 0 -> 1 -> 2.5 -> 3
