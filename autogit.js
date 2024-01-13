class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add a new node to the end of the list
  append(data) {
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
  }

  // Insert a new node at a specified position
  insertAt(data, position) {
    const newNode = new Node(data);

    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let previous = null;
      let count = 0;

      while (count < position && current) {
        previous = current;
        current = current.next;
        count++;
      }

      newNode.next = current;
      previous.next = newNode;
    }
  }

  // Remove a node at a specified position
  removeAt(position) {
    if (!this.head) {
      return;
    }

    let current = this.head;
    let previous = null;
    let count = 0;

    if (position === 0) {
      this.head = current.next;
    } else {
      while (count < position && current) {
        previous = current;
        current = current.next;
        count++;
      }
  
      if (!current) {
        return;
      }
  
      previous.next = current.next;
    }
  }

  // Get the size of the linked list
  size() {
    let count = 0;
    let current = this.head;

    while (current) {
      count++;
      current = current.next;
    }

    return count;
  }

  // Convert the linked list to an array
  toArray() {
    const array = [];
    let current = this.head;

    while (current) {
      array.push(current.data);
      current = current.next;
    }

    return array;
  }
}
const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
list.insertAt(15, 1);
list.insertAt(25, 4);

console.log(list.toArray()); // [10, 15, 20, 25, 30]
console.log(list.size()); // 5

list.removeAt(2);

console.log(list.toArray()); // [10, 15, 25, 30]
console.log(list.size()); // 4
