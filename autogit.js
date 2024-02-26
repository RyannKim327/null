class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

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

  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      return console.log("Invalid index");
    }

    const newNode = new Node(data);
    let current = this.head;
    let prev = null;
    let i = 0;

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      while (i < index) {
        i++;
        prev = current;
        current = current.next;
      }
      newNode.next = current;
      prev.next = newNode;
    }

    this.size++;
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return console.log("Invalid index");
    }

    let current = this.head;
    let prev = null;
    let i = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (i < index) {
        i++;
        prev = current;
        current = current.next;
      }
      prev.next = current.next;
    }

    this.size--;
    return current.data;
  }

  printList() {
    let current = this.head;
    let list = [];
    while(current) {
      list.push(current.data);
      current = current.next;
    }
    console.log(list.join(" -> "));
  }
}

// Example usage
const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.printList(); // Output: 1 -> 2 -> 3

linkedList.insertAt(4, 1);
linkedList.printList(); // Output: 1 -> 4 -> 2 -> 3

linkedList.removeFrom(2);
linkedList.printList(); // Output: 1 -> 4 -> 3
