function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
const head = new Node(1);
const node2 = new Node(2);
head.next = node2;
const node3 = new Node(3);
node2.next = node3;
const tail = new Node(4);
node3.next = tail;
console.log('Original Linked List:')
let current = head;
while (current) {
  console.log(current.value);
  current = current.next;
}

const reversedHead = reverseLinkedList(head);

console.log('Reversed Linked List:')
current = reversedHead;
while (current) {
  console.log(current.value);
  current = current.next;
}
Original Linked List:
1
2
3
4
Reversed Linked List:
4
3
2
1
