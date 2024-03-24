class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  reverse() {
    let prev = null;
    let current = this.head;
    let next;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  printList() {
    let temp = this.head;
    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
  }

  addNode(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let temp = this.head;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = newNode;
    }
  }
}

// Creating a linked list
let list = new LinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(4);

console.log("Original Linked List:");
list.printList();

list.reverse();

console.log("\nReversed Linked List:");
list.printList();
