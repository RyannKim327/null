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

  // Method to add a value to the back of the linked list
  append(value) {
    const newNode = new Node(value);

    // If the list is empty, make the new node the head and tail
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Otherwise, add the new node to the end, update the tail
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Method to add a value to the front of the linked list
  prepend(value) {
    const newNode = new Node(value);

    // If the list is empty, make the new node the head and tail
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Otherwise, add the new node to the front, update the head
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  // Method to delete a node from the linked list
  delete(value) {
    if (!this.head) {
      return; // If the list is empty, nothing to delete
    }

    // If the node to delete is the head, update the head
    if (this.head.value === value) {
      this.head = this.head.next;
    } else {
      let current = this.head;

      // Iterate through the list until the next node is the one to delete
      while (current.next) {
        if (current.next.value === value) {
          current.next = current.next.next;
          break;
        }
        current = current.next;
      }
    }
  }

  // Method to search for a given value in the linked list
  search(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  // Method to convert the linked list to an array
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
const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.prepend(5);
linkedList.delete(10);

console.log(linkedList.toArray()); // Output: [5, 20]
console.log(linkedList.search(20)); // Output: true
console.log(linkedList.search(10)); // Output: false
