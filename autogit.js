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

  insert(index, value) {
    if (index <= 0) {
      this.prepend(value);
      return;
    }

    const newNode = new Node(value);
    let current = this.head;
    let previous = null;
    let count = 0;

    while (current && count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    if (count === index) {
      previous.next = newNode;
      newNode.next = current;

      if (!current) {
        this.tail = newNode;
      }
    } else {
      throw new Error("Index out of bounds");
    }
  }

  remove(index) {
    if (!this.head) {
      throw new Error("List is empty");
    }

    if (index === 0) {
      this.head = this.head.next;

      if (!this.head) {
        this.tail = null;
      }

      return;
    }

    let current = this.head;
    let previous = null;
    let count = 0;

    while (current && count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    if (count === index && current) {
      previous.next = current.next;

      if (!current.next) {
        this.tail = previous;
      }
    } else {
      throw new Error("Index out of bounds");
    }
  }

  toArray() {
    const arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.value);
      current = current.next;
    }

    return arr;
  }

  print() {
    console.log(this.toArray().join(" -> "));
  }
}
const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
list.insert(2, 99);
list.print(); // 0 -> 1 -> 99 -> 2 -> 3

list.remove(1);
list.print(); // 0 -> 99 -> 2 -> 3
