// Define the Node class
class Node {
  constructor(data) {
    this.data = data; // Data stored in the node
    this.next = null; // Link to the next node
  }
}

// Define the LinkedList class
class LinkedList {
  constructor() {
    this.head = null; // Points to the first node in the list
    this.tail = null; // Points to the last node in the list
  }

  // Add a new node to the end of the list
  append(data) {
    const newNode = new Node(data);

    // If the list is empty, make the new node the head and tail
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Otherwise, add the new node after the tail and update the tail
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Add a new node to the beginning of the list
  prepend(data) {
    const newNode = new Node(data);

    // If the list is empty, make the new node the head and tail
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Otherwise, add the new node before the head and update the head
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  // Delete the first occurrence of a node with the given data
  delete(data) {
    // If the list is empty, return immediately
    if (!this.head) {
      return;
    }

    // If the head node has the data, update the head
    if (this.head.data === data) {
      if (this.head === this.tail) {
        // If there's only one node in the list, set head and tail to null
        this.head = null;
        this.tail = null;
      } else {
        // Otherwise, update the head to the next node
        this.head = this.head.next;
      }
      return;
    }

    // Start from the head and find the node before the one to be deleted
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.data === data) {
        // If the next node has the data, update the links to skip it
        if (currentNode.next === this.tail) {
          // If the next node is the tail, update the tail
          this.tail = currentNode;
        }
        currentNode.next = currentNode.next.next;
        return;
      }
      currentNode = currentNode.next;
    }
  }

  // Convert the linked list to an array
  toArray() {
    const result = [];
    let currentNode = this.head;
    while (currentNode) {
      result.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return result;
  }
}

// Example usage
const list = new LinkedList();
list.append(10);
list.append(20);
list.prepend(5);
list.delete(10);
console.log(list.toArray()); // [5, 20]
