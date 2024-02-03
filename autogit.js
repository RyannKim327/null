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

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
  }

  delete(value) {
    if (!this.head) {
      return;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
      return;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
        if (!currentNode.next) {
          this.tail = currentNode;
        }
        return;
      }
      currentNode = currentNode.next;
    }
  }

  print() {
    const values = [];
    let currentNode = this.head;

    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(values.join(' -> '));
  }
}
const linkedList = new LinkedList();
linkedList.append(5);
linkedList.append(10);
linkedList.append(15);
linkedList.prepend(2);
linkedList.print(); // Output: 2 -> 5 -> 10 -> 15
linkedList.delete(10);
linkedList.print(); // Output: 2 -> 5 -> 15
