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
    this.tail = null;
  }

  // Add a node to the end of the list
  add(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Remove a node from the list
  remove(data) {
    if (this.head === null) {
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      if (this.head === null) {
        this.tail = null;
      }
      return;
    }

    let current = this.head;
    while (current.next !== null && current.next.data !== data) {
      current = current.next;
    }

    if (current.next !== null) {
      current.next = current.next.next;
      if (current.next === null) {
        this.tail = current;
      }
    }
  }

  // Traverse the list and execute a callback function on each node
  traverse(callback) {
    let current = this.head;
    while (current !== null) {
      callback(current);
      current = current.next;
    }
  }

  // Search for a node with a specific data value
  search(data) {
    let current = this.head;
    while (current !== null) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }
    return null;
  }
}

// Example usage
const linkedList = new LinkedList();

linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);

console.log("Original List:");
linkedList.traverse((node) => console.log(node.data));

linkedList.remove(2);

console.log("Modified List:");
linkedList.traverse((node) => console.log(node.data));

const node = linkedList.search(3);
console.log("Searched Node:", node?.data);
