class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev; // new head of the reversed list
}
// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log('Original Linked List:');
let temp = head;
while (temp !== null) {
  console.log(temp.value);
  temp = temp.next;
}

const reversedHead = reverseLinkedList(head);
console.log('Reversed Linked List:');
temp = reversedHead;
while (temp !== null) {
  console.log(temp.value);
  temp = temp.next;
}
Original Linked List:
1
2
3
4
5
Reversed Linked List:
5
4
3
2
1
