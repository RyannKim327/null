class Node {
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

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  prepend(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  find(data) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.data === data) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  delete(data) {
    if (!this.head) {
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
      return;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.data === data) {
        currentNode.next = currentNode.next.next;
        if (currentNode.next === null) {
          this.tail = currentNode;
        }
        return;
      }
      currentNode = currentNode.next;
    }
  }

  print() {
    let currentNode = this.head;
    const elements = [];

    while (currentNode) {
      elements.push(currentNode.data);
      currentNode = currentNode.next;
    }

    console.log(elements.join(" -> "));
  }
}
const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.prepend(5);
linkedList.prepend(2);

linkedList.print(); // Output: 2 -> 5 -> 10 -> 20 -> 30

linkedList.delete(10);
linkedList.print(); // Output: 2 -> 5 -> 20 -> 30

console.log(linkedList.find(20)); // Output: Node { data: 20, next: Node { data: 30, next: null } }
