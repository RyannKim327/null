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

  isEmpty() {
    return this.head === null;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  append(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  contains(value) {
    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  delete(value) {
    if (this.isEmpty()) {
      return;
    }

    if (this.head.value === value) {
      this.head = this.head.next;

      if (this.head === null) {
        this.tail = null;
      }

      return;
    }

    let current = this.head;

    while (current.next !== null) {
      if (current.next.value === value) {
        if (current.next === this.tail) {
          this.tail = current;
          this.tail.next = null;
        } else {
          current.next = current.next.next;
        }
        return;
      }
      current = current.next;
    }
  }

  print() {
    let current = this.head;
    const values = [];

    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }

    console.log(values.join(' -> '));
  }
}
const linkedList = new LinkedList();

linkedList.append(10); // Appends a node with a value of 10
linkedList.append(20); // Appends a node with a value of 20
linkedList.prepend(5); // Prepends a node with a value of 5
linkedList.print(); // Prints: 5 -> 10 -> 20

console.log(linkedList.contains(20)); // Prints: true
console.log(linkedList.contains(15)); // Prints: false

linkedList.delete(10); // Deletes the node with a value of 10
linkedList.print(); // Prints: 5 -> 20
