class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  let next = null;

  while (current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}
// Create a sample linked list: 1 -> 2 -> 3 -> 4 -> null
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

console.log('Original list:');
let current = head;
while (current != null) {
  console.log(current.data);
  current = current.next;
}

const reversedHead = reverseLinkedList(head);

console.log('Reversed list:');
current = reversedHead;
while (current != null) {
  console.log(current.data);
  current = current.next;
}
Original list:
1
2
3
4
Reversed list:
4
3
2
1
