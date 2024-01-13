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
  
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }
  
  getLength() {
    let current = this.head;
    let count = 0;

    while (current) {
      count++;
      current = current.next;
    }

    return count;
  }
}

// Example usage:
const myList = new LinkedList();
myList.append(1);
myList.append(2);
myList.append(3);
console.log(myList.getLength()); // Output: 3
