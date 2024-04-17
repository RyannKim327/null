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

  add(data) {
    const newNode = new Node(data);
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

  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;

    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  printList() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data + ' ');
      current = current.next;
    }
  }
}

// Example usage
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);

console.log('Original List:');
list.printList();

list.reverse();

console.log('Reversed List:');
list.printList();
