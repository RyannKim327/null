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
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  find(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  delete(value) {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;

    if (this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;

      if (this.head === null) {
        this.tail = null;
      }
    } else {
      let currentNode = this.head;

      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;

          if (currentNode.next === null) {
            this.tail = currentNode;
          }
          break;
        }
        currentNode = currentNode.next;
      }
    }

    return deletedNode;
  }

  toArray() {
    const values = [];
    let currentNode = this.head;

    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return values;
  }

  print() {
    console.log(this.toArray().join(" -> "));
  }
}
const linkedList = new LinkedList();
linkedList.append(5);
linkedList.append(10);
linkedList.prepend(1);
linkedList.append(15);
linkedList.print();  // Output: 1 -> 5 -> 10 -> 15

console.log(linkedList.find(10));  // Output: Node { value: 10, next: Node { value: 15, next: null } }

console.log(linkedList.delete(5));  // Output: Node { value: 5, next: Node { value: 10, next: Node { value: 15, next: null } } }
linkedList.print();  // Output: 1 -> 10 -> 15
