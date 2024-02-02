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
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
      }
      return;
    }

    let currentNode = this.head;
    while (currentNode.next !== null) {
      if (currentNode.next.data === data) {
        if (currentNode.next === this.tail) {
          this.tail = currentNode;
        }
        currentNode.next = currentNode.next.next;
        return;
      }
      currentNode = currentNode.next;
    }
  }

  search(data) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.data === data) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  print() {
    let currentNode = this.head;
    const listArr = [];
    while (currentNode !== null) {
      listArr.push(currentNode.data);
      currentNode = currentNode.next;
    }
    console.log(listArr.join(' -> '));
  }
}
const myList = new LinkedList();

myList.append(5);
myList.append(10);
myList.prepend(2);
myList.print(); // Output: 2 -> 5 -> 10

myList.delete(5);
myList.print(); // Output: 2 -> 10

console.log(myList.search(10)); // Output: Node { data: 10, next: null }
console.log(myList.search(5)); // Output: null
