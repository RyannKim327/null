// Node class represents each element in the linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// LinkedList class manages the linked list
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // add an element to the end of the list
  add(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }

    this.size++;
  }

  // insert an element at a specified position
  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      return false;
    }

    const newNode = new Node(data);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let prev = null;
      let i = 0;

      while (i < index) {
        prev = current;
        current = current.next;
        i++;
      }

      newNode.next = current;
      prev.next = newNode;
    }

    this.size++;
    return true;
  }

  // remove an element at a specified position
  removeAt(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let current = this.head;
    let prev = null;
    let i = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (i < index) {
        prev = current;
        current = current.next;
        i++;
      }

      prev.next = current.next;
    }

    this.size--;
    return current.data;
  }

  // get the element at a specified position
  getAt(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let current = this.head;
    let i = 0;

    while (i < index) {
      current = current.next;
      i++;
    }

    return current.data;
  }

  // check if the list is empty
  isEmpty() {
    return this.size === 0;
  }

  // get the size of the list
  getSize() {
    return this.size;
  }

  // print the list
  print() {
    let current = this.head;
    let result = '';
    while (current) {
      result += current.data + ' ';
      current = current.next;
    }
    console.log(result.trim());
  }
}

// Example usage:

const linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(20);
linkedList.add(30);
linkedList.print(); // Output: 10 20 30

linkedList.insertAt(15, 1);
linkedList.print(); // Output: 10 15 20 30

linkedList.removeAt(2);
linkedList.print(); // Output: 10 15 30

console.log(linkedList.getAt(1)); // Output: 15

console.log(linkedList.isEmpty()); // Output: false

console.log(linkedList.getSize()); // Output: 3
