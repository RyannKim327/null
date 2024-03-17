class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtEnd(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  getLength() {
    let length = 0;
    let current = this.head;

    while (current) {
      length++;
      current = current.next;
    }

    return length;
  }
}

// Creating a linked list instance
const linkedList = new LinkedList();
linkedList.insertAtEnd(1);
linkedList.insertAtEnd(2);
linkedList.insertAtEnd(3);

// Getting the length of the linked list
console.log(linkedList.getLength()); // Output: 3
