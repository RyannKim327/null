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
    } else {
      let current = this.head;
  
      while (current.next) {
        current = current.next;
      }
  
      current.next = newNode;
    }
  }

  getLength() {
    let count = 0;
    let current = this.head;
  
    while (current) {
      count++;
      current = current.next;
    }
  
    return count;
  }
}

// Example usage
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);

console.log(list.getLength()); // Output: 4
