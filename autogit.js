class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add a new node to the end of the list
  add(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Remove the node with the specified value from the list
  remove(value) {
    if (!this.head) {
      return;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let previous = null;
    while (current) {
      if (current.value === value) {
        previous.next = current.next;
        return;
      }
      previous = current;
      current = current.next;
    }
  }

  // Print the elements of the linked list
  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}
const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);

linkedList.print(); // Output: 1, 2, 3

linkedList.remove(2);
linkedList.print(); // Output: 1, 3
