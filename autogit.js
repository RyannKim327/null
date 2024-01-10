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
  insert(value) {
    const newNode = new Node(value);

    if (!this.head) {
      // If the list is empty, set the new node as both head and tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      // If the list is not empty, append the new node to the tail
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Remove the first node in the list with the given value
  remove(value) {
    if (!this.head) {
      // If the list is empty, nothing to remove
      return;
    }

    // Special case: if the head node has the value
    if (this.head.value === value) {
      // If the head is also the tail, set the list as empty
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
      }
      return;
    }

    // Traverse the list to find the node before the one to remove
    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        // Remove the node by bypassing its reference in the list
        current.next = current.next.next;
        // Update the tail if necessary
        if (current.next === null) {
          this.tail = current;
        }
        return;
      }
      current = current.next;
    }
  }

  // Traverse the list and print all node values
  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}
const list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.print();  // Output: 1 2 3

list.remove(2);
list.print();  // Output: 1 3
