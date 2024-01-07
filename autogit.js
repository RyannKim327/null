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

    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else { // if the list is empty
      this.head = newNode;
      this.tail = newNode;
    }
  }

  prepend(data) {
    const newNode = new Node(data);

    if (this.head) {
      newNode.next = this.head;
      this.head = newNode;
    } else { // if the list is empty
      this.head = newNode;
      this.tail = newNode;
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

  remove(data) {
    if (!this.head) {
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

    while (currentNode.next) {
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

  print() {
    let currentNode = this.head;
    const listArr = [];

    while (currentNode) {
      listArr.push(currentNode.data);
      currentNode = currentNode.next;
    }

    console.log(listArr.join(' -> '));
  }
}
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.prepend(5);
list.print(); // Output: 5 -> 10 -> 20 -> 30

const foundNode = list.find(20);
console.log(foundNode.data); // Output: 20

list.remove(10);
list.print(); // Output: 5 -> 20 -> 30
