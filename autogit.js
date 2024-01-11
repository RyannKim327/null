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
    
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  prepend(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  delete(data) {
    if (this.head === null) {
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;

      if (this.head === null) {
        this.tail = null;
      }
      
      return;
    }

    let currentNode = this.head;
    while (currentNode.next !== null) {
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
    const result = [];

    while (currentNode !== null) {
      result.push(currentNode.data);
      currentNode = currentNode.next;
    }

    console.log(result);
  }
}
const list = new LinkedList();

list.append(10);
list.append(20);
list.prepend(5);
list.print(); // Output: [5, 10, 20]

list.delete(10);
list.print(); // Output: [5, 20]
