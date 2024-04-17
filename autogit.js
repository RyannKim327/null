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

  findMiddleElement() {
    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow.data;
  }
}

// Example usage
const linkedList = new LinkedList();
linkedList.head = new Node(1);
linkedList.head.next = new Node(2);
linkedList.head.next.next = new Node(3);
linkedList.head.next.next.next = new Node(4);
linkedList.head.next.next.next.next = new Node(5);

console.log(linkedList.findMiddleElement()); // Output: 3
