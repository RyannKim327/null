// Create a Node class
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Create a LinkedList class
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add a new node at the end of the list
  append(data) {
    const newNode = new Node(data);

    // If the list is empty, make newNode the head
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let currentNode = this.head;

    // Traverse to the end of the list
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    // Append newNode at the end
    currentNode.next = newNode;
  }

  // Insert a new node at a specific position
  insertAt(data, position) {
    const newNode = new Node(data);

    // If the list is empty, make newNode the head
    if (!this.head || position === 1) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let currentNode = this.head;
    let prevNode = null;
    let currentPosition = 1;

    // Traverse to the specified position
    while (currentNode && currentPosition < position) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      currentPosition++;
    }

    // Insert newNode at the specified position
    prevNode.next = newNode;
    newNode.next = currentNode;
  }

  // Remove a node with the given value
  remove(data) {
    let currentNode = this.head;
    let prevNode = null;

    // Traverse the list to find the node to remove
    while (currentNode && currentNode.data !== data) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    // If the node to remove is the head
    if (currentNode && prevNode === null) {
      this.head = currentNode.next;
      return;
    }

    // Remove the node by updating the previous node's next pointer
    if (currentNode) {
      prevNode.next = currentNode.next;
    }
  }

  // Print the linked list
  print() {
    let currentNode = this.head;
    let str = '';

    // Traverse the list and build the string representation
    while (currentNode) {
      str += `${currentNode.data} -> `;
      currentNode = currentNode.next;
    }

    str += 'null';
    console.log(str);
  }
}

// Example usage:
const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.insertAt(4, 2);
list.remove(2);
list.print();
