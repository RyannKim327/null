class Node {
  constructor(data) {
    this.data = data; // stores the data
    this.next = null; // stores the reference to the next node
  }
}

class LinkedList {
  constructor() {
    this.head = null; // stores the reference to the first node
  }

  add(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next !== null) {
        current = current.next;
      }
  
      current.next = newNode;
    }
  }

  getLength() {
    let current = this.head;
    let count = 0;

    while (current !== null) {
      count++;
      current = current.next;
    }

    return count;
  }
}

// Example usage
const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);

console.log(linkedList.getLength()); // Output: 3
