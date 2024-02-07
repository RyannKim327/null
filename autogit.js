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

  isEmpty() {
    return this.head === null;
  }

  prepend(data) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  append(data) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  delete(data) {
    if (this.isEmpty()) {
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      if (this.head === null) {
        this.tail = null;
      }
      return;
    }

    let current = this.head;
    while (current.next !== null && current.next.data !== data) {
      current = current.next;
    }

    if (current.next !== null) {
      current.next = current.next.next;
      if (current.next === null) {
        this.tail = current;
      }
    }
  }

  search(data) {
    let current = this.head;
    while (current !== null) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toArray() {
    const dataArray = [];
    let current = this.head;
    while (current !== null) {
      dataArray.push(current.data);
      current = current.next;
    }
    return dataArray;
  }
}
const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

console.log(linkedList.toArray()); // [1, 2, 3]

linkedList.prepend(0);

console.log(linkedList.toArray()); // [0, 1, 2, 3]

console.log(linkedList.search(2)); // true
console.log(linkedList.search(4)); // false

linkedList.delete(1);

console.log(linkedList.toArray()); // [0, 2, 3]
