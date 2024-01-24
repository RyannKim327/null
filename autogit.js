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

  insertAfter(afterData, data) {
    const newNode = new Node(data);
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.data === afterData) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;

        if (currentNode === this.tail) {
          this.tail = newNode;
        }

        break;
      }

      currentNode = currentNode.next;
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

        break;
      }

      currentNode = currentNode.next;
    }
  }

  toArray() {
    const result = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      result.push(currentNode.data);
      currentNode = currentNode.next;
    }

    return result;
  }
}
const linkedList = new LinkedList();

linkedList.append(3);
linkedList.append(7);
linkedList.prepend(1);
linkedList.insertAfter(3, 5);
linkedList.delete(7);

console.log(linkedList.toArray()); // Output: [1, 3, 5]
