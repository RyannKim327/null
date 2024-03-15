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

  findMiddleElement() {
    if (!this.head) {
      return null;
    }
    
    let slow = this.head;
    let fast = this.head;
    
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    
    return slow.data;
  }
}

// Usage
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

console.log(list.findMiddleElement()); // Output: 3
