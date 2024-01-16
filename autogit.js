class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head === null;
  }

  insertAtHead(data) {
    const newNode = new LinkedListNode(data);
    if (this.isEmpty()) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  insertAtTail(data) {
    const newNode = new LinkedListNode(data);
    if (this.isEmpty()) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  deleteAtHead() {
    if (this.isEmpty()) {
      return null;
    }
    const data = this.head.data;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
    }
    return data;
  }

  deleteAtTail() {
    if (this.isEmpty()) {
      return null;
    }
    const data = this.tail.data;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== this.tail) {
        currentNode = currentNode.next;
      }
      currentNode.next = null;
      this.tail = currentNode;
    }
    return data;
  }

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
// Create a new linked list
const linkedList = new LinkedList();

// Insert some elements
linkedList.insertAtHead(3);
linkedList.insertAtHead(2);
linkedList.insertAtHead(1);
linkedList.insertAtTail(4);
linkedList.insertAtTail(5);

// Print the elements of the linked list
console.log(linkedList.toArray()); // [1, 2, 3, 4, 5]

// Delete the head and tail elements
linkedList.deleteAtHead();
linkedList.deleteAtTail();

// Print the elements after deletion
console.log(linkedList.toArray()); // [2, 3, 4]
