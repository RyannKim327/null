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

  append(data) {
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

  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  insertAfter(data, prevNodeData) {
    const newNode = new Node(data);
    let current = this.head;
    while (current) {
      if (current.data === prevNodeData) {
        newNode.next = current.next;
        current.next = newNode;
        break;
      }
      current = current.next;
    }
  }

  delete(data) {
    if (!this.head) {
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let prev = null;

    while (current) {
      if (current.data === data) {
        prev.next = current.next;
        break;
      }
      prev = current;
      current = current.next;
    }
  }

  display() {
    let current = this.head;
    let result = '';

    while (current) {
      result += current.data + ' -> ';
      current = current.next;
    }

    result += 'null';
    console.log(result);
  }
}

// Example usage:
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
list.insertAfter(2.5, 2);
list.display(); // Output: 0 -> 1 -> 2 -> 2.5 -> 3 -> null

list.delete(1);
list.display(); // Output: 0 -> 2 -> 2.5 -> 3 -> null
