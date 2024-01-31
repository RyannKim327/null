// Define a Node class to represent each node in the linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Define a LinkedList class to represent the linked list
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Method to add a new node to the end of the list
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      // If the list is empty, set the new node as both head and tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      // If the list is not empty, append the new node after the tail
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Method to insert a new node at a specified position in the list
  insertAt(value, index) {
    const newNode = new Node(value);

    if (index === 0) {
      // If inserting at the beginning, set the new node as the new head
      newNode.next = this.head;
      this.head = newNode;
      if (!this.tail) {
        // If the list was empty, update the tail as well
        this.tail = newNode;
      }
    } else {
      let currentIndex = 0;
      let currentNode = this.head;
      let prevNode = null;

      while (currentNode && currentIndex < index) {
        // Traverse the list to the desired position
        prevNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }

      if (currentIndex === index) {
        // Insert the new node at the specified position
        newNode.next = currentNode;
        prevNode.next = newNode;

        if (!currentNode) {
          // If inserting at the end, update the tail as well
          this.tail = newNode;
        }
      } else {
        console.log('Index out of range.');
      }
    }
  }

  // Method to remove a node at a specified position from the list
  removeAt(index) {
    if (!this.head) {
      // If the list is empty, nothing to remove
      console.log('List is already empty.');
      return;
    }

    if (index === 0) {
      // If removing the head node
      this.head = this.head.next;
      if (!this.head) {
        // If the list had only one node, update the tail as well
        this.tail = null;
      }
      return;
    }

    let currentIndex = 0;
    let currentNode = this.head;
    let prevNode = null;

    while (currentNode && currentIndex < index) {
      // Traverse the list to the desired position
      prevNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }

    if (currentIndex === index && currentNode) {
      // Remove the node at the specified position
      prevNode.next = currentNode.next;

      if (!currentNode.next) {
        // If removing the last node, update the tail as well
        this.tail = prevNode;
      }
    } else {
      console.log('Index out of range.');
    }
  }

  // Method to retrieve the node value at a specified position in the list
  getAt(index) {
    let currentIndex = 0;
    let currentNode = this.head;

    while (currentNode && currentIndex < index) {
      // Traverse the list to the desired position
      currentNode = currentNode.next;
      currentIndex++;
    }

    if (currentIndex === index && currentNode) {
      return currentNode.value;
    } else {
      console.log('Index out of range.');
    }
  }

  // Method to print the linked list
  print() {
    let currentNode = this.head;
    const list = [];

    while (currentNode) {
      // Traverse the list and store node values in an array
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(list.join(' -> '));
  }
}

// Example usage:
const list = new LinkedList();
list.append(5);
list.append(10);
list.append(15);
list.append(20);
list.insertAt(25, 1);
list.removeAt(3);
list.print(); // Output: 5 -> 25 -> 10 -> 20
console.log(list.getAt(2)); // Output: 10
