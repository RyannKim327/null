class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  
  append(value) {
    const newNode = new Node(value);
    
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

console.log(list.getLength());  // Output: 3
