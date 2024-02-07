class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null; // reference to the first node in the list
    this.tail = null; // reference to the last node in the list
  }

  // Method to insert a new value at the end of the list
  insert(value) {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      // If the list is empty, set the new node as both the head and the tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      // If the list is not empty, append the new node after the current tail
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Method to delete a value from the list
  delete(value) {
    if (!this.head) {
      // If the list is empty, return immediately
      return;
    }

    if (this.head.value === value) {
      // If the value to delete is in the head node, update the head reference
      this.head = this.head.next;

      if (!this.head) {
        // If the list became empty, also update the tail reference
        this.tail = null;
      }
    } else {
      let currentNode = this.head;

      // Traverse the list until the value to delete is found or we reach the end
      while (currentNode.next && currentNode.next.value !== value) {
        currentNode = currentNode.next;
      }

      if (currentNode.next) {
        // If the value to delete is found, update the next reference of the previous node
        currentNode.next = currentNode.next.next;

        if (!currentNode.next) {
          // If the next node is null, update the tail reference
          this.tail = currentNode;
        }
      }
    }
  }

  // Method to traverse and print the values in the list
  traverse() {
    let currentNode = this.head;

    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}
const linkedList = new LinkedList();

linkedList.insert(5); // Inserting a value (5) into the list
linkedList.insert(10);
linkedList.insert(15);

linkedList.traverse(); // Output: 5, 10, 15

linkedList.delete(10); // Deleting a value (10) from the list

linkedList.traverse(); // Output: 5, 15
