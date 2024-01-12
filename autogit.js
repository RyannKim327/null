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
}
class LinkedList {
  // ...

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
linkedList.head = new Node(1);
linkedList.head.next = new Node(2);
linkedList.head.next.next = new Node(3);

console.log("Original linked list:");
let current = linkedList.head;
while (current) {
  console.log(current.value);
  current = current.next;
}

linkedList.reverse();

console.log("Reversed linked list:");
current = linkedList.head;
while (current) {
  console.log(current.value);
  current = current.next;
}
Original linked list:
1
2
3
Reversed linked list:
3
2
1
