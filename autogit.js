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

  // Add a new node to the end of the list
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

  // Add a new node to the beginning of the list
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

  // Insert a new node at a specific index
  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return;
    }

    const newNode = new Node(value);
    let currentNode = this.head;
    let previousNode = null;
    let currentIndex = 0;

    while (currentNode && currentIndex < index) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }

    previousNode.next = newNode;
    newNode.next = currentNode;

    if (newNode.next === null) {
      this.tail = newNode;
    }
  }

  // Remove a node at a specific index
  remove(index) {
    let currentNode = this.head;
    let previousNode = null;
    let currentIndex = 0;

    if (index === 0) {
      this.head = currentNode.next;
      if (!this.head) {
        this.tail = null;
      }
    } else {
      while (currentNode && currentIndex < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }

      previousNode.next = currentNode.next;

      if (previousNode.next === null) {
        this.tail = previousNode;
      }
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

  // Convert the linked list to an array
  toArray() {
    let result = [];
    let currentNode = this.head;

    while (currentNode) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return result;
  }
}

// Example usage
const myList = new LinkedList();
myList.append(1);
myList.append(2);
myList.append(3);
myList.prepend(0);
myList.insert(2, 1.5);
myList.remove(3);

console.log(myList.toArray()); // Output: [0, 1, 1.5, 3]
