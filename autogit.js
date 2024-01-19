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

  // method to reverse the linked list
  reverse() {
    let current = this.head;
    let prev = null;
    let next = null;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }
}
const linkedList = new LinkedList();

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

linkedList.head = node1;
node1.next = node2;
node2.next = node3;
// Before reversing
// 1 -> 2 -> 3

linkedList.reverse();

// After reversing
// 3 -> 2 -> 1
